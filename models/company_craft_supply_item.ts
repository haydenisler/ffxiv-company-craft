import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { company_craft_process, company_craft_processId } from './company_craft_process';

export interface company_craft_supply_itemAttributes {
  id: number;
  item?: number;
}

export type company_craft_supply_itemPk = "id";
export type company_craft_supply_itemId = company_craft_supply_item[company_craft_supply_itemPk];
export type company_craft_supply_itemOptionalAttributes = "id" | "item";
export type company_craft_supply_itemCreationAttributes = Optional<company_craft_supply_itemAttributes, company_craft_supply_itemOptionalAttributes>;

export class company_craft_supply_item extends Model<company_craft_supply_itemAttributes, company_craft_supply_itemCreationAttributes> implements company_craft_supply_itemAttributes {
  id!: number;
  item?: number;

  // company_craft_supply_item hasMany company_craft_process via supply_item_11
  company_craft_processes!: company_craft_process[];
  getCompany_craft_processes!: Sequelize.HasManyGetAssociationsMixin<company_craft_process>;
  setCompany_craft_processes!: Sequelize.HasManySetAssociationsMixin<company_craft_process, company_craft_processId>;
  addCompany_craft_process!: Sequelize.HasManyAddAssociationMixin<company_craft_process, company_craft_processId>;
  addCompany_craft_processes!: Sequelize.HasManyAddAssociationsMixin<company_craft_process, company_craft_processId>;
  createCompany_craft_process!: Sequelize.HasManyCreateAssociationMixin<company_craft_process>;
  removeCompany_craft_process!: Sequelize.HasManyRemoveAssociationMixin<company_craft_process, company_craft_processId>;
  removeCompany_craft_processes!: Sequelize.HasManyRemoveAssociationsMixin<company_craft_process, company_craft_processId>;
  hasCompany_craft_process!: Sequelize.HasManyHasAssociationMixin<company_craft_process, company_craft_processId>;
  hasCompany_craft_processes!: Sequelize.HasManyHasAssociationsMixin<company_craft_process, company_craft_processId>;
  countCompany_craft_processes!: Sequelize.HasManyCountAssociationsMixin;
  // company_craft_supply_item hasMany company_craft_process via supply_item_10
  supply_item_10_company_craft_processes!: company_craft_process[];
  getSupply_item_10_company_craft_processes!: Sequelize.HasManyGetAssociationsMixin<company_craft_process>;
  setSupply_item_10_company_craft_processes!: Sequelize.HasManySetAssociationsMixin<company_craft_process, company_craft_processId>;
  addSupply_item_10_company_craft_process!: Sequelize.HasManyAddAssociationMixin<company_craft_process, company_craft_processId>;
  addSupply_item_10_company_craft_processes!: Sequelize.HasManyAddAssociationsMixin<company_craft_process, company_craft_processId>;
  createSupply_item_10_company_craft_process!: Sequelize.HasManyCreateAssociationMixin<company_craft_process>;
  removeSupply_item_10_company_craft_process!: Sequelize.HasManyRemoveAssociationMixin<company_craft_process, company_craft_processId>;
  removeSupply_item_10_company_craft_processes!: Sequelize.HasManyRemoveAssociationsMixin<company_craft_process, company_craft_processId>;
  hasSupply_item_10_company_craft_process!: Sequelize.HasManyHasAssociationMixin<company_craft_process, company_craft_processId>;
  hasSupply_item_10_company_craft_processes!: Sequelize.HasManyHasAssociationsMixin<company_craft_process, company_craft_processId>;
  countSupply_item_10_company_craft_processes!: Sequelize.HasManyCountAssociationsMixin;
  // company_craft_supply_item hasMany company_craft_process via supply_item_9
  supply_item_9_company_craft_processes!: company_craft_process[];
  getSupply_item_9_company_craft_processes!: Sequelize.HasManyGetAssociationsMixin<company_craft_process>;
  setSupply_item_9_company_craft_processes!: Sequelize.HasManySetAssociationsMixin<company_craft_process, company_craft_processId>;
  addSupply_item_9_company_craft_process!: Sequelize.HasManyAddAssociationMixin<company_craft_process, company_craft_processId>;
  addSupply_item_9_company_craft_processes!: Sequelize.HasManyAddAssociationsMixin<company_craft_process, company_craft_processId>;
  createSupply_item_9_company_craft_process!: Sequelize.HasManyCreateAssociationMixin<company_craft_process>;
  removeSupply_item_9_company_craft_process!: Sequelize.HasManyRemoveAssociationMixin<company_craft_process, company_craft_processId>;
  removeSupply_item_9_company_craft_processes!: Sequelize.HasManyRemoveAssociationsMixin<company_craft_process, company_craft_processId>;
  hasSupply_item_9_company_craft_process!: Sequelize.HasManyHasAssociationMixin<company_craft_process, company_craft_processId>;
  hasSupply_item_9_company_craft_processes!: Sequelize.HasManyHasAssociationsMixin<company_craft_process, company_craft_processId>;
  countSupply_item_9_company_craft_processes!: Sequelize.HasManyCountAssociationsMixin;
  // company_craft_supply_item hasMany company_craft_process via supply_item_8
  supply_item_8_company_craft_processes!: company_craft_process[];
  getSupply_item_8_company_craft_processes!: Sequelize.HasManyGetAssociationsMixin<company_craft_process>;
  setSupply_item_8_company_craft_processes!: Sequelize.HasManySetAssociationsMixin<company_craft_process, company_craft_processId>;
  addSupply_item_8_company_craft_process!: Sequelize.HasManyAddAssociationMixin<company_craft_process, company_craft_processId>;
  addSupply_item_8_company_craft_processes!: Sequelize.HasManyAddAssociationsMixin<company_craft_process, company_craft_processId>;
  createSupply_item_8_company_craft_process!: Sequelize.HasManyCreateAssociationMixin<company_craft_process>;
  removeSupply_item_8_company_craft_process!: Sequelize.HasManyRemoveAssociationMixin<company_craft_process, company_craft_processId>;
  removeSupply_item_8_company_craft_processes!: Sequelize.HasManyRemoveAssociationsMixin<company_craft_process, company_craft_processId>;
  hasSupply_item_8_company_craft_process!: Sequelize.HasManyHasAssociationMixin<company_craft_process, company_craft_processId>;
  hasSupply_item_8_company_craft_processes!: Sequelize.HasManyHasAssociationsMixin<company_craft_process, company_craft_processId>;
  countSupply_item_8_company_craft_processes!: Sequelize.HasManyCountAssociationsMixin;
  // company_craft_supply_item hasMany company_craft_process via supply_item_7
  supply_item_7_company_craft_processes!: company_craft_process[];
  getSupply_item_7_company_craft_processes!: Sequelize.HasManyGetAssociationsMixin<company_craft_process>;
  setSupply_item_7_company_craft_processes!: Sequelize.HasManySetAssociationsMixin<company_craft_process, company_craft_processId>;
  addSupply_item_7_company_craft_process!: Sequelize.HasManyAddAssociationMixin<company_craft_process, company_craft_processId>;
  addSupply_item_7_company_craft_processes!: Sequelize.HasManyAddAssociationsMixin<company_craft_process, company_craft_processId>;
  createSupply_item_7_company_craft_process!: Sequelize.HasManyCreateAssociationMixin<company_craft_process>;
  removeSupply_item_7_company_craft_process!: Sequelize.HasManyRemoveAssociationMixin<company_craft_process, company_craft_processId>;
  removeSupply_item_7_company_craft_processes!: Sequelize.HasManyRemoveAssociationsMixin<company_craft_process, company_craft_processId>;
  hasSupply_item_7_company_craft_process!: Sequelize.HasManyHasAssociationMixin<company_craft_process, company_craft_processId>;
  hasSupply_item_7_company_craft_processes!: Sequelize.HasManyHasAssociationsMixin<company_craft_process, company_craft_processId>;
  countSupply_item_7_company_craft_processes!: Sequelize.HasManyCountAssociationsMixin;
  // company_craft_supply_item hasMany company_craft_process via supply_item_6
  supply_item_6_company_craft_processes!: company_craft_process[];
  getSupply_item_6_company_craft_processes!: Sequelize.HasManyGetAssociationsMixin<company_craft_process>;
  setSupply_item_6_company_craft_processes!: Sequelize.HasManySetAssociationsMixin<company_craft_process, company_craft_processId>;
  addSupply_item_6_company_craft_process!: Sequelize.HasManyAddAssociationMixin<company_craft_process, company_craft_processId>;
  addSupply_item_6_company_craft_processes!: Sequelize.HasManyAddAssociationsMixin<company_craft_process, company_craft_processId>;
  createSupply_item_6_company_craft_process!: Sequelize.HasManyCreateAssociationMixin<company_craft_process>;
  removeSupply_item_6_company_craft_process!: Sequelize.HasManyRemoveAssociationMixin<company_craft_process, company_craft_processId>;
  removeSupply_item_6_company_craft_processes!: Sequelize.HasManyRemoveAssociationsMixin<company_craft_process, company_craft_processId>;
  hasSupply_item_6_company_craft_process!: Sequelize.HasManyHasAssociationMixin<company_craft_process, company_craft_processId>;
  hasSupply_item_6_company_craft_processes!: Sequelize.HasManyHasAssociationsMixin<company_craft_process, company_craft_processId>;
  countSupply_item_6_company_craft_processes!: Sequelize.HasManyCountAssociationsMixin;
  // company_craft_supply_item hasMany company_craft_process via supply_item_5
  supply_item_5_company_craft_processes!: company_craft_process[];
  getSupply_item_5_company_craft_processes!: Sequelize.HasManyGetAssociationsMixin<company_craft_process>;
  setSupply_item_5_company_craft_processes!: Sequelize.HasManySetAssociationsMixin<company_craft_process, company_craft_processId>;
  addSupply_item_5_company_craft_process!: Sequelize.HasManyAddAssociationMixin<company_craft_process, company_craft_processId>;
  addSupply_item_5_company_craft_processes!: Sequelize.HasManyAddAssociationsMixin<company_craft_process, company_craft_processId>;
  createSupply_item_5_company_craft_process!: Sequelize.HasManyCreateAssociationMixin<company_craft_process>;
  removeSupply_item_5_company_craft_process!: Sequelize.HasManyRemoveAssociationMixin<company_craft_process, company_craft_processId>;
  removeSupply_item_5_company_craft_processes!: Sequelize.HasManyRemoveAssociationsMixin<company_craft_process, company_craft_processId>;
  hasSupply_item_5_company_craft_process!: Sequelize.HasManyHasAssociationMixin<company_craft_process, company_craft_processId>;
  hasSupply_item_5_company_craft_processes!: Sequelize.HasManyHasAssociationsMixin<company_craft_process, company_craft_processId>;
  countSupply_item_5_company_craft_processes!: Sequelize.HasManyCountAssociationsMixin;
  // company_craft_supply_item hasMany company_craft_process via supply_item_4
  supply_item_4_company_craft_processes!: company_craft_process[];
  getSupply_item_4_company_craft_processes!: Sequelize.HasManyGetAssociationsMixin<company_craft_process>;
  setSupply_item_4_company_craft_processes!: Sequelize.HasManySetAssociationsMixin<company_craft_process, company_craft_processId>;
  addSupply_item_4_company_craft_process!: Sequelize.HasManyAddAssociationMixin<company_craft_process, company_craft_processId>;
  addSupply_item_4_company_craft_processes!: Sequelize.HasManyAddAssociationsMixin<company_craft_process, company_craft_processId>;
  createSupply_item_4_company_craft_process!: Sequelize.HasManyCreateAssociationMixin<company_craft_process>;
  removeSupply_item_4_company_craft_process!: Sequelize.HasManyRemoveAssociationMixin<company_craft_process, company_craft_processId>;
  removeSupply_item_4_company_craft_processes!: Sequelize.HasManyRemoveAssociationsMixin<company_craft_process, company_craft_processId>;
  hasSupply_item_4_company_craft_process!: Sequelize.HasManyHasAssociationMixin<company_craft_process, company_craft_processId>;
  hasSupply_item_4_company_craft_processes!: Sequelize.HasManyHasAssociationsMixin<company_craft_process, company_craft_processId>;
  countSupply_item_4_company_craft_processes!: Sequelize.HasManyCountAssociationsMixin;
  // company_craft_supply_item hasMany company_craft_process via supply_item_3
  supply_item_3_company_craft_processes!: company_craft_process[];
  getSupply_item_3_company_craft_processes!: Sequelize.HasManyGetAssociationsMixin<company_craft_process>;
  setSupply_item_3_company_craft_processes!: Sequelize.HasManySetAssociationsMixin<company_craft_process, company_craft_processId>;
  addSupply_item_3_company_craft_process!: Sequelize.HasManyAddAssociationMixin<company_craft_process, company_craft_processId>;
  addSupply_item_3_company_craft_processes!: Sequelize.HasManyAddAssociationsMixin<company_craft_process, company_craft_processId>;
  createSupply_item_3_company_craft_process!: Sequelize.HasManyCreateAssociationMixin<company_craft_process>;
  removeSupply_item_3_company_craft_process!: Sequelize.HasManyRemoveAssociationMixin<company_craft_process, company_craft_processId>;
  removeSupply_item_3_company_craft_processes!: Sequelize.HasManyRemoveAssociationsMixin<company_craft_process, company_craft_processId>;
  hasSupply_item_3_company_craft_process!: Sequelize.HasManyHasAssociationMixin<company_craft_process, company_craft_processId>;
  hasSupply_item_3_company_craft_processes!: Sequelize.HasManyHasAssociationsMixin<company_craft_process, company_craft_processId>;
  countSupply_item_3_company_craft_processes!: Sequelize.HasManyCountAssociationsMixin;
  // company_craft_supply_item hasMany company_craft_process via supply_item_2
  supply_item_2_company_craft_processes!: company_craft_process[];
  getSupply_item_2_company_craft_processes!: Sequelize.HasManyGetAssociationsMixin<company_craft_process>;
  setSupply_item_2_company_craft_processes!: Sequelize.HasManySetAssociationsMixin<company_craft_process, company_craft_processId>;
  addSupply_item_2_company_craft_process!: Sequelize.HasManyAddAssociationMixin<company_craft_process, company_craft_processId>;
  addSupply_item_2_company_craft_processes!: Sequelize.HasManyAddAssociationsMixin<company_craft_process, company_craft_processId>;
  createSupply_item_2_company_craft_process!: Sequelize.HasManyCreateAssociationMixin<company_craft_process>;
  removeSupply_item_2_company_craft_process!: Sequelize.HasManyRemoveAssociationMixin<company_craft_process, company_craft_processId>;
  removeSupply_item_2_company_craft_processes!: Sequelize.HasManyRemoveAssociationsMixin<company_craft_process, company_craft_processId>;
  hasSupply_item_2_company_craft_process!: Sequelize.HasManyHasAssociationMixin<company_craft_process, company_craft_processId>;
  hasSupply_item_2_company_craft_processes!: Sequelize.HasManyHasAssociationsMixin<company_craft_process, company_craft_processId>;
  countSupply_item_2_company_craft_processes!: Sequelize.HasManyCountAssociationsMixin;
  // company_craft_supply_item hasMany company_craft_process via supply_item_1
  supply_item_1_company_craft_processes!: company_craft_process[];
  getSupply_item_1_company_craft_processes!: Sequelize.HasManyGetAssociationsMixin<company_craft_process>;
  setSupply_item_1_company_craft_processes!: Sequelize.HasManySetAssociationsMixin<company_craft_process, company_craft_processId>;
  addSupply_item_1_company_craft_process!: Sequelize.HasManyAddAssociationMixin<company_craft_process, company_craft_processId>;
  addSupply_item_1_company_craft_processes!: Sequelize.HasManyAddAssociationsMixin<company_craft_process, company_craft_processId>;
  createSupply_item_1_company_craft_process!: Sequelize.HasManyCreateAssociationMixin<company_craft_process>;
  removeSupply_item_1_company_craft_process!: Sequelize.HasManyRemoveAssociationMixin<company_craft_process, company_craft_processId>;
  removeSupply_item_1_company_craft_processes!: Sequelize.HasManyRemoveAssociationsMixin<company_craft_process, company_craft_processId>;
  hasSupply_item_1_company_craft_process!: Sequelize.HasManyHasAssociationMixin<company_craft_process, company_craft_processId>;
  hasSupply_item_1_company_craft_processes!: Sequelize.HasManyHasAssociationsMixin<company_craft_process, company_craft_processId>;
  countSupply_item_1_company_craft_processes!: Sequelize.HasManyCountAssociationsMixin;
  // company_craft_supply_item hasMany company_craft_process via supply_item_0
  supply_item_0_company_craft_processes!: company_craft_process[];
  getSupply_item_0_company_craft_processes!: Sequelize.HasManyGetAssociationsMixin<company_craft_process>;
  setSupply_item_0_company_craft_processes!: Sequelize.HasManySetAssociationsMixin<company_craft_process, company_craft_processId>;
  addSupply_item_0_company_craft_process!: Sequelize.HasManyAddAssociationMixin<company_craft_process, company_craft_processId>;
  addSupply_item_0_company_craft_processes!: Sequelize.HasManyAddAssociationsMixin<company_craft_process, company_craft_processId>;
  createSupply_item_0_company_craft_process!: Sequelize.HasManyCreateAssociationMixin<company_craft_process>;
  removeSupply_item_0_company_craft_process!: Sequelize.HasManyRemoveAssociationMixin<company_craft_process, company_craft_processId>;
  removeSupply_item_0_company_craft_processes!: Sequelize.HasManyRemoveAssociationsMixin<company_craft_process, company_craft_processId>;
  hasSupply_item_0_company_craft_process!: Sequelize.HasManyHasAssociationMixin<company_craft_process, company_craft_processId>;
  hasSupply_item_0_company_craft_processes!: Sequelize.HasManyHasAssociationsMixin<company_craft_process, company_craft_processId>;
  countSupply_item_0_company_craft_processes!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof company_craft_supply_item {
    company_craft_supply_item.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    item: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'company_craft_supply_item',
    timestamps: false
  });
  return company_craft_supply_item;
  }
}
