import pandas as pd
import mysql.connector as connector
from mysql.connector import Error

df1 = "./2019_turisme_allotjament.gpkg"
df2 = "./2019_turisme_intensitat.gpkg"
punts_interes_csv = "./opendatabcn_pics-csv_with_DN.csv"

puntos_interes = pd.read_csv(punts_interes_csv)

puntos_interes_data = puntos_interes[["name","addresses_road_name", "addresses_start_street_number", "addresses_neighborhood_name", "addresses_district_name", "addresses_zip_code", "geo_epgs_4326_x", "geo_epgs_4326_y", "DN"]]
puntos_interes_data = puntos_interes_data.rename(columns={"addresses_road_name" : "street", "addresses_start_street_number" : "streetNum", "addresses_neighborhood_name" : "neighbourhood", "addresses_district_name" : "district", "addresses_zip_code" : "zipcode", "geo_epgs_4326_x" : "longLongitude", "geo_epgs_4326_y" : "longLatitude", "DN" : "density"})
puntos_interes_data["streetNum"] = puntos_interes_data["streetNum"].values.astype(int)
puntos_interes_data["streetNum"] = puntos_interes_data["streetNum"].values.astype(str)
puntos_interes_data["density"] = puntos_interes_data["density"].values.astype(int)

puntos_interes_data.to_csv("puntos_de_interes_2.csv")

print(puntos_interes_data)

try:
    connection = connector.connect(
        host="localhost",
        user="root",
        password="password",
        database="desvia"
    )

    if connection.is_connected():
        cursor = connection.cursor()
except Error as e:
    print("Error al conectar a MySQL:", e)

table_name = 'interest_points'
columns = ', '.join(puntos_interes_data.columns)  # asume que los nombres de columnas son iguales a los de la tabla
values = ', '.join(['%s'] * len(puntos_interes_data.columns))

sql = f"INSERT INTO {table_name} ({columns}) VALUES ({values})"

try:
    # Inserta cada fila del DataFrame en la tabla
    for row in puntos_interes_data.itertuples(index=False):
        cursor.execute(sql, tuple(row))

    connection.commit()
    print("Datos insertados correctamente.")
except Error as e:
    print("Error al insertar datos en MySQL:", e)
finally:
    cursor.close()
    connection.close()