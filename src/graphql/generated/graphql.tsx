import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AverageProductRatingResponse = {
  __typename?: "AverageProductRatingResponse";
  averageRating?: Maybe<Scalars["Int"]>;
  error?: Maybe<ErrorData>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  contains?: InputMaybe<Scalars["Boolean"]>;
  containsi?: InputMaybe<Scalars["Boolean"]>;
  endsWith?: InputMaybe<Scalars["Boolean"]>;
  eq?: InputMaybe<Scalars["Boolean"]>;
  gt?: InputMaybe<Scalars["Boolean"]>;
  gte?: InputMaybe<Scalars["Boolean"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  lt?: InputMaybe<Scalars["Boolean"]>;
  lte?: InputMaybe<Scalars["Boolean"]>;
  ne?: InputMaybe<Scalars["Boolean"]>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars["Boolean"]>;
  notContainsi?: InputMaybe<Scalars["Boolean"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  startsWith?: InputMaybe<Scalars["Boolean"]>;
};

export type CustomLoginResponse = {
  __typename?: "CustomLoginResponse";
  error?: Maybe<ErrorData>;
  userData?: Maybe<UserData>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  contains?: InputMaybe<Scalars["DateTime"]>;
  containsi?: InputMaybe<Scalars["DateTime"]>;
  endsWith?: InputMaybe<Scalars["DateTime"]>;
  eq?: InputMaybe<Scalars["DateTime"]>;
  gt?: InputMaybe<Scalars["DateTime"]>;
  gte?: InputMaybe<Scalars["DateTime"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  lt?: InputMaybe<Scalars["DateTime"]>;
  lte?: InputMaybe<Scalars["DateTime"]>;
  ne?: InputMaybe<Scalars["DateTime"]>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars["DateTime"]>;
  notContainsi?: InputMaybe<Scalars["DateTime"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  startsWith?: InputMaybe<Scalars["DateTime"]>;
};

export enum Enum_Product_Rating {
  Five = "five",
  Four = "four",
  One = "one",
  Three = "three",
  Two = "two",
}

export enum Enum_Review_Rating {
  Bad = "BAD",
  Good = "GOOD",
  Great = "GREAT",
  Okay = "OKAY",
  VeryBad = "VERY_BAD",
}

export type ErrorData = {
  __typename?: "ErrorData";
  message?: Maybe<Scalars["String"]>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars["String"]>;
  caption?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  contains?: InputMaybe<Scalars["Float"]>;
  containsi?: InputMaybe<Scalars["Float"]>;
  endsWith?: InputMaybe<Scalars["Float"]>;
  eq?: InputMaybe<Scalars["Float"]>;
  gt?: InputMaybe<Scalars["Float"]>;
  gte?: InputMaybe<Scalars["Float"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  lt?: InputMaybe<Scalars["Float"]>;
  lte?: InputMaybe<Scalars["Float"]>;
  ne?: InputMaybe<Scalars["Float"]>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars["Float"]>;
  notContainsi?: InputMaybe<Scalars["Float"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  startsWith?: InputMaybe<Scalars["Float"]>;
};

export type GenericMorph =
  | I18NLocale
  | Product
  | ProductCategory
  | Review
  | UploadFile
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser;

export type I18NLocale = {
  __typename?: "I18NLocale";
  code?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  name?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type I18NLocaleEntity = {
  __typename?: "I18NLocaleEntity";
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars["ID"]>;
};

export type I18NLocaleEntityResponse = {
  __typename?: "I18NLocaleEntityResponse";
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: "I18NLocaleEntityResponseCollection";
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  contains?: InputMaybe<Scalars["ID"]>;
  containsi?: InputMaybe<Scalars["ID"]>;
  endsWith?: InputMaybe<Scalars["ID"]>;
  eq?: InputMaybe<Scalars["ID"]>;
  gt?: InputMaybe<Scalars["ID"]>;
  gte?: InputMaybe<Scalars["ID"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  lt?: InputMaybe<Scalars["ID"]>;
  lte?: InputMaybe<Scalars["ID"]>;
  ne?: InputMaybe<Scalars["ID"]>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars["ID"]>;
  notContainsi?: InputMaybe<Scalars["ID"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  startsWith?: InputMaybe<Scalars["ID"]>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  contains?: InputMaybe<Scalars["Int"]>;
  containsi?: InputMaybe<Scalars["Int"]>;
  endsWith?: InputMaybe<Scalars["Int"]>;
  eq?: InputMaybe<Scalars["Int"]>;
  gt?: InputMaybe<Scalars["Int"]>;
  gte?: InputMaybe<Scalars["Int"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  lt?: InputMaybe<Scalars["Int"]>;
  lte?: InputMaybe<Scalars["Int"]>;
  ne?: InputMaybe<Scalars["Int"]>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars["Int"]>;
  notContainsi?: InputMaybe<Scalars["Int"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  startsWith?: InputMaybe<Scalars["Int"]>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  contains?: InputMaybe<Scalars["JSON"]>;
  containsi?: InputMaybe<Scalars["JSON"]>;
  endsWith?: InputMaybe<Scalars["JSON"]>;
  eq?: InputMaybe<Scalars["JSON"]>;
  gt?: InputMaybe<Scalars["JSON"]>;
  gte?: InputMaybe<Scalars["JSON"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  lt?: InputMaybe<Scalars["JSON"]>;
  lte?: InputMaybe<Scalars["JSON"]>;
  ne?: InputMaybe<Scalars["JSON"]>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars["JSON"]>;
  notContainsi?: InputMaybe<Scalars["JSON"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  startsWith?: InputMaybe<Scalars["JSON"]>;
};

export type LongFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Long"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["Long"]>>>;
  contains?: InputMaybe<Scalars["Long"]>;
  containsi?: InputMaybe<Scalars["Long"]>;
  endsWith?: InputMaybe<Scalars["Long"]>;
  eq?: InputMaybe<Scalars["Long"]>;
  gt?: InputMaybe<Scalars["Long"]>;
  gte?: InputMaybe<Scalars["Long"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Long"]>>>;
  lt?: InputMaybe<Scalars["Long"]>;
  lte?: InputMaybe<Scalars["Long"]>;
  ne?: InputMaybe<Scalars["Long"]>;
  not?: InputMaybe<LongFilterInput>;
  notContains?: InputMaybe<Scalars["Long"]>;
  notContainsi?: InputMaybe<Scalars["Long"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Long"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["Long"]>>>;
  startsWith?: InputMaybe<Scalars["Long"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  createProduct?: Maybe<ProductEntityResponse>;
  createProductCategory?: Maybe<ProductCategoryEntityResponse>;
  createReview?: Maybe<ReviewEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  customLogin?: Maybe<CustomLoginResponse>;
  customRegister?: Maybe<CustomLoginResponse>;
  deleteProduct?: Maybe<ProductEntityResponse>;
  deleteProductCategory?: Maybe<ProductCategoryEntityResponse>;
  deleteReview?: Maybe<ReviewEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Update an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateFileInfo: UploadFileEntityResponse;
  updateProduct?: Maybe<ProductEntityResponse>;
  updateProductCategory?: Maybe<ProductCategoryEntityResponse>;
  updateReview?: Maybe<ReviewEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};

export type MutationCreateProductArgs = {
  data: ProductInput;
};

export type MutationCreateProductCategoryArgs = {
  data: ProductCategoryInput;
};

export type MutationCreateReviewArgs = {
  data: ReviewInput;
};

export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};

export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};

export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};

export type MutationCustomLoginArgs = {
  input?: InputMaybe<CustomLoginInput>;
};

export type MutationCustomRegisterArgs = {
  input?: InputMaybe<CustomRegisterInput>;
};

export type MutationDeleteProductArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteProductCategoryArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteReviewArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteUploadFileArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars["ID"];
};

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars["String"];
};

export type MutationForgotPasswordArgs = {
  email: Scalars["String"];
};

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};

export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars["String"]>;
  files: Array<InputMaybe<Scalars["Upload"]>>;
  ref?: InputMaybe<Scalars["String"]>;
  refId?: InputMaybe<Scalars["ID"]>;
};

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};

export type MutationRemoveFileArgs = {
  id: Scalars["ID"];
};

export type MutationResetPasswordArgs = {
  code: Scalars["String"];
  password: Scalars["String"];
  passwordConfirmation: Scalars["String"];
};

export type MutationUpdateFileInfoArgs = {
  id: Scalars["ID"];
  info?: InputMaybe<FileInfoInput>;
};

export type MutationUpdateProductArgs = {
  data: ProductInput;
  id: Scalars["ID"];
};

export type MutationUpdateProductCategoryArgs = {
  data: ProductCategoryInput;
  id: Scalars["ID"];
};

export type MutationUpdateReviewArgs = {
  data: ReviewInput;
  id: Scalars["ID"];
};

export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars["ID"];
};

export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars["ID"];
};

export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars["ID"];
};

export type MutationUploadArgs = {
  field?: InputMaybe<Scalars["String"]>;
  file: Scalars["Upload"];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars["String"]>;
  refId?: InputMaybe<Scalars["ID"]>;
};

export type Pagination = {
  __typename?: "Pagination";
  page: Scalars["Int"];
  pageCount: Scalars["Int"];
  pageSize: Scalars["Int"];
  total: Scalars["Int"];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
  pageSize?: InputMaybe<Scalars["Int"]>;
  start?: InputMaybe<Scalars["Int"]>;
};

export type Product = {
  __typename?: "Product";
  createdAt?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  inventorySize?: Maybe<Scalars["Long"]>;
  inventoryTracking: Scalars["Boolean"];
  mainImage: UploadFileEntityResponse;
  name: Scalars["String"];
  onSales: Scalars["Boolean"];
  originalPrice: Scalars["Float"];
  otherImages?: Maybe<UploadFileRelationResponseCollection>;
  product_categories?: Maybe<ProductCategoryRelationResponseCollection>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  rating?: Maybe<Enum_Product_Rating>;
  reviews?: Maybe<ReviewRelationResponseCollection>;
  salesPrice?: Maybe<Scalars["Float"]>;
  shortDescription: Scalars["String"];
  sku?: Maybe<Scalars["String"]>;
  slug: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type ProductOtherImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ProductProduct_CategoriesArgs = {
  filters?: InputMaybe<ProductCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ProductReviewsArgs = {
  filters?: InputMaybe<ReviewFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ProductCategory = {
  __typename?: "ProductCategory";
  createdAt?: Maybe<Scalars["DateTime"]>;
  name?: Maybe<Scalars["String"]>;
  products?: Maybe<ProductRelationResponseCollection>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type ProductCategoryProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ProductCategoryEntity = {
  __typename?: "ProductCategoryEntity";
  attributes?: Maybe<ProductCategory>;
  id?: Maybe<Scalars["ID"]>;
};

export type ProductCategoryEntityResponse = {
  __typename?: "ProductCategoryEntityResponse";
  data?: Maybe<ProductCategoryEntity>;
};

export type ProductCategoryEntityResponseCollection = {
  __typename?: "ProductCategoryEntityResponseCollection";
  data: Array<ProductCategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type ProductCategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProductCategoryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ProductCategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProductCategoryFiltersInput>>>;
  products?: InputMaybe<ProductFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ProductCategoryInput = {
  name?: InputMaybe<Scalars["String"]>;
  products?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type ProductCategoryRelationResponseCollection = {
  __typename?: "ProductCategoryRelationResponseCollection";
  data: Array<ProductCategoryEntity>;
};

export type ProductEntity = {
  __typename?: "ProductEntity";
  attributes?: Maybe<Product>;
  id?: Maybe<Scalars["ID"]>;
};

export type ProductEntityResponse = {
  __typename?: "ProductEntityResponse";
  data?: Maybe<ProductEntity>;
};

export type ProductEntityResponseCollection = {
  __typename?: "ProductEntityResponseCollection";
  data: Array<ProductEntity>;
  meta: ResponseCollectionMeta;
};

export type ProductFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  inventorySize?: InputMaybe<LongFilterInput>;
  inventoryTracking?: InputMaybe<BooleanFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ProductFiltersInput>;
  onSales?: InputMaybe<BooleanFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  originalPrice?: InputMaybe<FloatFilterInput>;
  product_categories?: InputMaybe<ProductCategoryFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  rating?: InputMaybe<StringFilterInput>;
  reviews?: InputMaybe<ReviewFiltersInput>;
  salesPrice?: InputMaybe<FloatFilterInput>;
  shortDescription?: InputMaybe<StringFilterInput>;
  sku?: InputMaybe<StringFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ProductInput = {
  description?: InputMaybe<Scalars["String"]>;
  inventorySize?: InputMaybe<Scalars["Long"]>;
  inventoryTracking?: InputMaybe<Scalars["Boolean"]>;
  mainImage?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
  onSales?: InputMaybe<Scalars["Boolean"]>;
  originalPrice?: InputMaybe<Scalars["Float"]>;
  otherImages?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  product_categories?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  rating?: InputMaybe<Enum_Product_Rating>;
  reviews?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  salesPrice?: InputMaybe<Scalars["Float"]>;
  shortDescription?: InputMaybe<Scalars["String"]>;
  sku?: InputMaybe<Scalars["String"]>;
  slug?: InputMaybe<Scalars["String"]>;
};

export type ProductRelationResponseCollection = {
  __typename?: "ProductRelationResponseCollection";
  data: Array<ProductEntity>;
};

export enum PublicationState {
  Live = "LIVE",
  Preview = "PREVIEW",
}

export type Query = {
  __typename?: "Query";
  averageProductRating?: Maybe<AverageProductRatingResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  product?: Maybe<ProductEntityResponse>;
  productCategories?: Maybe<ProductCategoryEntityResponseCollection>;
  productCategory?: Maybe<ProductCategoryEntityResponse>;
  products?: Maybe<ProductEntityResponseCollection>;
  review?: Maybe<ReviewEntityResponse>;
  reviews?: Maybe<ReviewEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};

export type QueryAverageProductRatingArgs = {
  input?: InputMaybe<AverageProductRatingInput>;
};

export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryProductArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryProductCategoriesArgs = {
  filters?: InputMaybe<ProductCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryProductCategoryArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryReviewArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryReviewsArgs = {
  filters?: InputMaybe<ReviewFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ResponseCollectionMeta = {
  __typename?: "ResponseCollectionMeta";
  pagination: Pagination;
};

export type Review = {
  __typename?: "Review";
  comment: Scalars["String"];
  createdAt?: Maybe<Scalars["DateTime"]>;
  email?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  product?: Maybe<ProductEntityResponse>;
  rating: Enum_Review_Rating;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  users_permissions_user?: Maybe<UsersPermissionsUserEntityResponse>;
};

export type ReviewEntity = {
  __typename?: "ReviewEntity";
  attributes?: Maybe<Review>;
  id?: Maybe<Scalars["ID"]>;
};

export type ReviewEntityResponse = {
  __typename?: "ReviewEntityResponse";
  data?: Maybe<ReviewEntity>;
};

export type ReviewEntityResponseCollection = {
  __typename?: "ReviewEntityResponseCollection";
  data: Array<ReviewEntity>;
  meta: ResponseCollectionMeta;
};

export type ReviewFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ReviewFiltersInput>>>;
  comment?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ReviewFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ReviewFiltersInput>>>;
  product?: InputMaybe<ProductFiltersInput>;
  rating?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users_permissions_user?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type ReviewInput = {
  comment?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  product?: InputMaybe<Scalars["ID"]>;
  rating?: InputMaybe<Enum_Review_Rating>;
  users_permissions_user?: InputMaybe<Scalars["ID"]>;
};

export type ReviewRelationResponseCollection = {
  __typename?: "ReviewRelationResponseCollection";
  data: Array<ReviewEntity>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  contains?: InputMaybe<Scalars["String"]>;
  containsi?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  eq?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  ne?: InputMaybe<Scalars["String"]>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars["String"]>;
  notContainsi?: InputMaybe<Scalars["String"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  startsWith?: InputMaybe<Scalars["String"]>;
};

export type UploadFile = {
  __typename?: "UploadFile";
  alternativeText?: Maybe<Scalars["String"]>;
  caption?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  ext?: Maybe<Scalars["String"]>;
  formats?: Maybe<Scalars["JSON"]>;
  hash: Scalars["String"];
  height?: Maybe<Scalars["Int"]>;
  mime: Scalars["String"];
  name: Scalars["String"];
  previewUrl?: Maybe<Scalars["String"]>;
  provider: Scalars["String"];
  provider_metadata?: Maybe<Scalars["JSON"]>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars["Float"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
  url: Scalars["String"];
  width?: Maybe<Scalars["Int"]>;
};

export type UploadFileEntity = {
  __typename?: "UploadFileEntity";
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars["ID"]>;
};

export type UploadFileEntityResponse = {
  __typename?: "UploadFileEntityResponse";
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: "UploadFileEntityResponseCollection";
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars["String"]>;
  caption?: InputMaybe<Scalars["String"]>;
  ext?: InputMaybe<Scalars["String"]>;
  formats?: InputMaybe<Scalars["JSON"]>;
  hash?: InputMaybe<Scalars["String"]>;
  height?: InputMaybe<Scalars["Int"]>;
  mime?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  previewUrl?: InputMaybe<Scalars["String"]>;
  provider?: InputMaybe<Scalars["String"]>;
  provider_metadata?: InputMaybe<Scalars["JSON"]>;
  size?: InputMaybe<Scalars["Float"]>;
  url?: InputMaybe<Scalars["String"]>;
  width?: InputMaybe<Scalars["Int"]>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: "UploadFileRelationResponseCollection";
  data: Array<UploadFileEntity>;
};

export type User = {
  __typename?: "User";
  blocked?: Maybe<Scalars["Boolean"]>;
  confirmed?: Maybe<Scalars["Boolean"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  email?: Maybe<Scalars["String"]>;
  firstName?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  lastName?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  username?: Maybe<Scalars["String"]>;
};

export type UserData = {
  __typename?: "UserData";
  jwt?: Maybe<Scalars["String"]>;
  user?: Maybe<User>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: "UsersPermissionsCreateRolePayload";
  ok: Scalars["Boolean"];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: "UsersPermissionsDeleteRolePayload";
  ok: Scalars["Boolean"];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars["String"];
  password: Scalars["String"];
  provider?: Scalars["String"];
};

export type UsersPermissionsLoginPayload = {
  __typename?: "UsersPermissionsLoginPayload";
  jwt?: Maybe<Scalars["String"]>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: "UsersPermissionsMe";
  blocked?: Maybe<Scalars["Boolean"]>;
  confirmed?: Maybe<Scalars["Boolean"]>;
  email?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars["String"];
};

export type UsersPermissionsMeRole = {
  __typename?: "UsersPermissionsMeRole";
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  name: Scalars["String"];
  type?: Maybe<Scalars["String"]>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: "UsersPermissionsPasswordPayload";
  ok: Scalars["Boolean"];
};

export type UsersPermissionsPermission = {
  __typename?: "UsersPermissionsPermission";
  action: Scalars["String"];
  createdAt?: Maybe<Scalars["DateTime"]>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: "UsersPermissionsPermissionEntity";
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars["ID"]>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: "UsersPermissionsPermissionRelationResponseCollection";
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars["String"];
  password: Scalars["String"];
  username: Scalars["String"];
};

export type UsersPermissionsRole = {
  __typename?: "UsersPermissionsRole";
  createdAt?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};

export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: "UsersPermissionsRoleEntity";
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars["ID"]>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: "UsersPermissionsRoleEntityResponse";
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: "UsersPermissionsRoleEntityResponseCollection";
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  type?: InputMaybe<Scalars["String"]>;
  users?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: "UsersPermissionsUpdateRolePayload";
  ok: Scalars["Boolean"];
};

export type UsersPermissionsUser = {
  __typename?: "UsersPermissionsUser";
  blocked?: Maybe<Scalars["Boolean"]>;
  confirmed?: Maybe<Scalars["Boolean"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  email: Scalars["String"];
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  provider?: Maybe<Scalars["String"]>;
  reviews?: Maybe<ReviewRelationResponseCollection>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  username: Scalars["String"];
};

export type UsersPermissionsUserReviewsArgs = {
  filters?: InputMaybe<ReviewFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type UsersPermissionsUserEntity = {
  __typename?: "UsersPermissionsUserEntity";
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars["ID"]>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: "UsersPermissionsUserEntityResponse";
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: "UsersPermissionsUserEntityResponseCollection";
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  firstName?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  lastName?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  reviews?: InputMaybe<ReviewFiltersInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars["Boolean"]>;
  confirmationToken?: InputMaybe<Scalars["String"]>;
  confirmed?: InputMaybe<Scalars["Boolean"]>;
  email?: InputMaybe<Scalars["String"]>;
  firstName?: InputMaybe<Scalars["String"]>;
  lastName?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  provider?: InputMaybe<Scalars["String"]>;
  resetPasswordToken?: InputMaybe<Scalars["String"]>;
  reviews?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  role?: InputMaybe<Scalars["ID"]>;
  username?: InputMaybe<Scalars["String"]>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: "UsersPermissionsUserRelationResponseCollection";
  data: Array<UsersPermissionsUserEntity>;
};

export type AverageProductRatingInput = {
  productId?: InputMaybe<Scalars["ID"]>;
};

export type CustomLoginInput = {
  token?: InputMaybe<Scalars["String"]>;
};

export type CustomRegisterInput = {
  firstName?: InputMaybe<Scalars["String"]>;
  lastName?: InputMaybe<Scalars["String"]>;
  token?: InputMaybe<Scalars["String"]>;
};

export type CreateReviewMutationVariables = Exact<{
  review: ReviewInput;
}>;

export type CreateReviewMutation = {
  __typename?: "Mutation";
  createReview?: {
    __typename?: "ReviewEntityResponse";
    data?: {
      __typename?: "ReviewEntity";
      id?: string | null;
      attributes?: {
        __typename?: "Review";
        name?: string | null;
        email?: string | null;
        comment: string;
        product?: {
          __typename?: "ProductEntityResponse";
          data?: {
            __typename?: "ProductEntity";
            id?: string | null;
            attributes?: { __typename?: "Product"; name: string } | null;
          } | null;
        } | null;
        users_permissions_user?: {
          __typename?: "UsersPermissionsUserEntityResponse";
          data?: {
            __typename?: "UsersPermissionsUserEntity";
            id?: string | null;
            attributes?: {
              __typename?: "UsersPermissionsUser";
              username: string;
            } | null;
          } | null;
        } | null;
      } | null;
    } | null;
  } | null;
};

export type LoginMutationVariables = Exact<{
  firebaseToken?: InputMaybe<Scalars["String"]>;
}>;

export type LoginMutation = {
  __typename?: "Mutation";
  customLogin?: {
    __typename?: "CustomLoginResponse";
    userData?: {
      __typename?: "UserData";
      jwt?: string | null;
      user?: {
        __typename?: "User";
        id?: number | null;
        username?: string | null;
        firstName?: string | null;
        email?: string | null;
        lastName?: string | null;
        confirmed?: boolean | null;
        createdAt?: any | null;
      } | null;
    } | null;
    error?: { __typename?: "ErrorData"; message?: string | null } | null;
  } | null;
};

export type RegisterMutationVariables = Exact<{
  input?: InputMaybe<CustomRegisterInput>;
}>;

export type RegisterMutation = {
  __typename?: "Mutation";
  customRegister?: {
    __typename?: "CustomLoginResponse";
    userData?: {
      __typename?: "UserData";
      jwt?: string | null;
      user?: {
        __typename?: "User";
        id?: number | null;
        username?: string | null;
        firstName?: string | null;
        lastName?: string | null;
        email?: string | null;
        confirmed?: boolean | null;
        createdAt?: any | null;
      } | null;
    } | null;
    error?: { __typename?: "ErrorData"; message?: string | null } | null;
  } | null;
};

export type GetProductAverageRatingQueryVariables = Exact<{
  productId?: InputMaybe<Scalars["ID"]>;
}>;

export type GetProductAverageRatingQuery = {
  __typename?: "Query";
  averageProductRating?: {
    __typename?: "AverageProductRatingResponse";
    averageRating?: number | null;
    error?: { __typename?: "ErrorData"; message?: string | null } | null;
  } | null;
};

export type ProductBySlugQueryVariables = Exact<{
  slug?: InputMaybe<Scalars["String"]>;
}>;

export type ProductBySlugQuery = {
  __typename?: "Query";
  products?: {
    __typename?: "ProductEntityResponseCollection";
    data: Array<{
      __typename?: "ProductEntity";
      id?: string | null;
      attributes?: {
        __typename?: "Product";
        name: string;
        onSales: boolean;
        salesPrice?: number | null;
        originalPrice: number;
        inventoryTracking: boolean;
        sku?: string | null;
        inventorySize?: any | null;
        shortDescription: string;
        slug: string;
        description?: string | null;
        createdAt?: any | null;
        mainImage: {
          __typename?: "UploadFileEntityResponse";
          data?: {
            __typename?: "UploadFileEntity";
            attributes?: {
              __typename?: "UploadFile";
              url: string;
              formats?: any | null;
            } | null;
          } | null;
        };
        otherImages?: {
          __typename?: "UploadFileRelationResponseCollection";
          data: Array<{
            __typename?: "UploadFileEntity";
            attributes?: {
              __typename?: "UploadFile";
              url: string;
              formats?: any | null;
            } | null;
          }>;
        } | null;
      } | null;
    }>;
  } | null;
};

export type GetProductReviewsByProductIdQueryVariables = Exact<{
  productId?: InputMaybe<Scalars["ID"]>;
}>;

export type GetProductReviewsByProductIdQuery = {
  __typename?: "Query";
  reviews?: {
    __typename?: "ReviewEntityResponseCollection";
    meta: {
      __typename?: "ResponseCollectionMeta";
      pagination: { __typename?: "Pagination"; total: number };
    };
    data: Array<{
      __typename?: "ReviewEntity";
      id?: string | null;
      attributes?: {
        __typename?: "Review";
        name?: string | null;
        comment: string;
        createdAt?: any | null;
        rating: Enum_Review_Rating;
      } | null;
    }>;
  } | null;
};

export type ProductsQueryVariables = Exact<{
  sortBy?: InputMaybe<
    Array<InputMaybe<Scalars["String"]>> | InputMaybe<Scalars["String"]>
  >;
  page?: InputMaybe<Scalars["Int"]>;
  pageSize?: InputMaybe<Scalars["Int"]>;
}>;

export type ProductsQuery = {
  __typename?: "Query";
  products?: {
    __typename?: "ProductEntityResponseCollection";
    data: Array<{
      __typename?: "ProductEntity";
      id?: string | null;
      attributes?: {
        __typename?: "Product";
        name: string;
        onSales: boolean;
        salesPrice?: number | null;
        originalPrice: number;
        inventoryTracking: boolean;
        sku?: string | null;
        inventorySize?: any | null;
        shortDescription: string;
        slug: string;
        createdAt?: any | null;
        mainImage: {
          __typename?: "UploadFileEntityResponse";
          data?: {
            __typename?: "UploadFileEntity";
            attributes?: { __typename?: "UploadFile"; url: string } | null;
          } | null;
        };
      } | null;
    }>;
  } | null;
};

export const CreateReviewDocument = gql`
  mutation CreateReview($review: ReviewInput!) {
    createReview(data: $review) {
      data {
        id
        attributes {
          name
          email
          comment
          product {
            data {
              id
              attributes {
                name
              }
            }
          }
          users_permissions_user {
            data {
              id
              attributes {
                username
              }
            }
          }
        }
      }
    }
  }
`;
export type CreateReviewMutationFn = Apollo.MutationFunction<
  CreateReviewMutation,
  CreateReviewMutationVariables
>;

/**
 * __useCreateReviewMutation__
 *
 * To run a mutation, you first call `useCreateReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReviewMutation, { data, loading, error }] = useCreateReviewMutation({
 *   variables: {
 *      review: // value for 'review'
 *   },
 * });
 */
export function useCreateReviewMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateReviewMutation,
    CreateReviewMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateReviewMutation,
    CreateReviewMutationVariables
  >(CreateReviewDocument, options);
}
export type CreateReviewMutationHookResult = ReturnType<
  typeof useCreateReviewMutation
>;
export type CreateReviewMutationResult =
  Apollo.MutationResult<CreateReviewMutation>;
export type CreateReviewMutationOptions = Apollo.BaseMutationOptions<
  CreateReviewMutation,
  CreateReviewMutationVariables
>;
export const LoginDocument = gql`
  mutation Login($firebaseToken: String) {
    customLogin(input: { token: $firebaseToken }) {
      userData {
        jwt
        user {
          id
          username
          firstName
          email
          lastName
          confirmed
          createdAt
        }
      }
      error {
        message
      }
    }
  }
`;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      firebaseToken: // value for 'firebaseToken'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const RegisterDocument = gql`
  mutation Register($input: customRegisterInput) {
    customRegister(input: $input) {
      userData {
        jwt
        user {
          id
          username
          firstName
          lastName
          email
          confirmed
          createdAt
        }
      }
      error {
        message
      }
    }
  }
`;
export type RegisterMutationFn = Apollo.MutationFunction<
  RegisterMutation,
  RegisterMutationVariables
>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RegisterMutation,
    RegisterMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(
    RegisterDocument,
    options
  );
}
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<
  RegisterMutation,
  RegisterMutationVariables
>;
export const GetProductAverageRatingDocument = gql`
  query GetProductAverageRating($productId: ID) {
    averageProductRating(input: { productId: $productId }) {
      averageRating
      error {
        message
      }
    }
  }
`;

/**
 * __useGetProductAverageRatingQuery__
 *
 * To run a query within a React component, call `useGetProductAverageRatingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductAverageRatingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductAverageRatingQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useGetProductAverageRatingQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetProductAverageRatingQuery,
    GetProductAverageRatingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetProductAverageRatingQuery,
    GetProductAverageRatingQueryVariables
  >(GetProductAverageRatingDocument, options);
}
export function useGetProductAverageRatingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProductAverageRatingQuery,
    GetProductAverageRatingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetProductAverageRatingQuery,
    GetProductAverageRatingQueryVariables
  >(GetProductAverageRatingDocument, options);
}
export type GetProductAverageRatingQueryHookResult = ReturnType<
  typeof useGetProductAverageRatingQuery
>;
export type GetProductAverageRatingLazyQueryHookResult = ReturnType<
  typeof useGetProductAverageRatingLazyQuery
>;
export type GetProductAverageRatingQueryResult = Apollo.QueryResult<
  GetProductAverageRatingQuery,
  GetProductAverageRatingQueryVariables
>;
export const ProductBySlugDocument = gql`
  query ProductBySlug($slug: String) {
    products(filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          name
          mainImage {
            data {
              attributes {
                url
                formats
              }
            }
          }
          otherImages {
            data {
              attributes {
                url
                formats
              }
            }
          }
          onSales
          salesPrice
          originalPrice
          inventoryTracking
          sku
          inventorySize
          shortDescription
          slug
          description
          createdAt
        }
      }
    }
  }
`;

/**
 * __useProductBySlugQuery__
 *
 * To run a query within a React component, call `useProductBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useProductBySlugQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ProductBySlugQuery,
    ProductBySlugQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ProductBySlugQuery, ProductBySlugQueryVariables>(
    ProductBySlugDocument,
    options
  );
}
export function useProductBySlugLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ProductBySlugQuery,
    ProductBySlugQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ProductBySlugQuery, ProductBySlugQueryVariables>(
    ProductBySlugDocument,
    options
  );
}
export type ProductBySlugQueryHookResult = ReturnType<
  typeof useProductBySlugQuery
>;
export type ProductBySlugLazyQueryHookResult = ReturnType<
  typeof useProductBySlugLazyQuery
>;
export type ProductBySlugQueryResult = Apollo.QueryResult<
  ProductBySlugQuery,
  ProductBySlugQueryVariables
>;
export const GetProductReviewsByProductIdDocument = gql`
  query GetProductReviewsByProductId($productId: ID) {
    reviews(filters: { product: { id: { eq: $productId } } }) {
      meta {
        pagination {
          total
        }
      }
      data {
        id
        attributes {
          name
          comment
          createdAt
          rating
        }
      }
    }
  }
`;

/**
 * __useGetProductReviewsByProductIdQuery__
 *
 * To run a query within a React component, call `useGetProductReviewsByProductIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductReviewsByProductIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductReviewsByProductIdQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useGetProductReviewsByProductIdQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetProductReviewsByProductIdQuery,
    GetProductReviewsByProductIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetProductReviewsByProductIdQuery,
    GetProductReviewsByProductIdQueryVariables
  >(GetProductReviewsByProductIdDocument, options);
}
export function useGetProductReviewsByProductIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProductReviewsByProductIdQuery,
    GetProductReviewsByProductIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetProductReviewsByProductIdQuery,
    GetProductReviewsByProductIdQueryVariables
  >(GetProductReviewsByProductIdDocument, options);
}
export type GetProductReviewsByProductIdQueryHookResult = ReturnType<
  typeof useGetProductReviewsByProductIdQuery
>;
export type GetProductReviewsByProductIdLazyQueryHookResult = ReturnType<
  typeof useGetProductReviewsByProductIdLazyQuery
>;
export type GetProductReviewsByProductIdQueryResult = Apollo.QueryResult<
  GetProductReviewsByProductIdQuery,
  GetProductReviewsByProductIdQueryVariables
>;
export const ProductsDocument = gql`
  query Products($sortBy: [String], $page: Int, $pageSize: Int) {
    products(sort: $sortBy, pagination: { page: $page, pageSize: $pageSize }) {
      data {
        id
        attributes {
          name
          mainImage {
            data {
              attributes {
                url
              }
            }
          }
          onSales
          salesPrice
          originalPrice
          inventoryTracking
          sku
          inventorySize
          shortDescription
          slug
          createdAt
        }
      }
    }
  }
`;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *      sortBy: // value for 'sortBy'
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *   },
 * });
 */
export function useProductsQuery(
  baseOptions?: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(
    ProductsDocument,
    options
  );
}
export function useProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ProductsQuery,
    ProductsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(
    ProductsDocument,
    options
  );
}
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<
  typeof useProductsLazyQuery
>;
export type ProductsQueryResult = Apollo.QueryResult<
  ProductsQuery,
  ProductsQueryVariables
>;
