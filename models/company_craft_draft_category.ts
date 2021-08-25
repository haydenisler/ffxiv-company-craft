import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { company_craft_draft, company_craft_draftId } from './company_craft_draft';
import type { company_craft_sequence, company_craft_sequenceId } from './company_craft_sequence';
import type { company_craft_type, company_craft_typeId } from './company_craft_type';

export interface company_craft_draft_categoryAttributes {
  id: number;
  name?: string;
  company_craft_type_0?: number;
  company_craft_type_1?: number;
  company_craft_type_2?: number;
  company_craft_type_3?: number;
  company_craft_type_4?: number;
  company_craft_type_5?: number;
  company_craft_type_6?: number;
  company_craft_type_7?: number;
  company_craft_type_8?: number;
  company_craft_type_9?: number;
}

export type company_craft_draft_categoryPk = "id";
export type company_craft_draft_categoryId = company_craft_draft_category[company_craft_draft_categoryPk];
export type company_craft_draft_categoryOptionalAttributes = "id" | "name" | "company_craft_type_0" | "company_craft_type_1" | "company_craft_type_2" | "company_craft_type_3" | "company_craft_type_4" | "company_craft_type_5" | "company_craft_type_6" | "company_craft_type_7" | "company_craft_type_8" | "company_craft_type_9";
export type company_craft_draft_categoryCreationAttributes = Optional<company_craft_draft_categoryAttributes, company_craft_draft_categoryOptionalAttributes>;

export class company_craft_draft_category extends Model<company_craft_draft_categoryAttributes, company_craft_draft_categoryCreationAttributes> implements company_craft_draft_categoryAttributes {
  id!: number;
  name?: string;
  company_craft_type_0?: number;
  company_craft_type_1?: number;
  company_craft_type_2?: number;
  company_craft_type_3?: number;
  company_craft_type_4?: number;
  company_craft_type_5?: number;
  company_craft_type_6?: number;
  company_craft_type_7?: number;
  company_craft_type_8?: number;
  company_craft_type_9?: number;

