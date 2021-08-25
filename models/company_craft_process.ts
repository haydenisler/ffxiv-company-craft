import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { company_craft_part, company_craft_partId } from './company_craft_part';
import type { company_craft_supply_item, company_craft_supply_itemId } from './company_craft_supply_item';

export interface company_craft_processAttributes {
  id: number;
  supply_item_0?: number;
  set_quantity_0?: number;
  sets_required_0?: number;
  supply_item_1?: number;
  set_quantity_1?: number;
  sets_required_1?: number;
  supply_item_2?: number;
  set_quantity_2?: number;
  sets_required_2?: number;
  supply_item_3?: number;
  set_quantity_3?: number;
  sets_required_3?: number;
  supply_item_4?: number;
  set_quantity_4?: number;
  sets_required_4?: number;
  supply_item_5?: number;
  set_quantity_5?: number;
  sets_required_5?: number;
  supply_item_6?: number;
  set_quantity_6?: number;
  sets_required_6?: number;
  supply_item_7?: number;
  set_quantity_7?: number;
  sets_required_7?: number;
  supply_item_8?: number;
  set_quantity_8?: number;
  sets_required_8?: number;
  supply_item_9?: number;
  set_quantity_9?: number;
  sets_required_9?: number;
  supply_item_10?: number;
  set_quantity_10?: number;
  sets_required_10?: number;
  supply_item_11?: number;
  set_quantity_11?: number;
  sets_required_11?: number;
}

export type company_craft_processPk = "id";
export type company_craft_processId = company_craft_process[company_craft_processPk];
export type company_craft_processOptionalAttributes = "id" | "supply_item_0" | "set_quantity_0" | "sets_required_0" | "supply_item_1" | "set_quantity_1" | "sets_required_1" | "supply_item_2" | "set_quantity_2" | "sets_required_2" | "supply_item_3" | "set_quantity_3" | "sets_required_3" | "supply_item_4" | "set_quantity_4" | "sets_required_4" | "supply_item_5" | "set_quantity_5" | "sets_required_5" | "supply_item_6" | "set_quantity_6" | "sets_required_6" | "supply_item_7" | "set_quantity_7" | "sets_required_7" | "supply_item_8" | "set_quantity_8" | "sets_required_8" | "supply_item_9" | "set_quantity_9" | "sets_required_9" | "supply_item_10" | "set_quantity_10" | "sets_required_10" | "supply_item_11" | "set_quantity_11" | "sets_required_11";
export type company_craft_processCreationAttributes = Optional<company_craft_processAttributes, company_craft_processOptionalAttributes>;

export class company_craft_process extends Model<company_craft_processAttributes, company_craft_processCreationAttributes> implements company_craft_processAttributes {
  id!: number;
  supply_item_0?: number;
  set_quantity_0?: number;
  sets_required_0?: number;
  supply_item_1?: number;
  set_quantity_1?: number;
  sets_required_1?: number;
  supply_item_2?: number;
  set_quantity_2?: number;
  sets_required_2?: number;
  supply_item_3?: number;
  set_quantity_3?: number;
  sets_required_3?: number;
  supply_item_4?: number;
  set_quantity_4?: number;
  sets_required_4?: number;
  supply_item_5?: number;
  set_quantity_5?: number;
  sets_required_5?: number;
  supply_item_6?: number;
  set_quantity_6?: number;
  sets_required_6?: number;
  supply_item_7?: number;
  set_quantity_7?: number;
  sets_required_7?: number;
  supply_item_8?: number;
  set_quantity_8?: number;
  sets_required_8?: number;
  supply_item_9?: number;
  set_quantity_9?: number;
  sets_required_9?: number;
  supply_item_10?: number;
  set_quantity_10?: number;
  sets_required_10?: number;
  supply_item_11?: number;
  set_quantity_11?: number;
  sets_required_11?: number;

