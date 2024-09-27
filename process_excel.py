import pandas as pd
import json

# 读取Excel文件
df = pd.read_excel('corpus.xlsx')

# 将数据转换为JSON格式
data = df.to_dict('records')

# 将JSON数据写入文件
with open('corpus_data.js', 'w', encoding='utf-8') as f:
    f.write('const corpusData = ' + json.dumps(data, ensure_ascii=False) + ';')