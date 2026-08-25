
import csv
import random
import string

def generate_id(existing_ids, length=8):
    while True:
        new_id = ''.join(random.choices(string.ascii_letters + string.digits, k=length))
        if new_id not in existing_ids:
            return new_id

input_file = 'public/sr_guests.csv'
output_file = 'public/sr_guests_with_ids.csv'
domain = 'https://wedding-card-sr.vercel.app/'

existing_ids = set()
rows = []


with open(input_file, newline='', encoding='utf-8') as csvfile:
    reader = csv.DictReader(csvfile)
    print('CSV fieldnames:', reader.fieldnames)
    for row in reader:
        print('Row:', row)
        guest_name = row.get('guest_name')
        if guest_name is None:
            guest_name = row.get('\ufeffguest_name', '')
        guest_name = guest_name.strip()
        # Skip blank lines or rows without a guest name
        if guest_name:
            guest_id = generate_id(existing_ids)
            existing_ids.add(guest_id)
            guest_url = f"{domain}{guest_id}"
            rows.append({'guest_name': guest_name, 'guest_id': guest_id, 'guest_url': guest_url})

with open(output_file, 'w', newline='', encoding='utf-8') as csvfile:
    fieldnames = ['guest_name', 'guest_id', 'guest_url']
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()
    for row in rows:
        writer.writerow(row)

print(f"Generated {len(rows)} guests with unique ids and urls.")