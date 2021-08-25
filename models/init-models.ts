import type { Sequelize, Model } from "sequelize";
import { company_craft_draft } from "./company_craft_draft";
import type { company_craft_draftAttributes, company_craft_draftCreationAttributes } from "./company_craft_draft";
import { company_craft_draft_category } from "./company_craft_draft_category";
import type { company_craft_draft_categoryAttributes, company_craft_draft_categoryCreationAttributes } from "./company_craft_draft_category";
import { company_craft_part } from "./company_craft_part";
import type { company_craft_partAttributes, company_craft_partCreationAttributes } from "./company_craft_part";
import { company_craft_process } from "./company_craft_process";
import type { company_craft_processAttributes, company_craft_processCreationAttributes } from "./company_craft_process";
import { company_craft_sequence } from "./company_craft_sequence";
import type { company_craft_sequenceAttributes, company_craft_sequenceCreationAttributes } from "./company_craft_sequence";
import { company_craft_supply_item } from "./company_craft_supply_item";
import type { company_craft_supply_itemAttributes, company_craft_supply_itemCreationAttributes } from "./company_craft_supply_item";
import { company_craft_type } from "./company_craft_type";
import type { company_craft_typeAttributes, company_craft_typeCreationAttributes } from "./company_craft_type";

export {
  company_craft_draft,
  company_craft_draft_category,
  company_craft_part,
  company_craft_process,
  company_craft_sequence,
  company_craft_supply_item,
  company_craft_type,
};

