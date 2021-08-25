import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { company_craft_process, company_craft_processId } from './company_craft_process';
import type { company_craft_sequence, company_craft_sequenceId } from './company_craft_sequence';
import type { company_craft_type, company_craft_typeId } from './company_craft_type';

export interface company_craft_partAttributes {
  id: number;
  company_craft_type?: number;
  company_craft_process_0?: number;
  company_craft_process_1?: number;
  company_craft_process_2?: number;
}

export type company_craft_partPk = "id";
export type company_craft_partId = company_craft_part[company_craft_partPk];
export type company_craft_partOptionalAttributes = "id" | "company_craft_type" | "company_craft_process_0" | "company_craft_process_1" | "company_craft_process_2";
export type company_craft_partCreationAttributes = Optional<company_craft_partAttributes, company_craft_partOptionalAttributes>;

export class company_craft_part extends Model<company_craft_partAttributes, company_craft_partCreationAttributes> implements company_craft_partAttributes {
  id!: number;
  company_craft_type?: number;
  company_craft_process_0?: number;
  company_craft_process_1?: number;
  company_craft_process_2?: number;

  // company_craft_part hasMany company_craft_sequence via company_craft_part_7
  company_craft_sequences!: company_craft_sequence[];
  getCompany_craft_sequences!: Sequelize.HasManyGetAssociationsMixin<company_craft_sequence>;
  setCompany_craft_sequences!: Sequelize.HasManySetAssociationsMixin<company_craft_sequence, company_craft_sequenceId>;
  addCompany_craft_sequence!: Sequelize.HasManyAddAssociationMixin<company_craft_sequence, company_craft_sequenceId>;
  addCompany_craft_sequences!: Sequelize.HasManyAddAssociationsMixin<company_craft_sequence, company_craft_sequenceId>;
  createCompany_craft_sequence!: Sequelize.HasManyCreateAssociationMixin<company_craft_sequence>;
  removeCompany_craft_sequence!: Sequelize.HasManyRemoveAssociationMixin<company_craft_sequence, company_craft_sequenceId>;
  removeCompany_craft_sequences!: Sequelize.HasManyRemoveAssociationsMixin<company_craft_sequence, company_craft_sequenceId>;
  hasCompany_craft_sequence!: Sequelize.HasManyHasAssociationMixin<company_craft_sequence, company_craft_sequenceId>;
  hasCompany_craft_sequences!: Sequelize.HasManyHasAssociationsMixin<company_craft_sequence, company_craft_sequenceId>;
  countCompany_craft_sequences!: Sequelize.HasManyCountAssociationsMixin;
  // company_craft_part hasMany company_craft_sequence via company_craft_part_6
  company_craft_part_6_company_craft_sequences!: company_craft_sequence[];
  getCompany_craft_part_6_company_craft_sequences!: Sequelize.HasManyGetAssociationsMixin<company_craft_sequence>;
  setCompany_craft_part_6_company_craft_sequences!: Sequelize.HasManySetAssociationsMixin<company_craft_sequence, company_craft_sequenceId>;
  addCompany_craft_part_6_company_craft_sequence!: Sequelize.HasManyAddAssociationMixin<company_craft_sequence, company_craft_sequenceId>;
  addCompany_craft_part_6_company_craft_sequences!: Sequelize.HasManyAddAssociationsMixin<company_craft_sequence, company_craft_sequenceId>;
  createCompany_craft_part_6_company_craft_sequence!: Sequelize.HasManyCreateAssociationMixin<company_craft_sequence>;
  removeCompany_craft_part_6_company_craft_sequence!: Sequelize.HasManyRemoveAssociationMixin<company_craft_sequence, company_craft_sequenceId>;
  removeCompany_craft_part_6_company_craft_sequences!: Sequelize.HasManyRemoveAssociationsMixin<company_craft_sequence, company_craft_sequenceId>;
  hasCompany_craft_part_6_company_craft_sequence!: Sequelize.HasManyHasAssociationMixin<company_craft_sequence, company_craft_sequenceId>;
  hasCompany_craft_part_6_company_craft_sequences!: Sequelize.HasManyHasAssociationsMixin<company_craft_sequence, company_craft_sequenceId>;
  countCompany_craft_part_6_company_craft_sequences!: Sequelize.HasManyCountAssociationsMixin;
  // company_craft_part hasMany company_craft_sequence via company_craft_part_5
  company_craft_part_5_company_craft_sequences!: company_craft_sequence[];
  getCompany_craft_part_5_company_craft_sequences!: Sequelize.HasManyGetAssociationsMixin<company_craft_sequence>;
  setCompany_craft_part_5_company_craft_sequences!: Sequelize.HasManySetAssociationsMixin<company_craft_sequence, company_craft_sequenceId>;
  addCompany_craft_part_5_company_craft_sequence!: Sequelize.HasManyAddAssociationMixin<company_craft_sequence, company_craft_sequenceId>;
  addCompany_craft_part_5_company_craft_sequences!: Sequelize.HasManyAddAssociationsMixin<company_craft_sequence, company_craft_sequenceId>;
  createCompany_craft_part_5_company_craft_sequence!: Sequelize.HasManyCreateAssociationMixin<company_craft_sequence>;
  removeCompany_craft_part_5_company_craft_sequence!: Sequelize.HasManyRemoveAssociationMixin<company_craft_sequence, company_craft_sequenceId>;
  removeCompany_craft_part_5_company_craft_sequences!: Sequelize.HasManyRemoveAssociationsMixin<company_craft_sequence, company_craft_sequenceId>;
  hasCompany_craft_part_5_company_craft_sequence!: Sequelize.HasManyHasAssociationMixin<company_craft_sequence, company_craft_sequenceId>;
  hasCompany_craft_part_5_company_craft_sequences!: Sequelize.HasManyHasAssociationsMixin<company_craft_sequence, company_craft_sequenceId>;
  countCompany_craft_part_5_company_craft_sequences!: Sequelize.HasManyCountAssociationsMixin;
  // company_craft_part hasMany company_craft_sequence via company_craft_part_4
  company_craft_part_4_company_craft_sequences!: company_craft_sequence[];
  getCompany_craft_part_4_company_craft_sequences!: Sequelize.HasManyGetAssociationsMixin<company_craft_sequence>;
  setCompany_craft_part_4_company_craft_sequences!: Sequelize.HasManySetAssociationsMixin<company_craft_sequence, company_craft_sequenceId>;
  addCompany_craft_part_4_company_craft_sequence!: Sequelize.HasManyAddAssociationMixin<company_craft_sequence, company_craft_sequenceId>;
  addCompany_craft_part_4_company_craft_sequences!: Sequelize.HasManyAddAssociationsMixin<company_craft_sequence, company_craft_sequenceId>;
  createCompany_craft_part_4_company_craft_sequence!: Sequelize.HasManyCreateAssociationMixin<company_craft_sequence>;
  removeCompany_craft_part_4_company_craft_sequence!: Sequelize.HasManyRemoveAssociationMixin<company_craft_sequence, company_craft_sequenceId>;
  removeCompany_craft_part_4_company_craft_sequences!: Sequelize.HasManyRemoveAssociationsMixin<company_craft_sequence, company_craft_sequenceId>;
  hasCompany_craft_part_4_company_craft_sequence!: Sequelize.HasManyHasAssociationMixin<company_craft_sequence, company_craft_sequenceId>;
  hasCompany_craft_part_4_company_craft_sequences!: Sequelize.HasManyHasAssociationsMixin<company_craft_sequence, company_craft_sequenceId>;
  countCompany_craft_part_4_company_craft_sequences!: Sequelize.HasManyCountAssociationsMixin;
  // company_craft_part hasMany company_craft_sequence via company_craft_part_3
  company_craft_part_3_company_craft_sequences!: company_craft_sequence[];
  getCompany_craft_part_3_company_craft_sequences!: Sequelize.HasManyGetAssociationsMixin<company_craft_sequence>;
  setCompany_craft_part_3_company_craft_sequences!: Sequelize.HasManySetAssociationsMixin<company_craft_sequence, company_craft_sequenceId>;
  addCompany_craft_part_3_company_craft_sequence!: Sequelize.HasManyAddAssociationMixin<company_craft_sequence, company_craft_sequenceId>;
  addCompany_craft_part_3_company_craft_sequences!: Sequelize.HasManyAddAssociationsMixin<company_craft_sequence, company_craft_sequenceId>;
  createCompany_craft_part_3_company_craft_sequence!: Sequelize.HasManyCreateAssociationMixin<company_craft_sequence>;
  removeCompany_craft_part_3_company_craft_sequence!: Sequelize.HasManyRemoveAssociationMixin<company_craft_sequence, company_craft_sequenceId>;
  removeCompany_craft_part_3_company_craft_sequences!: Sequelize.HasManyRemoveAssociationsMixin<company_craft_sequence, company_craft_sequenceId>;
  hasCompany_craft_part_3_company_craft_sequence!: Sequelize.HasManyHasAssociationMixin<company_craft_sequence, company_craft_sequenceId>;
  hasCompany_craft_part_3_company_craft_sequences!: Sequelize.HasManyHasAssociationsMixin<company_craft_sequence, company_craft_sequenceId>;
  countCompany_craft_part_3_company_craft_sequences!: Sequelize.HasManyCountAssociationsMixin;
  // company_craft_part hasMany company_craft_sequence via company_craft_part_2
  company_craft_part_2_company_craft_sequences!: company_craft_sequence[];
  getCompany_craft_part_2_company_craft_sequences!: Sequelize.HasManyGetAssociationsMixin<company_craft_sequence>;
  setCompany_craft_part_2_company_craft_sequences!: Sequelize.HasManySetAssociationsMixin<company_craft_sequence, company_craft_sequenceId>;
  addCompany_craft_part_2_company_craft_sequence!: Sequelize.HasManyAddAssociationMixin<company_craft_sequence, company_craft_sequenceId>;
  addCompany_craft_part_2_company_craft_sequences!: Sequelize.HasManyAddAssociationsMixin<company_craft_sequence, company_craft_sequenceId>;
  createCompany_craft_part_2_company_craft_sequence!: Sequelize.HasManyCreateAssociationMixin<company_craft_sequence>;
  removeCompany_craft_part_2_company_craft_sequence!: Sequelize.HasManyRemoveAssociationMixin<company_craft_sequence, company_craft_sequenceId>;
  removeCompany_craft_part_2_company_craft_sequences!: Sequelize.HasManyRemoveAssociationsMixin<company_craft_sequence, company_craft_sequenceId>;
  hasCompany_craft_part_2_company_craft_sequence!: Sequelize.HasManyHasAssociationMixin<company_craft_sequence, company_craft_sequenceId>;
  hasCompany_craft_part_2_company_craft_sequences!: Sequelize.HasManyHasAssociationsMixin<company_craft_sequence, company_craft_sequenceId>;
  countCompany_craft_part_2_company_craft_sequences!: Sequelize.HasManyCountAssociationsMixin;
  // company_craft_part hasMany company_craft_sequence via company_craft_part_1
  company_craft_part_1_company_craft_sequences!: company_craft_sequence[];
  getCompany_craft_part_1_company_craft_sequences!: Sequelize.HasManyGetAssociationsMixin<company_craft_sequence>;
  setCompany_craft_part_1_company_craft_sequences!: Sequelize.HasManySetAssociationsMixin<company_craft_sequence, company_craft_sequenceId>;
  addCompany_craft_part_1_company_craft_sequence!: Sequelize.HasManyAddAssociationMixin<company_craft_sequence, company_craft_sequenceId>;
  addCompany_craft_part_1_company_craft_sequences!: Sequelize.HasManyAddAssociationsMixin<company_craft_sequence, company_craft_sequenceId>;
  createCompany_craft_part_1_company_craft_sequence!: Sequelize.HasManyCreateAssociationMixin<company_craft_sequence>;
  removeCompany_craft_part_1_company_craft_sequence!: Sequelize.HasManyRemoveAssociationMixin<company_craft_sequence, company_craft_sequenceId>;
  removeCompany_craft_part_1_company_craft_sequences!: Sequelize.HasManyRemoveAssociationsMixin<company_craft_sequence, company_craft_sequenceId>;
  hasCompany_craft_part_1_company_craft_sequence!: Sequelize.HasManyHasAssociationMixin<company_craft_sequence, company_craft_sequenceId>;
  hasCompany_craft_part_1_company_craft_sequences!: Sequelize.HasManyHasAssociationsMixin<company_craft_sequence, company_craft_sequenceId>;
  countCompany_craft_part_1_company_craft_sequences!: Sequelize.HasManyCountAssociationsMixin;
  // company_craft_part hasMany company_craft_sequence via company_craft_part_0
  company_craft_part_0_company_craft_sequences!: company_craft_sequence[];
  getCompany_craft_part_0_company_craft_sequences!: Sequelize.HasManyGetAssociationsMixin<company_craft_sequence>;
  setCompany_craft_part_0_company_craft_sequences!: Sequelize.HasManySetAssociationsMixin<company_craft_sequence, company_craft_sequenceId>;
  addCompany_craft_part_0_company_craft_sequence!: Sequelize.HasManyAddAssociationMixin<company_craft_sequence, company_craft_sequenceId>;
  addCompany_craft_part_0_company_craft_sequences!: Sequelize.HasManyAddAssociationsMixin<company_craft_sequence, company_craft_sequenceId>;
  createCompany_craft_part_0_company_craft_sequence!: Sequelize.HasManyCreateAssociationMixin<company_craft_sequence>;
  removeCompany_craft_part_0_company_craft_sequence!: Sequelize.HasManyRemoveAssociationMixin<company_craft_sequence, company_craft_sequenceId>;
  removeCompany_craft_part_0_company_craft_sequences!: Sequelize.HasManyRemoveAssociationsMixin<company_craft_sequence, company_craft_sequenceId>;
  hasCompany_craft_part_0_company_craft_sequence!: Sequelize.HasManyHasAssociationMixin<company_craft_sequence, company_craft_sequenceId>;
  hasCompany_craft_part_0_company_craft_sequences!: Sequelize.HasManyHasAssociationsMixin<company_craft_sequence, company_craft_sequenceId>;
  countCompany_craft_part_0_company_craft_sequences!: Sequelize.HasManyCountAssociationsMixin;
  // company_craft_part belongsTo company_craft_process via company_craft_process_2
  company_craft_process_2_company_craft_process!: company_craft_process;
  getCompany_craft_process_2_company_craft_process!: Sequelize.BelongsToGetAssociationMixin<company_craft_process>;
  setCompany_craft_process_2_company_craft_process!: Sequelize.BelongsToSetAssociationMixin<company_craft_process, company_craft_processId>;
  createCompany_craft_process_2_company_craft_process!: Sequelize.BelongsToCreateAssociationMixin<company_craft_process>;
  // company_craft_part belongsTo company_craft_process via company_craft_process_1
  company_craft_process_1_company_craft_process!: company_craft_process;
  getCompany_craft_process_1_company_craft_process!: Sequelize.BelongsToGetAssociationMixin<company_craft_process>;
  setCompany_craft_process_1_company_craft_process!: Sequelize.BelongsToSetAssociationMixin<company_craft_process, company_craft_processId>;
  createCompany_craft_process_1_company_craft_process!: Sequelize.BelongsToCreateAssociationMixin<company_craft_process>;
  // company_craft_part belongsTo company_craft_process via company_craft_process_0
  company_craft_process_0_company_craft_process!: company_craft_process;
  getCompany_craft_process_0_company_craft_process!: Sequelize.BelongsToGetAssociationMixin<company_craft_process>;
  setCompany_craft_process_0_company_craft_process!: Sequelize.BelongsToSetAssociationMixin<company_craft_process, company_craft_processId>;
  createCompany_craft_process_0_company_craft_process!: Sequelize.BelongsToCreateAssociationMixin<company_craft_process>;
  // company_craft_part belongsTo company_craft_type via company_craft_type
  company_craft_type_company_craft_type!: company_craft_type;
  getCompany_craft_type_company_craft_type!: Sequelize.BelongsToGetAssociationMixin<company_craft_type>;
  setCompany_craft_type_company_craft_type!: Sequelize.BelongsToSetAssociationMixin<company_craft_type, company_craft_typeId>;
  createCompany_craft_type_company_craft_type!: Sequelize.BelongsToCreateAssociationMixin<company_craft_type>;

  static initModel(sequelize: Sequelize.Sequelize): typeof company_craft_part {
    company_craft_part.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    company_craft_type: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'company_craft_type',
        key: 'id'
      }
    },
    company_craft_process_0: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'company_craft_process',
        key: 'id'
      }
    },
    company_craft_process_1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'company_craft_process',
        key: 'id'
      }
    },
    company_craft_process_2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'company_craft_process',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'company_craft_part',
    timestamps: false
  });
  return company_craft_part;
  }
}
