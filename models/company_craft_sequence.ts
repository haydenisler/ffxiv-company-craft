import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { company_craft_draft, company_craft_draftId } from './company_craft_draft';
import type { company_craft_draft_category, company_craft_draft_categoryId } from './company_craft_draft_category';
import type { company_craft_part, company_craft_partId } from './company_craft_part';
import type { company_craft_type, company_craft_typeId } from './company_craft_type';

export interface company_craft_sequenceAttributes {
  id: number;
  result_item?: number;
  category?: number;
  company_craft_draft_category?: number;
  company_craft_type?: number;
  company_craft_draft?: number;
  company_craft_part_0?: number;
  company_craft_part_1?: number;
  company_craft_part_2?: number;
  company_craft_part_3?: number;
  company_craft_part_4?: number;
  company_craft_part_5?: number;
  company_craft_part_6?: number;
  company_craft_part_7?: number;
}

export type company_craft_sequencePk = "id";
export type company_craft_sequenceId = company_craft_sequence[company_craft_sequencePk];
export type company_craft_sequenceOptionalAttributes = "id" | "result_item" | "category" | "company_craft_draft_category" | "company_craft_type" | "company_craft_draft" | "company_craft_part_0" | "company_craft_part_1" | "company_craft_part_2" | "company_craft_part_3" | "company_craft_part_4" | "company_craft_part_5" | "company_craft_part_6" | "company_craft_part_7";
export type company_craft_sequenceCreationAttributes = Optional<company_craft_sequenceAttributes, company_craft_sequenceOptionalAttributes>;

export class company_craft_sequence extends Model<company_craft_sequenceAttributes, company_craft_sequenceCreationAttributes> implements company_craft_sequenceAttributes {
  id!: number;
  result_item?: number;
  category?: number;
  company_craft_draft_category?: number;
  company_craft_type?: number;
  company_craft_draft?: number;
  company_craft_part_0?: number;
  company_craft_part_1?: number;
  company_craft_part_2?: number;
  company_craft_part_3?: number;
  company_craft_part_4?: number;
  company_craft_part_5?: number;
  company_craft_part_6?: number;
  company_craft_part_7?: number;