export type {
  company_craft_draftAttributes,
  company_craft_draftCreationAttributes,
  company_craft_draft_categoryAttributes,
  company_craft_draft_categoryCreationAttributes,
  company_craft_partAttributes,
  company_craft_partCreationAttributes,
  company_craft_processAttributes,
  company_craft_processCreationAttributes,
  company_craft_sequenceAttributes,
  company_craft_sequenceCreationAttributes,
  company_craft_supply_itemAttributes,
  company_craft_supply_itemCreationAttributes,
  company_craft_typeAttributes,
  company_craft_typeCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  company_craft_draft.initModel(sequelize);
  company_craft_draft_category.initModel(sequelize);
  company_craft_part.initModel(sequelize);
  company_craft_process.initModel(sequelize);
  company_craft_sequence.initModel(sequelize);
  company_craft_supply_item.initModel(sequelize);
  company_craft_type.initModel(sequelize);

  company_craft_sequence.belongsTo(company_craft_draft, { foreignKey: "company_craft_draft"});
  company_craft_draft.hasMany(company_craft_sequence, { foreignKey: "company_craft_draft"});
  company_craft_draft.belongsTo(company_craft_draft_category, { foreignKey: "company_craft_draft_category"});
  company_craft_draft_category.hasMany(company_craft_draft, { foreignKey: "company_craft_draft_category"});
  company_craft_sequence.belongsTo(company_craft_draft_category, { foreignKey: "company_craft_draft_category"});
  company_craft_draft_category.hasMany(company_craft_sequence, { foreignKey: "company_craft_draft_category"});
  company_craft_sequence.belongsTo(company_craft_part, { foreignKey: "company_craft_part_7"});
  company_craft_part.hasMany(company_craft_sequence, { foreignKey: "company_craft_part_7"});
  company_craft_sequence.belongsTo(company_craft_part, { foreignKey: "company_craft_part_6"});
  company_craft_part.hasMany(company_craft_sequence, { foreignKey: "company_craft_part_6"});
  company_craft_sequence.belongsTo(company_craft_part, { foreignKey: "company_craft_part_5"});
  company_craft_part.hasMany(company_craft_sequence, { foreignKey: "company_craft_part_5"});
  company_craft_sequence.belongsTo(company_craft_part, { foreignKey: "company_craft_part_4"});
  company_craft_part.hasMany(company_craft_sequence, { foreignKey: "company_craft_part_4"});
  company_craft_sequence.belongsTo(company_craft_part, { foreignKey: "company_craft_part_3"});
  company_craft_part.hasMany(company_craft_sequence, { foreignKey: "company_craft_part_3"});
  company_craft_sequence.belongsTo(company_craft_part, { foreignKey: "company_craft_part_2"});
  company_craft_part.hasMany(company_craft_sequence, { foreignKey: "company_craft_part_2"});
  company_craft_sequence.belongsTo(company_craft_part, { foreignKey: "company_craft_part_1"});
  company_craft_part.hasMany(company_craft_sequence, { foreignKey: "company_craft_part_1"});
  company_craft_sequence.belongsTo(company_craft_part, { foreignKey: "company_craft_part_0"});
  company_craft_part.hasMany(company_craft_sequence, { foreignKey: "company_craft_part_0"});
  company_craft_part.belongsTo(company_craft_process, { foreignKey: "company_craft_process_2"});
  company_craft_process.hasMany(company_craft_part, { foreignKey: "company_craft_process_2"});
  company_craft_part.belongsTo(company_craft_process, { foreignKey: "company_craft_process_1"});
  company_craft_process.hasMany(company_craft_part, { foreignKey: "company_craft_process_1"});
  company_craft_part.belongsTo(company_craft_process, { foreignKey: "company_craft_process_0"});
  company_craft_process.hasMany(company_craft_part, { foreignKey: "company_craft_process_0"});
  company_craft_process.belongsTo(company_craft_supply_item, { foreignKey: "supply_item_11"});
  company_craft_supply_item.hasMany(company_craft_process, { foreignKey: "supply_item_11"});
  company_craft_process.belongsTo(company_craft_supply_item, { foreignKey: "supply_item_10"});
  company_craft_supply_item.hasMany(company_craft_process, { foreignKey: "supply_item_10"});
  company_craft_process.belongsTo(company_craft_supply_item, { foreignKey: "supply_item_9"});
  company_craft_supply_item.hasMany(company_craft_process, { foreignKey: "supply_item_9"});
  company_craft_process.belongsTo(company_craft_supply_item, { foreignKey: "supply_item_8"});
  company_craft_supply_item.hasMany(company_craft_process, { foreignKey: "supply_item_8"});
  company_craft_process.belongsTo(company_craft_supply_item, { foreignKey: "supply_item_7"});
  company_craft_supply_item.hasMany(company_craft_process, { foreignKey: "supply_item_7"});
  company_craft_process.belongsTo(company_craft_supply_item, { foreignKey: "supply_item_6"});
  company_craft_supply_item.hasMany(company_craft_process, { foreignKey: "supply_item_6"});
  company_craft_process.belongsTo(company_craft_supply_item, { foreignKey: "supply_item_5"});
  company_craft_supply_item.hasMany(company_craft_process, { foreignKey: "supply_item_5"});
  company_craft_process.belongsTo(company_craft_supply_item, { foreignKey: "supply_item_4"});
  company_craft_supply_item.hasMany(company_craft_process, { foreignKey: "supply_item_4"});
  company_craft_process.belongsTo(company_craft_supply_item, { foreignKey: "supply_item_3"});
  company_craft_supply_item.hasMany(company_craft_process, { foreignKey: "supply_item_3"});
  company_craft_process.belongsTo(company_craft_supply_item, { foreignKey: "supply_item_2"});
  company_craft_supply_item.hasMany(company_craft_process, { foreignKey: "supply_item_2"});
  company_craft_process.belongsTo(company_craft_supply_item, { foreignKey: "supply_item_1"});
  company_craft_supply_item.hasMany(company_craft_process, { foreignKey: "supply_item_1"});
  company_craft_process.belongsTo(company_craft_supply_item, { foreignKey: "supply_item_0"});
  company_craft_supply_item.hasMany(company_craft_process, { foreignKey: "supply_item_0"});
  company_craft_draft_category.belongsTo(company_craft_type, { foreignKey: "company_craft_type_9"});
  company_craft_type.hasMany(company_craft_draft_category, { foreignKey: "company_craft_type_9"});
  company_craft_draft_category.belongsTo(company_craft_type, { foreignKey: "company_craft_type_8"});
  company_craft_type.hasMany(company_craft_draft_category, { foreignKey: "company_craft_type_8"});
  company_craft_draft_category.belongsTo(company_craft_type, { foreignKey: "company_craft_type_7"});
  company_craft_type.hasMany(company_craft_draft_category, { foreignKey: "company_craft_type_7"});
  company_craft_draft_category.belongsTo(company_craft_type, { foreignKey: "company_craft_type_6"});
  company_craft_type.hasMany(company_craft_draft_category, { foreignKey: "company_craft_type_6"});
  company_craft_draft_category.belongsTo(company_craft_type, { foreignKey: "company_craft_type_5"});
  company_craft_type.hasMany(company_craft_draft_category, { foreignKey: "company_craft_type_5"});
  company_craft_draft_category.belongsTo(company_craft_type, { foreignKey: "company_craft_type_4"});
  company_craft_type.hasMany(company_craft_draft_category, { foreignKey: "company_craft_type_4"});
  company_craft_draft_category.belongsTo(company_craft_type, { foreignKey: "company_craft_type_3"});
  company_craft_type.hasMany(company_craft_draft_category, { foreignKey: "company_craft_type_3"});
  company_craft_draft_category.belongsTo(company_craft_type, { foreignKey: "company_craft_type_2"});
  company_craft_type.hasMany(company_craft_draft_category, { foreignKey: "company_craft_type_2"});
  company_craft_draft_category.belongsTo(company_craft_type, { foreignKey: "company_craft_type_1"});
  company_craft_type.hasMany(company_craft_draft_category, { foreignKey: "company_craft_type_1"});
  company_craft_draft_category.belongsTo(company_craft_type, { foreignKey: "company_craft_type_0"});
  company_craft_type.hasMany(company_craft_draft_category, { foreignKey: "company_craft_type_0"});
  company_craft_part.belongsTo(company_craft_type, { foreignKey: "company_craft_type"});
  company_craft_type.hasMany(company_craft_part, { foreignKey: "company_craft_type"});
  company_craft_sequence.belongsTo(company_craft_type, { foreignKey: "company_craft_type"});
  company_craft_type.hasMany(company_craft_sequence, { foreignKey: "company_craft_type"});

  return {
    company_craft_draft: company_craft_draft,
    company_craft_draft_category: company_craft_draft_category,
    company_craft_part: company_craft_part,
    company_craft_process: company_craft_process,
    company_craft_sequence: company_craft_sequence,
    company_craft_supply_item: company_craft_supply_item,
    company_craft_type: company_craft_type,
  };
}