  // company_craft_process hasMany company_craft_part via company_craft_process_2
  company_craft_parts!: company_craft_part[];
  getCompany_craft_parts!: Sequelize.HasManyGetAssociationsMixin<company_craft_part>;
  setCompany_craft_parts!: Sequelize.HasManySetAssociationsMixin<company_craft_part, company_craft_partId>;
  addCompany_craft_part!: Sequelize.HasManyAddAssociationMixin<company_craft_part, company_craft_partId>;
  addCompany_craft_parts!: Sequelize.HasManyAddAssociationsMixin<company_craft_part, company_craft_partId>;
  createCompany_craft_part!: Sequelize.HasManyCreateAssociationMixin<company_craft_part>;
  removeCompany_craft_part!: Sequelize.HasManyRemoveAssociationMixin<company_craft_part, company_craft_partId>;
  removeCompany_craft_parts!: Sequelize.HasManyRemoveAssociationsMixin<company_craft_part, company_craft_partId>;
  hasCompany_craft_part!: Sequelize.HasManyHasAssociationMixin<company_craft_part, company_craft_partId>;
  hasCompany_craft_parts!: Sequelize.HasManyHasAssociationsMixin<company_craft_part, company_craft_partId>;
  countCompany_craft_parts!: Sequelize.HasManyCountAssociationsMixin;
  // company_craft_process hasMany company_craft_part via company_craft_process_1
  company_craft_process_1_company_craft_parts!: company_craft_part[];
  getCompany_craft_process_1_company_craft_parts!: Sequelize.HasManyGetAssociationsMixin<company_craft_part>;
  setCompany_craft_process_1_company_craft_parts!: Sequelize.HasManySetAssociationsMixin<company_craft_part, company_craft_partId>;
  addCompany_craft_process_1_company_craft_part!: Sequelize.HasManyAddAssociationMixin<company_craft_part, company_craft_partId>;
  addCompany_craft_process_1_company_craft_parts!: Sequelize.HasManyAddAssociationsMixin<company_craft_part, company_craft_partId>;
  createCompany_craft_process_1_company_craft_part!: Sequelize.HasManyCreateAssociationMixin<company_craft_part>;
  removeCompany_craft_process_1_company_craft_part!: Sequelize.HasManyRemoveAssociationMixin<company_craft_part, company_craft_partId>;
  removeCompany_craft_process_1_company_craft_parts!: Sequelize.HasManyRemoveAssociationsMixin<company_craft_part, company_craft_partId>;
  hasCompany_craft_process_1_company_craft_part!: Sequelize.HasManyHasAssociationMixin<company_craft_part, company_craft_partId>;
  hasCompany_craft_process_1_company_craft_parts!: Sequelize.HasManyHasAssociationsMixin<company_craft_part, company_craft_partId>;
  countCompany_craft_process_1_company_craft_parts!: Sequelize.HasManyCountAssociationsMixin;
  // company_craft_process hasMany company_craft_part via company_craft_process_0
  company_craft_process_0_company_craft_parts!: company_craft_part[];
  getCompany_craft_process_0_company_craft_parts!: Sequelize.HasManyGetAssociationsMixin<company_craft_part>;
  setCompany_craft_process_0_company_craft_parts!: Sequelize.HasManySetAssociationsMixin<company_craft_part, company_craft_partId>;
  addCompany_craft_process_0_company_craft_part!: Sequelize.HasManyAddAssociationMixin<company_craft_part, company_craft_partId>;
  addCompany_craft_process_0_company_craft_parts!: Sequelize.HasManyAddAssociationsMixin<company_craft_part, company_craft_partId>;
  createCompany_craft_process_0_company_craft_part!: Sequelize.HasManyCreateAssociationMixin<company_craft_part>;
  removeCompany_craft_process_0_company_craft_part!: Sequelize.HasManyRemoveAssociationMixin<company_craft_part, company_craft_partId>;
  removeCompany_craft_process_0_company_craft_parts!: Sequelize.HasManyRemoveAssociationsMixin<company_craft_part, company_craft_partId>;
  hasCompany_craft_process_0_company_craft_part!: Sequelize.HasManyHasAssociationMixin<company_craft_part, company_craft_partId>;
  hasCompany_craft_process_0_company_craft_parts!: Sequelize.HasManyHasAssociationsMixin<company_craft_part, company_craft_partId>;
  countCompany_craft_process_0_company_craft_parts!: Sequelize.HasManyCountAssociationsMixin;
  // company_craft_process belongsTo company_craft_supply_item via supply_item_11
  supply_item_11_company_craft_supply_item!: company_craft_supply_item;
  getSupply_item_11_company_craft_supply_item!: Sequelize.BelongsToGetAssociationMixin<company_craft_supply_item>;
  setSupply_item_11_company_craft_supply_item!: Sequelize.BelongsToSetAssociationMixin<company_craft_supply_item, company_craft_supply_itemId>;
  createSupply_item_11_company_craft_supply_item!: Sequelize.BelongsToCreateAssociationMixin<company_craft_supply_item>;
  // company_craft_process belongsTo company_craft_supply_item via supply_item_10
  supply_item_10_company_craft_supply_item!: company_craft_supply_item;
  getSupply_item_10_company_craft_supply_item!: Sequelize.BelongsToGetAssociationMixin<company_craft_supply_item>;
  setSupply_item_10_company_craft_supply_item!: Sequelize.BelongsToSetAssociationMixin<company_craft_supply_item, company_craft_supply_itemId>;
  createSupply_item_10_company_craft_supply_item!: Sequelize.BelongsToCreateAssociationMixin<company_craft_supply_item>;
  // company_craft_process belongsTo company_craft_supply_item via supply_item_9
  supply_item_9_company_craft_supply_item!: company_craft_supply_item;
  getSupply_item_9_company_craft_supply_item!: Sequelize.BelongsToGetAssociationMixin<company_craft_supply_item>;
  setSupply_item_9_company_craft_supply_item!: Sequelize.BelongsToSetAssociationMixin<company_craft_supply_item, company_craft_supply_itemId>;
  createSupply_item_9_company_craft_supply_item!: Sequelize.BelongsToCreateAssociationMixin<company_craft_supply_item>;
  // company_craft_process belongsTo company_craft_supply_item via supply_item_8
  supply_item_8_company_craft_supply_item!: company_craft_supply_item;
  getSupply_item_8_company_craft_supply_item!: Sequelize.BelongsToGetAssociationMixin<company_craft_supply_item>;
  setSupply_item_8_company_craft_supply_item!: Sequelize.BelongsToSetAssociationMixin<company_craft_supply_item, company_craft_supply_itemId>;
  createSupply_item_8_company_craft_supply_item!: Sequelize.BelongsToCreateAssociationMixin<company_craft_supply_item>;
  // company_craft_process belongsTo company_craft_supply_item via supply_item_7
  supply_item_7_company_craft_supply_item!: company_craft_supply_item;
  getSupply_item_7_company_craft_supply_item!: Sequelize.BelongsToGetAssociationMixin<company_craft_supply_item>;
  setSupply_item_7_company_craft_supply_item!: Sequelize.BelongsToSetAssociationMixin<company_craft_supply_item, company_craft_supply_itemId>;
  createSupply_item_7_company_craft_supply_item!: Sequelize.BelongsToCreateAssociationMixin<company_craft_supply_item>;
  // company_craft_process belongsTo company_craft_supply_item via supply_item_6
  supply_item_6_company_craft_supply_item!: company_craft_supply_item;
  getSupply_item_6_company_craft_supply_item!: Sequelize.BelongsToGetAssociationMixin<company_craft_supply_item>;
  setSupply_item_6_company_craft_supply_item!: Sequelize.BelongsToSetAssociationMixin<company_craft_supply_item, company_craft_supply_itemId>;
  createSupply_item_6_company_craft_supply_item!: Sequelize.BelongsToCreateAssociationMixin<company_craft_supply_item>;
  // company_craft_process belongsTo company_craft_supply_item via supply_item_5
  supply_item_5_company_craft_supply_item!: company_craft_supply_item;
  getSupply_item_5_company_craft_supply_item!: Sequelize.BelongsToGetAssociationMixin<company_craft_supply_item>;
  setSupply_item_5_company_craft_supply_item!: Sequelize.BelongsToSetAssociationMixin<company_craft_supply_item, company_craft_supply_itemId>;
  createSupply_item_5_company_craft_supply_item!: Sequelize.BelongsToCreateAssociationMixin<company_craft_supply_item>;
  // company_craft_process belongsTo company_craft_supply_item via supply_item_4
  supply_item_4_company_craft_supply_item!: company_craft_supply_item;
  getSupply_item_4_company_craft_supply_item!: Sequelize.BelongsToGetAssociationMixin<company_craft_supply_item>;
  setSupply_item_4_company_craft_supply_item!: Sequelize.BelongsToSetAssociationMixin<company_craft_supply_item, company_craft_supply_itemId>;
  createSupply_item_4_company_craft_supply_item!: Sequelize.BelongsToCreateAssociationMixin<company_craft_supply_item>;
  // company_craft_process belongsTo company_craft_supply_item via supply_item_3
  supply_item_3_company_craft_supply_item!: company_craft_supply_item;
  getSupply_item_3_company_craft_supply_item!: Sequelize.BelongsToGetAssociationMixin<company_craft_supply_item>;
  setSupply_item_3_company_craft_supply_item!: Sequelize.BelongsToSetAssociationMixin<company_craft_supply_item, company_craft_supply_itemId>;
  createSupply_item_3_company_craft_supply_item!: Sequelize.BelongsToCreateAssociationMixin<company_craft_supply_item>;
  // company_craft_process belongsTo company_craft_supply_item via supply_item_2
  supply_item_2_company_craft_supply_item!: company_craft_supply_item;
  getSupply_item_2_company_craft_supply_item!: Sequelize.BelongsToGetAssociationMixin<company_craft_supply_item>;
  setSupply_item_2_company_craft_supply_item!: Sequelize.BelongsToSetAssociationMixin<company_craft_supply_item, company_craft_supply_itemId>;
  createSupply_item_2_company_craft_supply_item!: Sequelize.BelongsToCreateAssociationMixin<company_craft_supply_item>;
  // company_craft_process belongsTo company_craft_supply_item via supply_item_1
  supply_item_1_company_craft_supply_item!: company_craft_supply_item;
  getSupply_item_1_company_craft_supply_item!: Sequelize.BelongsToGetAssociationMixin<company_craft_supply_item>;
  setSupply_item_1_company_craft_supply_item!: Sequelize.BelongsToSetAssociationMixin<company_craft_supply_item, company_craft_supply_itemId>;
  createSupply_item_1_company_craft_supply_item!: Sequelize.BelongsToCreateAssociationMixin<company_craft_supply_item>;
  // company_craft_process belongsTo company_craft_supply_item via supply_item_0
  supply_item_0_company_craft_supply_item!: company_craft_supply_item;
  getSupply_item_0_company_craft_supply_item!: Sequelize.BelongsToGetAssociationMixin<company_craft_supply_item>;
  setSupply_item_0_company_craft_supply_item!: Sequelize.BelongsToSetAssociationMixin<company_craft_supply_item, company_craft_supply_itemId>;
  createSupply_item_0_company_craft_supply_item!: Sequelize.BelongsToCreateAssociationMixin<company_craft_supply_item>;