  // company_craft_sequence belongsTo company_craft_draft via company_craft_draft
  company_craft_draft_company_craft_draft!: company_craft_draft;
  getCompany_craft_draft_company_craft_draft!: Sequelize.BelongsToGetAssociationMixin<company_craft_draft>;
  setCompany_craft_draft_company_craft_draft!: Sequelize.BelongsToSetAssociationMixin<company_craft_draft, company_craft_draftId>;
  createCompany_craft_draft_company_craft_draft!: Sequelize.BelongsToCreateAssociationMixin<company_craft_draft>;
  // company_craft_sequence belongsTo company_craft_draft_category via company_craft_draft_category
  company_craft_draft_category_company_craft_draft_category!: company_craft_draft_category;
  getCompany_craft_draft_category_company_craft_draft_category!: Sequelize.BelongsToGetAssociationMixin<company_craft_draft_category>;
  setCompany_craft_draft_category_company_craft_draft_category!: Sequelize.BelongsToSetAssociationMixin<company_craft_draft_category, company_craft_draft_categoryId>;
  createCompany_craft_draft_category_company_craft_draft_category!: Sequelize.BelongsToCreateAssociationMixin<company_craft_draft_category>;
  // company_craft_sequence belongsTo company_craft_part via company_craft_part_7
  company_craft_part_7_company_craft_part!: company_craft_part;
  getCompany_craft_part_7_company_craft_part!: Sequelize.BelongsToGetAssociationMixin<company_craft_part>;
  setCompany_craft_part_7_company_craft_part!: Sequelize.BelongsToSetAssociationMixin<company_craft_part, company_craft_partId>;
  createCompany_craft_part_7_company_craft_part!: Sequelize.BelongsToCreateAssociationMixin<company_craft_part>;
  // company_craft_sequence belongsTo company_craft_part via company_craft_part_6
  company_craft_part_6_company_craft_part!: company_craft_part;
  getCompany_craft_part_6_company_craft_part!: Sequelize.BelongsToGetAssociationMixin<company_craft_part>;
  setCompany_craft_part_6_company_craft_part!: Sequelize.BelongsToSetAssociationMixin<company_craft_part, company_craft_partId>;
  createCompany_craft_part_6_company_craft_part!: Sequelize.BelongsToCreateAssociationMixin<company_craft_part>;
  // company_craft_sequence belongsTo company_craft_part via company_craft_part_5
  company_craft_part_5_company_craft_part!: company_craft_part;
  getCompany_craft_part_5_company_craft_part!: Sequelize.BelongsToGetAssociationMixin<company_craft_part>;
  setCompany_craft_part_5_company_craft_part!: Sequelize.BelongsToSetAssociationMixin<company_craft_part, company_craft_partId>;
  createCompany_craft_part_5_company_craft_part!: Sequelize.BelongsToCreateAssociationMixin<company_craft_part>;
  // company_craft_sequence belongsTo company_craft_part via company_craft_part_4
  company_craft_part_4_company_craft_part!: company_craft_part;
  getCompany_craft_part_4_company_craft_part!: Sequelize.BelongsToGetAssociationMixin<company_craft_part>;
  setCompany_craft_part_4_company_craft_part!: Sequelize.BelongsToSetAssociationMixin<company_craft_part, company_craft_partId>;
  createCompany_craft_part_4_company_craft_part!: Sequelize.BelongsToCreateAssociationMixin<company_craft_part>;
  // company_craft_sequence belongsTo company_craft_part via company_craft_part_3
  company_craft_part_3_company_craft_part!: company_craft_part;
  getCompany_craft_part_3_company_craft_part!: Sequelize.BelongsToGetAssociationMixin<company_craft_part>;
  setCompany_craft_part_3_company_craft_part!: Sequelize.BelongsToSetAssociationMixin<company_craft_part, company_craft_partId>;
  createCompany_craft_part_3_company_craft_part!: Sequelize.BelongsToCreateAssociationMixin<company_craft_part>;
  // company_craft_sequence belongsTo company_craft_part via company_craft_part_2
  company_craft_part_2_company_craft_part!: company_craft_part;
  getCompany_craft_part_2_company_craft_part!: Sequelize.BelongsToGetAssociationMixin<company_craft_part>;
  setCompany_craft_part_2_company_craft_part!: Sequelize.BelongsToSetAssociationMixin<company_craft_part, company_craft_partId>;
  createCompany_craft_part_2_company_craft_part!: Sequelize.BelongsToCreateAssociationMixin<company_craft_part>;
  // company_craft_sequence belongsTo company_craft_part via company_craft_part_1
  company_craft_part_1_company_craft_part!: company_craft_part;
  getCompany_craft_part_1_company_craft_part!: Sequelize.BelongsToGetAssociationMixin<company_craft_part>;
  setCompany_craft_part_1_company_craft_part!: Sequelize.BelongsToSetAssociationMixin<company_craft_part, company_craft_partId>;
  createCompany_craft_part_1_company_craft_part!: Sequelize.BelongsToCreateAssociationMixin<company_craft_part>;
  // company_craft_sequence belongsTo company_craft_part via company_craft_part_0
  company_craft_part_0_company_craft_part!: company_craft_part;
  getCompany_craft_part_0_company_craft_part!: Sequelize.BelongsToGetAssociationMixin<company_craft_part>;
  setCompany_craft_part_0_company_craft_part!: Sequelize.BelongsToSetAssociationMixin<company_craft_part, company_craft_partId>;
  createCompany_craft_part_0_company_craft_part!: Sequelize.BelongsToCreateAssociationMixin<company_craft_part>;
  // company_craft_sequence belongsTo company_craft_type via company_craft_type
  company_craft_type_company_craft_type!: company_craft_type;
  getCompany_craft_type_company_craft_type!: Sequelize.BelongsToGetAssociationMixin<company_craft_type>;
  setCompany_craft_type_company_craft_type!: Sequelize.BelongsToSetAssociationMixin<company_craft_type, company_craft_typeId>;
  createCompany_craft_type_company_craft_type!: Sequelize.BelongsToCreateAssociationMixin<company_craft_type>;

  static initModel(sequelize: Sequelize.Sequelize): typeof company_craft_sequence {
    company_craft_sequence.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    result_item: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    category: {
      type: DataTypes.INTEGER,
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
    company_craft_type: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'company_craft_type',
        key: 'id'
      }
    },
    company_craft_draft: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'company_craft_draft',
        key: 'id'
      }
    },
    company_craft_part_0: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'company_craft_part',
        key: 'id'
      }
    },
    company_craft_part_1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'company_craft_part',
        key: 'id'
      }
    },
    company_craft_part_2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'company_craft_part',
        key: 'id'
      }
    },
    company_craft_part_3: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'company_craft_part',
        key: 'id'
      }
    },
    company_craft_part_4: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'company_craft_part',
        key: 'id'
      }
    },
    company_craft_part_5: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'company_craft_part',
        key: 'id'
      }
    },
    company_craft_part_6: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'company_craft_part',
        key: 'id'
      }
    },
    company_craft_part_7: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'company_craft_part',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'company_craft_sequence',
    timestamps: false
  });
  return company_craft_sequence;
  }
}
