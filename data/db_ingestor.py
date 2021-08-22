"""Utility script to ingest CSV data into the company craft DB."""
import os
import re
import pandas
import sqlite3
from typing import List

RAW_DATA_DIR = './raw_data'


def format_snake_case(text: str):
    """Converts a camel case string to snake case."""
    text = re.sub(r'(?<!^)(?=[A-Z])', '_', text).lower()
    return text.replace('[', '_').replace(']', '')


class CompanyCraftDBIngestor:
    """Company Craft DB ingestor class"""

    def __init__(self):
        self.con = sqlite3.connect('ffxiv_company_craft.db')

    def __del__(self):
        self.con.close()

    def ingest_table(self, file_name: str, col_defs: str, cols_to_drop: List[str] = []) -> None:
        """Ingests a new table into the database.

        Args:
            file_name (str): Name (excluding extension) of the CSV file.
            col_defs (str): SQL-formatted definition of all columns, including foreign keys.
            cols_to_drop (List[str], optional): List of column labels to remove. Defaults to [].
        """
        table_name = format_snake_case(file_name)
        self.con.cursor().execute( f'CREATE TABLE {table_name} ({col_defs})')

        with open(f'{RAW_DATA_DIR}/{file_name}.csv') as csv_file:
            df = pandas.read_csv(csv_file, header=1)

        df = df.rename({'#': 'id'}, axis=1).iloc[1:, :].drop(cols_to_drop)
        df.columns = [format_snake_case(col) for col in df.columns]

        df.to_sql(table_name, self.con, if_exists='append', index=False)

    def init_db(self) -> None:
        """Initializes and populates DB tables."""
        self.ingest_table(
            'CompanyCraftType',
            """ id INTEGER NOT NULL PRIMARY KEY,
                name TEXT
            """
        )

        self.ingest_table(
            'CompanyCraftDraftCategory',
            """ id INTEGER NOT NULL PRIMARY KEY,
                name TEXT,
                FOREIGN KEY (company_craft_type_0) REFERENCES company_craft_type(id),
                FOREIGN KEY (company_craft_type_1) REFERENCES company_craft_type(id),
                FOREIGN KEY (company_craft_type_2) REFERENCES company_craft_type(id),
                FOREIGN KEY (company_craft_type_3) REFERENCES company_craft_type(id),
                FOREIGN KEY (company_craft_type_4) REFERENCES company_craft_type(id),
                FOREIGN KEY (company_craft_type_5) REFERENCES company_craft_type(id),
                FOREIGN KEY (company_craft_type_6) REFERENCES company_craft_type(id),
                FOREIGN KEY (company_craft_type_7) REFERENCES company_craft_type(id),
                FOREIGN KEY (company_craft_type_8) REFERENCES company_craft_type(id),
                FOREIGN KEY (company_craft_type_9) REFERENCES company_craft_type(id)
            """
        )


if __name__ == '__main__':
    try:
        os.remove('ffxiv_company_craft.db')
    except FileNotFoundError:
        pass

    ingestor = CompanyCraftDBIngestor()
    ingestor.init_db()