  static initModel(sequelize: Sequelize.Sequelize): typeof company_craft_process {
    company_craft_process.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    supply_item_0: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'company_craft_supply_item',
        key: 'id'
      }
    },
    set_quantity_0: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sets_required_0: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    supply_item_1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'company_craft_supply_item',
        key: 'id'
      }
    },
    set_quantity_1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sets_required_1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    supply_item_2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'company_craft_supply_item',
        key: 'id'
      }
    },
    set_quantity_2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sets_required_2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    supply_item_3: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'company_craft_supply_item',
        key: 'id'
      }
    },
    set_quantity_3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sets_required_3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    supply_item_4: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'company_craft_supply_item',
        key: 'id'
      }
    },
    set_quantity_4: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sets_required_4: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    supply_item_5: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'company_craft_supply_item',
        key: 'id'
      }
    },
    set_quantity_5: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sets_required_5: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    supply_item_6: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'company_craft_supply_item',
        key: 'id'
      }
    },
    set_quantity_6: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sets_required_6: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    supply_item_7: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'company_craft_supply_item',
        key: 'id'
      }
    },
    set_quantity_7: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sets_required_7: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    supply_item_8: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'company_craft_supply_item',
        key: 'id'
      }
    },
    set_quantity_8: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sets_required_8: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    supply_item_9: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'company_craft_supply_item',
        key: 'id'
      }
    },
    set_quantity_9: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sets_required_9: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    supply_item_10: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'company_craft_supply_item',
        key: 'id'
      }
    },
    set_quantity_10: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sets_required_10: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    supply_item_11: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'company_craft_supply_item',
        key: 'id'
      }
    },
    set_quantity_11: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sets_required_11: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'company_craft_process',
    timestamps: false
  });
  return company_craft_process;
  }
}