  // company_craft_draft_category hasMany company_craft_draft via company_craft_draft_category
  company_craft_drafts!: company_craft_draft[];
  getCompany_craft_drafts!: Sequelize.HasManyGetAssociationsMixin<company_craft_draft>;
  setCompany_craft_drafts!: Sequelize.HasManySetAssociationsMixin<company_craft_draft, company_craft_draftId>;
  addCompany_craft_draft!: Sequelize.HasManyAddAssociationMixin<company_craft_draft, company_craft_draftId>;
  addCompany_craft_drafts!: Sequelize.HasManyAddAssociationsMixin<company_craft_draft, company_craft_draftId>;
  createCompany_craft_draft!: Sequelize.HasManyCreateAssociationMixin<company_craft_draft>;
  removeCompany_craft_draft!: Sequelize.HasManyRemoveAssociationMixin<company_craft_draft, company_craft_draftId>;
  removeCompany_craft_drafts!: Sequelize.HasManyRemoveAssociationsMixin<company_craft_draft, company_craft_draftId>;
  hasCompany_craft_draft!: Sequelize.HasManyHasAssociationMixin<company_craft_draft, company_craft_draftId>;
  hasCompany_craft_drafts!: Sequelize.HasManyHasAssociationsMixin<company_craft_draft, company_craft_draftId>;
  countCompany_craft_drafts!: Sequelize.HasManyCountAssociationsMixin;
  // company_craft_draft_category hasMany company_craft_sequence via company_craft_draft_category
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
  // company_craft_draft_category belongsTo company_craft_type via company_craft_type_9
  company_craft_type_9_company_craft_type!: company_craft_type;
  getCompany_craft_type_9_company_craft_type!: Sequelize.BelongsToGetAssociationMixin<company_craft_type>;
  setCompany_craft_type_9_company_craft_type!: Sequelize.BelongsToSetAssociationMixin<company_craft_type, company_craft_typeId>;
  createCompany_craft_type_9_company_craft_type!: Sequelize.BelongsToCreateAssociationMixin<company_craft_type>;
  // company_craft_draft_category belongsTo company_craft_type via company_craft_type_8
  company_craft_type_8_company_craft_type!: company_craft_type;
  getCompany_craft_type_8_company_craft_type!: Sequelize.BelongsToGetAssociationMixin<company_craft_type>;
  setCompany_craft_type_8_company_craft_type!: Sequelize.BelongsToSetAssociationMixin<company_craft_type, company_craft_typeId>;
  createCompany_craft_type_8_company_craft_type!: Sequelize.BelongsToCreateAssociationMixin<company_craft_type>;
  // company_craft_draft_category belongsTo company_craft_type via company_craft_type_7
  company_craft_type_7_company_craft_type!: company_craft_type;
  getCompany_craft_type_7_company_craft_type!: Sequelize.BelongsToGetAssociationMixin<company_craft_type>;
  setCompany_craft_type_7_company_craft_type!: Sequelize.BelongsToSetAssociationMixin<company_craft_type, company_craft_typeId>;
  createCompany_craft_type_7_company_craft_type!: Sequelize.BelongsToCreateAssociationMixin<company_craft_type>;
  // company_craft_draft_category belongsTo company_craft_type via company_craft_type_6
  company_craft_type_6_company_craft_type!: company_craft_type;
  getCompany_craft_type_6_company_craft_type!: Sequelize.BelongsToGetAssociationMixin<company_craft_type>;
  setCompany_craft_type_6_company_craft_type!: Sequelize.BelongsToSetAssociationMixin<company_craft_type, company_craft_typeId>;
  createCompany_craft_type_6_company_craft_type!: Sequelize.BelongsToCreateAssociationMixin<company_craft_type>;
  // company_craft_draft_category belongsTo company_craft_type via company_craft_type_5
  company_craft_type_5_company_craft_type!: company_craft_type;
  getCompany_craft_type_5_company_craft_type!: Sequelize.BelongsToGetAssociationMixin<company_craft_type>;
  setCompany_craft_type_5_company_craft_type!: Sequelize.BelongsToSetAssociationMixin<company_craft_type, company_craft_typeId>;
  createCompany_craft_type_5_company_craft_type!: Sequelize.BelongsToCreateAssociationMixin<company_craft_type>;
  // company_craft_draft_category belongsTo company_craft_type via company_craft_type_4
  company_craft_type_4_company_craft_type!: company_craft_type;
  getCompany_craft_type_4_company_craft_type!: Sequelize.BelongsToGetAssociationMixin<company_craft_type>;
  setCompany_craft_type_4_company_craft_type!: Sequelize.BelongsToSetAssociationMixin<company_craft_type, company_craft_typeId>;
  createCompany_craft_type_4_company_craft_type!: Sequelize.BelongsToCreateAssociationMixin<company_craft_type>;
  // company_craft_draft_category belongsTo company_craft_type via company_craft_type_3
  company_craft_type_3_company_craft_type!: company_craft_type;
  getCompany_craft_type_3_company_craft_type!: Sequelize.BelongsToGetAssociationMixin<company_craft_type>;
  setCompany_craft_type_3_company_craft_type!: Sequelize.BelongsToSetAssociationMixin<company_craft_type, company_craft_typeId>;
  createCompany_craft_type_3_company_craft_type!: Sequelize.BelongsToCreateAssociationMixin<company_craft_type>;
  // company_craft_draft_category belongsTo company_craft_type via company_craft_type_2
  company_craft_type_2_company_craft_type!: company_craft_type;
  getCompany_craft_type_2_company_craft_type!: Sequelize.BelongsToGetAssociationMixin<company_craft_type>;
  setCompany_craft_type_2_company_craft_type!: Sequelize.BelongsToSetAssociationMixin<company_craft_type, company_craft_typeId>;
  createCompany_craft_type_2_company_craft_type!: Sequelize.BelongsToCreateAssociationMixin<company_craft_type>;
  // company_craft_draft_category belongsTo company_craft_type via company_craft_type_1
  company_craft_type_1_company_craft_type!: company_craft_type;
  getCompany_craft_type_1_company_craft_type!: Sequelize.BelongsToGetAssociationMixin<company_craft_type>;
  setCompany_craft_type_1_company_craft_type!: Sequelize.BelongsToSetAssociationMixin<company_craft_type, company_craft_typeId>;
  createCompany_craft_type_1_company_craft_type!: Sequelize.BelongsToCreateAssociationMixin<company_craft_type>;
  // company_craft_draft_category belongsTo company_craft_type via company_craft_type_0
  company_craft_type_0_company_craft_type!: company_craft_type;
  getCompany_craft_type_0_company_craft_type!: Sequelize.BelongsToGetAssociationMixin<company_craft_type>;
  setCompany_craft_type_0_company_craft_type!: Sequelize.BelongsToSetAssociationMixin<company_craft_type, company_craft_typeId>;
  createCompany_craft_type_0_company_craft_type!: Sequelize.BelongsToCreateAssociationMixin<company_craft_type>;

  static initModel(sequelize: Sequelize.Sequelize): typeof company_craft_draft_category {
    company_craft_draft_category.init({
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
    company_craft_type_0: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'company_craft_type',
        key: 'id'
      }
    },
    company_craft_type_1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'company_craft_type',
        key: 'id'
      }
    },
    company_craft_type_2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'company_craft_type',
        key: 'id'
      }
    },
    company_craft_type_3: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'company_craft_type',
        key: 'id'
      }
    },
    company_craft_type_4: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'company_craft_type',
        key: 'id'
      }
    },
    company_craft_type_5: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'company_craft_type',
        key: 'id'
      }
    },
    company_craft_type_6: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'company_craft_type',
        key: 'id'
      }
    },
    company_craft_type_7: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'company_craft_type',
        key: 'id'
      }
    },
    company_craft_type_8: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'company_craft_type',
        key: 'id'
      }
    },
    company_craft_type_9: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'company_craft_type',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'company_craft_draft_category',
    timestamps: false
  });
  return company_craft_draft_category;
  }
}
