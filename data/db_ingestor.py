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
        self.con.cursor().execute(f'CREATE TABLE {table_name} ({col_defs})')

        with open(f'{RAW_DATA_DIR}/{file_name}.csv') as csv_file:
            df = pandas.read_csv(csv_file, header=1)

        df = df.rename({'#': 'id'}, axis=1).iloc[1:, :]
        df = df.drop(df.columns[cols_to_drop], axis=1)
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
                company_craft_type_0 INTEGER,
                company_craft_type_1 INTEGER,
                company_craft_type_2 INTEGER,
                company_craft_type_3 INTEGER,
                company_craft_type_4 INTEGER,
                company_craft_type_5 INTEGER,
                company_craft_type_6 INTEGER,
                company_craft_type_7 INTEGER,
                company_craft_type_8 INTEGER,
                company_craft_type_9 INTEGER,
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

        self.ingest_table(
            'CompanyCraftDraft',
            """ id INTEGER NOT NULL PRIMARY KEY,
                name TEXT,
                company_craft_draft_category INTEGER,
                required_item_0 INTEGER,
                required_item_count_0 INTEGER,
                required_item_1 INTEGER,
                required_item_count_1 INTEGER,
                required_item_2 INTEGER,
                required_item_count_2 INTEGER,
                FOREIGN KEY (company_craft_draft_category) REFERENCES company_craft_draft_category(id)
            """,
            cols_to_drop=[9]
        )

        self.ingest_table(
            'CompanyCraftSupplyItem',
            """ id INTEGER NOT NULL PRIMARY KEY,
                item INTEGER
            """
        )

        self.ingest_table(
            'CompanyCraftProcess',
            """ id INTEGER NOT NULL PRIMARY KEY,
                supply_item_0 INTEGER,
                set_quantity_0 INTEGER,
                sets_required_0 INTEGER,
                supply_item_1 INTEGER,
                set_quantity_1 INTEGER,
                sets_required_1 INTEGER,
                supply_item_2 INTEGER,
                set_quantity_2 INTEGER,
                sets_required_2 INTEGER,
                supply_item_3 INTEGER,
                set_quantity_3 INTEGER,
                sets_required_3 INTEGER,
                supply_item_4 INTEGER,
                set_quantity_4 INTEGER,
                sets_required_4 INTEGER,
                supply_item_5 INTEGER,
                set_quantity_5 INTEGER,
                sets_required_5 INTEGER,
                supply_item_6 INTEGER,
                set_quantity_6 INTEGER,
                sets_required_6 INTEGER,
                supply_item_7 INTEGER,
                set_quantity_7 INTEGER,
                sets_required_7 INTEGER,
                supply_item_8 INTEGER,
                set_quantity_8 INTEGER,
                sets_required_8 INTEGER,
                supply_item_9 INTEGER,
                set_quantity_9 INTEGER,
                sets_required_9 INTEGER,
                supply_item_10 INTEGER,
                set_quantity_10 INTEGER,
                sets_required_10 INTEGER,
                supply_item_11 INTEGER,
                set_quantity_11 INTEGER,
                sets_required_11 INTEGER,
                FOREIGN KEY (supply_item_0) REFERENCES company_craft_supply_item(id),
                FOREIGN KEY (supply_item_1) REFERENCES company_craft_supply_item(id),
                FOREIGN KEY (supply_item_2) REFERENCES company_craft_supply_item(id),
                FOREIGN KEY (supply_item_3) REFERENCES company_craft_supply_item(id),
                FOREIGN KEY (supply_item_4) REFERENCES company_craft_supply_item(id),
                FOREIGN KEY (supply_item_5) REFERENCES company_craft_supply_item(id),
                FOREIGN KEY (supply_item_6) REFERENCES company_craft_supply_item(id),
                FOREIGN KEY (supply_item_7) REFERENCES company_craft_supply_item(id),
                FOREIGN KEY (supply_item_8) REFERENCES company_craft_supply_item(id),
                FOREIGN KEY (supply_item_9) REFERENCES company_craft_supply_item(id),
                FOREIGN KEY (supply_item_10) REFERENCES company_craft_supply_item(id),
                FOREIGN KEY (supply_item_11) REFERENCES company_craft_supply_item(id)
            """
        )

        self.ingest_table(
            'CompanyCraftPart',
            """ id INTEGER NOT NULL PRIMARY KEY,
                company_craft_type INTEGER,
                company_craft_process_0 INTEGER,
                company_craft_process_1 INTEGER,
                company_craft_process_2 INTEGER,
                FOREIGN KEY (company_craft_type) REFERENCES company_craft_type(id),
                FOREIGN KEY (company_craft_process_0) REFERENCES company_craft_process(id),
                FOREIGN KEY (company_craft_process_1) REFERENCES company_craft_process(id),
                FOREIGN KEY (company_craft_process_2) REFERENCES company_craft_process(id)
            """,
            cols_to_drop=[1, 6]
        )

        self.ingest_table(
            'CompanyCraftSequence',
            """ id INTEGER NOT NULL PRIMARY KEY,
                result_item INTEGER,
                category INTEGER,
                company_craft_draft_category INTEGER,
                company_craft_type INTEGER,
                company_craft_draft INTEGER,
                company_craft_part_0 INTEGER,
                company_craft_part_1 INTEGER,
                company_craft_part_2 INTEGER,
                company_craft_part_3 INTEGER,
                company_craft_part_4 INTEGER,
                company_craft_part_5 INTEGER,
                company_craft_part_6 INTEGER,
                company_craft_part_7 INTEGER,
                FOREIGN KEY (company_craft_draft_category) REFERENCES company_craft_draft_category(id),
                FOREIGN KEY (company_craft_type) REFERENCES company_craft_type(id),
                FOREIGN KEY (company_craft_draft) REFERENCES company_craft_draft(id),
                FOREIGN KEY (company_craft_part_0) REFERENCES company_craft_part(id),
                FOREIGN KEY (company_craft_part_1) REFERENCES company_craft_part(id),
                FOREIGN KEY (company_craft_part_2) REFERENCES company_craft_part(id),
                FOREIGN KEY (company_craft_part_3) REFERENCES company_craft_part(id),
                FOREIGN KEY (company_craft_part_4) REFERENCES company_craft_part(id),
                FOREIGN KEY (company_craft_part_5) REFERENCES company_craft_part(id),
                FOREIGN KEY (company_craft_part_6) REFERENCES company_craft_part(id),
                FOREIGN KEY (company_craft_part_7) REFERENCES company_craft_part(id)
            """,
            cols_to_drop=[14]
        )


if __name__ == '__main__':
    try:
        os.remove('ffxiv_company_craft.db')
    except FileNotFoundError:
        pass

    ingestor = CompanyCraftDBIngestor()
    ingestor.init_db()
