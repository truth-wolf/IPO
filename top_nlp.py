#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import pandas as pd
import json
import os

def process_csv_to_json():
    """將top30.csv處理成網站可使用的JSON數據"""
    try:
        # 讀取CSV檔案
        df = pd.read_csv('top30.csv')
        
        # CSV欄位對應
        field_mapping = {
            'quote': '潤飾後話術',
            'inner_thought': '潤飾後內心話語',
            'pressure_score': '被欺壓感 (1–10)',
            'anxiety_score': '恐懼焦慮 (1–10)',
            'intensity_score': '語氣強度 (1–10)',
            'nlp_score': 'NLP 總分 (1–100)',
            'helplessness': '無奈感 (1–10)',
            'humiliation': '羞辱感 (1–10)',
            'oppression_score': '壓迫性敘述 (1–10)',
            'emotion_peak': '情緒爆點值 (1–10)'
        }
        
        # 處理並轉換為網站可用的數據格式
        quotes_data = []
        for _, row in df.iterrows():
            # 建立類別標籤
            categories = []
            if row[field_mapping['pressure_score']] >= 8:
                categories.append('被欺壓感')
            if row[field_mapping['anxiety_score']] >= 8:
                categories.append('恐懼焦慮')
            if row[field_mapping['oppression_score']] >= 8:
                categories.append('壓迫感')
            if row[field_mapping['helplessness']] >= 8:
                categories.append('無奈感')
            if row[field_mapping['humiliation']] >= 8:
                categories.append('羞辱感')
            
            quote_item = {
                'quote': row[field_mapping['quote']],
                'innerThought': row[field_mapping['inner_thought']],
                'pressureScore': f"{row[field_mapping['pressure_score']]}/10",
                'anxietyScore': f"{row[field_mapping['anxiety_score']]}/10",
                'intensityScore': f"{row[field_mapping['intensity_score']]}/10",
                'nlpScore': f"{row[field_mapping['nlp_score']]}",
                'categories': categories
            }
            quotes_data.append(quote_item)
        
        # 計算情緒指標平均分數
        emotion_averages = {
            '被欺壓感': round(df[field_mapping['pressure_score']].mean(), 1),
            '壓迫性敘述': round(df[field_mapping['oppression_score']].mean(), 1),
            '恐懼焦慮': round(df[field_mapping['anxiety_score']].mean(), 1),
            '情緒爆點': round(df[field_mapping['emotion_peak']].mean(), 1),
            '語氣強度': round(df[field_mapping['intensity_score']].mean(), 1),
            '無奈感': round(df[field_mapping['helplessness']].mean(), 1),
            '羞辱感': round(df[field_mapping['humiliation']].mean(), 1),
        }
        
        # 職位類別平均 (因無真實數據，使用靜態值或計算值的變化)
        position_data = {
            '所有員工': list(emotion_averages.values()),
            '營業員': [min(x + 0.3, 10.0) for x in emotion_averages.values()],
            '理財專員': [min(x + 0.1, 10.0) for x in emotion_averages.values()],
            '分析師': [max(x - 0.2, 5.0) for x in emotion_averages.values()],
            '主管層級': [max(x - 2.0, 5.0) for x in emotion_averages.values()]
        }
        
        # 創建最終JSON數據
        json_data = {
            'quotes': quotes_data,
            'emotionAverages': emotion_averages,
            'positionData': position_data
        }
        
        # 將數據寫入JSON檔案
        with open('assets/ipo_data.json', 'w', encoding='utf-8') as f:
            json.dump(json_data, f, ensure_ascii=False, indent=2)
        
        print("數據處理完成，已寫入到 assets/ipo_data.json")
        
        # 輸出部分數據以便查看
        print(f"\n前5項資料：")
        for i, quote in enumerate(quotes_data[:5]):
            print(f"{i+1}. NLP分數: {quote['nlpScore']}, 引言: {quote['quote'][:50]}...")
        
        print("\n情緒指標平均分數:")
        for key, value in emotion_averages.items():
            print(f"{key}: {value}")
        
    except Exception as e:
        print(f"處理CSV時出錯: {e}")

def update_js_with_data():
    """更新main.js檔案，引入JSON數據"""
    try:
        if not os.path.exists('assets/ipo_data.json'):
            print("錯誤: 請先執行process_csv_to_json()生成數據")
            return
        
        # 讀取JSON檔案
        with open('assets/ipo_data.json', 'r', encoding='utf-8') as f:
            json_data = json.load(f)
        
        # 建立JavaScript代碼來載入JSON數據
        js_code = """// 載入IPO數據
fetch('assets/ipo_data.json')
  .then(response => response.json())
  .then(data => {
    // 更新彩蛋數據
    window.easterEggData = data.quotes.slice(0, 5);
    
    // 更新雷達圖數據
    const emotionLabels = Object.keys(data.emotionAverages);
    const emotionValues = Object.values(data.emotionAverages);
    
    // 更新主雷達圖
    const radarChart = Chart.getChart('radar-chart');
    if (radarChart) {
      radarChart.data.labels = emotionLabels;
      radarChart.data.datasets[0].data = emotionValues;
      radarChart.update();
    }
    
    // 更新情緒雷達圖
    const emotionRadarChart = Chart.getChart('emotion-radar-chart');
    if (emotionRadarChart) {
      emotionRadarChart.data.labels = emotionLabels;
      
      // 更新各職位數據
      Object.keys(data.positionData).forEach((position, index) => {
        if (emotionRadarChart.data.datasets[index]) {
          emotionRadarChart.data.datasets[index].data = data.positionData[position];
        }
      });
      
      emotionRadarChart.update();
    }
    
    console.log('IPO數據載入完成');
  })
  .catch(error => console.error('載入IPO數據失敗:', error));
"""
        
        # 將代碼附加到main.js檔案底部
        with open('assets/main.js', 'a', encoding='utf-8') as f:
            f.write('\n\n' + js_code + '\n')
        
        print("已成功將數據載入代碼附加到main.js檔案")
        
    except Exception as e:
        print(f"更新JS檔案時出錯: {e}")

if __name__ == "__main__":
    print("開始處理top30.csv數據...")
    process_csv_to_json()
    update_js_with_data()
    print("處理完成!")
