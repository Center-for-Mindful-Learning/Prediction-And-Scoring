// Export all your SHARED models here
// Please do not remove the User model, which is necessary for auth
import { SampleModel } from "./sampleModel";
import { User } from "./user";
import {ProposalTag} from "./proposalTag.server";
import { Resolution } from "./resolution.server";
import { Model } from "./model.server";

const models = [User, SampleModel, ProposalTag, Resolution, Model];
export default models;
