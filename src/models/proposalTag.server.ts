import { VulcanDocument } from "@vulcanjs/schema";
import {
    CreateGraphqlModelOptionsServer,
    createGraphqlModelServer,
    VulcanGraphqlSchemaServer,
  } from "@vulcanjs/graphql/server";
  import { createMongooseConnector } from "@vulcanjs/mongo";


  export interface ProposalTagTypeServer extends VulcanDocument {
    proposalId?: string;
    tagName?: string;
    user?: string;
  }

  
  export const schema: VulcanGraphqlSchemaServer = {
    // _id, userId, and createdAT are basic field you may want to use in almost all schemas
    _id: {
      type: String,
      optional: true,
      canRead: ["guests"],
      canCreate: ["members"]
    },
    // userId is the _id of the owner of the document
    // Here, it guarantees that the user belongs to group "owners" for his own data
    userId: {
      type: String,
      optional: true,
      canRead: ["guests"],
      canCreate: ["members"]

    },
    createdAt: {
      type: Date,
      optional: true,
      canRead: ["admins"],
      onCreate: () => {
        return new Date();
      },
      canCreate: ["members"]

    },
    user: {
      type: String,
      optional: true,
      canRead: ["guests"],
      canCreate: ["members"]

    },
  
    proposalId: {
      type: String,
      optional: true,
      canRead: ["guests"],
      canCreate: ["members"]

    },

    tagName: {
        type: String,
        optional: true,
        canRead: ["guests"],
        canCreate: ["members"]

    },
  };

  export const modelDef: CreateGraphqlModelOptionsServer = {
    name: "ProposalTag",
    graphql: {
      typeName: "ProposalTag",
      multiTypeName: "ProposalTags",
    },
    schema,
    permissions: {
      canCreate: ["members"], // Users should be able to create proposals
      canUpdate: ["owners", "admins"],
      canDelete: ["owners", "admins"],
      canRead: ["members", "admins"],
    },
  };

  export const ProposalTag = createGraphqlModelServer(modelDef);

  export const ProposalConnector = createMongooseConnector<ProposalTagTypeServer>(ProposalTag);

