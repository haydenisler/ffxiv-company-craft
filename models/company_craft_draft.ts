import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { company_craft_draft_category, company_craft_draft_categoryId } from './company_craft_draft_category';
import type { company_craft_sequence, company_craft_sequenceId } from './company_craft_sequence';

export interface company_craft_draftAttributes {
  id: number;
  name?: string;
  company_craft_draft_category?: number;
  required_item_0?: number;
  required_item_count_0?: number;
  required_item_1?: number;
  required_item_count_1?: number;
  required_item_2?: number;
  required_item_count_2?: number;
}

export type company_craft_draftPk = "id";
export type company_craft_draftId = company_craft_draft[company_craft_draftPk];
export type company_craft_draftOptionalAttributes = "id" | "name" | "company_craft_draft_category" | "required_item_0" | "required_item_count_0" | "required_item_1" | "required_item_count_1" | "required_item_2" | "required_item_count_2";
export type company_craft_draftCreationAttributes = Optional<company_craft_draftAttributes, company_craft_draftOptionalAttributes>;

export class company_craft_draft extends Model<company_craft_draftAttributes, company_craft_draftCreationAttributes> implements company_craft_draftAttributes {
  id!: number;
  name?: string;
  company_craft_draft_category?: number;
  required_item_0?: number;
  required_item_count_0?: number;
  required_item_1?: number;
  required_item_count_1?: number;
  required_item_2?: number;
  required_item_count_2?: number;

  // company_craft_draft hasMany company_craft_sequence via company_craft_draft
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
  // company_craft_draft belongsTo company_craft_draft_category via company_craft_draft_category
  company_craft_draft_category_company_craft_draft_category!: company_craft_draft_category;
  getCompany_craft_draft_category_company_craft_draft_category!: Sequelize.BelongsToGetAssociationMixin<company_craft_draft_category>;
  setCompany_craft_draft_category_company_craft_draft_category!: Sequelize.BelongsToSetAssociationMixin<company_craft_draft_category, company_craft_draft_categoryId>;
  createCompany_craft_draft_category_company_craft_draft_category!: Sequelize.BelongsToCreateAssociationMixin<company_craft_draft_category>;

  static initModel(sequelize: Sequelize.Sequelize): typeof company_craft_draft {
    company_craft_draft.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    company_craft_draft_category: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'company_craft_draft_category',
        key: 'id'
      }
    },
    required_item_0: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    required_item_count_0: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    required_item_1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    required_item_count_1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    required_item_2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    required_item_count_2: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'company_craft_draft',
    timestamps: false
  });
  return company_craft_draft;
  }
}
