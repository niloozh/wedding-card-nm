import pandas as pd

csv_file = 'public/sr_guests_with_ids.csv'
xlsx_file = 'public/sr_guests_with_ids.xlsx'

df = pd.read_csv(csv_file)
df.to_excel(xlsx_file, index=False)
print(f'Converted {csv_file} to {xlsx_file}')
