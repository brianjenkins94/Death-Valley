/**
 * Copyright 2016-2021 The Lovefield Project Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ConstraintAction;
(function (ConstraintAction) {
    ConstraintAction[ConstraintAction["RESTRICT"] = 0] = "RESTRICT";
    ConstraintAction[ConstraintAction["CASCADE"] = 1] = "CASCADE";
})(ConstraintAction || (ConstraintAction = {}));
var ConstraintTiming;
(function (ConstraintTiming) {
    ConstraintTiming[ConstraintTiming["IMMEDIATE"] = 0] = "IMMEDIATE";
    ConstraintTiming[ConstraintTiming["DEFERRABLE"] = 1] = "DEFERRABLE";
})(ConstraintTiming || (ConstraintTiming = {}));
var DataStoreType;
(function (DataStoreType) {
    DataStoreType[DataStoreType["INDEXED_DB"] = 0] = "INDEXED_DB";
    DataStoreType[DataStoreType["MEMORY"] = 1] = "MEMORY";
    DataStoreType[DataStoreType["LOCAL_STORAGE"] = 2] = "LOCAL_STORAGE";
    DataStoreType[DataStoreType["FIREBASE"] = 3] = "FIREBASE";
    DataStoreType[DataStoreType["WEB_SQL"] = 4] = "WEB_SQL";
    DataStoreType[DataStoreType["OBSERVABLE_STORE"] = 5] = "OBSERVABLE_STORE";
})(DataStoreType || (DataStoreType = {}));
var Order;
(function (Order) {
    Order[Order["DESC"] = 0] = "DESC";
    Order[Order["ASC"] = 1] = "ASC";
})(Order || (Order = {}));
var Type;
(function (Type) {
    Type[Type["ARRAY_BUFFER"] = 0] = "ARRAY_BUFFER";
    Type[Type["BOOLEAN"] = 1] = "BOOLEAN";
    Type[Type["DATE_TIME"] = 2] = "DATE_TIME";
    Type[Type["INTEGER"] = 3] = "INTEGER";
    Type[Type["NUMBER"] = 4] = "NUMBER";
    Type[Type["STRING"] = 5] = "STRING";
    Type[Type["OBJECT"] = 6] = "OBJECT";
})(Type || (Type = {}));
new Map([
    [Type.ARRAY_BUFFER, null],
    [Type.BOOLEAN, false],
    [Type.DATE_TIME, Object.freeze(new Date(0))],
    [Type.INTEGER, 0],
    [Type.NUMBER, 0],
    [Type.STRING, ""],
    [Type.OBJECT, null] // nullable
]);
var TransactionType;
(function (TransactionType) {
    TransactionType[TransactionType["READ_ONLY"] = 0] = "READ_ONLY";
    TransactionType[TransactionType["READ_WRITE"] = 1] = "READ_WRITE";
})(TransactionType || (TransactionType = {}));
var ErrorCode;
(function (ErrorCode) {
    // System level errors
    ErrorCode[ErrorCode["SYSTEM_ERROR"] = 0] = "SYSTEM_ERROR";
    ErrorCode[ErrorCode["VERSION_MISMATCH"] = 1] = "VERSION_MISMATCH";
    ErrorCode[ErrorCode["CONNECTION_CLOSED"] = 2] = "CONNECTION_CLOSED";
    ErrorCode[ErrorCode["TIMEOUT"] = 3] = "TIMEOUT";
    ErrorCode[ErrorCode["OPERATION_BLOCKED"] = 4] = "OPERATION_BLOCKED";
    ErrorCode[ErrorCode["QUOTA_EXCEEDED"] = 5] = "QUOTA_EXCEEDED";
    ErrorCode[ErrorCode["TOO_MANY_ROWS"] = 6] = "TOO_MANY_ROWS";
    ErrorCode[ErrorCode["SERVICE_NOT_FOUND"] = 7] = "SERVICE_NOT_FOUND";
    ErrorCode[ErrorCode["UNKNOWN_PLAN_NODE"] = 8] = "UNKNOWN_PLAN_NODE";
    // Data errors
    ErrorCode[ErrorCode["DATA_ERROR"] = 100] = "DATA_ERROR";
    ErrorCode[ErrorCode["TABLE_NOT_FOUND"] = 101] = "TABLE_NOT_FOUND";
    ErrorCode[ErrorCode["DATA_CORRUPTION"] = 102] = "DATA_CORRUPTION";
    ErrorCode[ErrorCode["INVALID_ROW_ID"] = 103] = "INVALID_ROW_ID";
    ErrorCode[ErrorCode["INVALID_TX_ACCESS"] = 105] = "INVALID_TX_ACCESS";
    ErrorCode[ErrorCode["OUT_OF_SCOPE"] = 106] = "OUT_OF_SCOPE";
    ErrorCode[ErrorCode["INVALID_TX_STATE"] = 107] = "INVALID_TX_STATE";
    ErrorCode[ErrorCode["INCOMPATIBLE_DB"] = 108] = "INCOMPATIBLE_DB";
    ErrorCode[ErrorCode["ROW_ID_EXISTED"] = 109] = "ROW_ID_EXISTED";
    ErrorCode[ErrorCode["IMPORT_TO_NON_EMPTY_DB"] = 110] = "IMPORT_TO_NON_EMPTY_DB";
    ErrorCode[ErrorCode["DB_MISMATCH"] = 111] = "DB_MISMATCH";
    ErrorCode[ErrorCode["IMPORT_DATA_NOT_FOUND"] = 112] = "IMPORT_DATA_NOT_FOUND";
    ErrorCode[ErrorCode["ALREADY_CONNECTED"] = 113] = "ALREADY_CONNECTED";
    // Integrity errors
    ErrorCode[ErrorCode["CONSTRAINT_ERROR"] = 200] = "CONSTRAINT_ERROR";
    ErrorCode[ErrorCode["DUPLICATE_KEYS"] = 201] = "DUPLICATE_KEYS";
    ErrorCode[ErrorCode["NOT_NULLABLE"] = 202] = "NOT_NULLABLE";
    ErrorCode[ErrorCode["FK_VIOLATION"] = 203] = "FK_VIOLATION";
    // Unsupported
    ErrorCode[ErrorCode["NOT_SUPPORTED"] = 300] = "NOT_SUPPORTED";
    ErrorCode[ErrorCode["FB_NO_RAW_TX"] = 351] = "FB_NO_RAW_TX";
    ErrorCode[ErrorCode["IDB_NOT_PROVIDED"] = 352] = "IDB_NOT_PROVIDED";
    ErrorCode[ErrorCode["WEBSQL_NOT_PROVIDED"] = 353] = "WEBSQL_NOT_PROVIDED";
    ErrorCode[ErrorCode["CANT_OPEN_WEBSQL_DB"] = 354] = "CANT_OPEN_WEBSQL_DB";
    ErrorCode[ErrorCode["NO_CHANGE_NOTIFICATION"] = 355] = "NO_CHANGE_NOTIFICATION";
    ErrorCode[ErrorCode["NO_WEBSQL_TX"] = 356] = "NO_WEBSQL_TX";
    ErrorCode[ErrorCode["NO_PRED_IN_TOSQL"] = 357] = "NO_PRED_IN_TOSQL";
    ErrorCode[ErrorCode["NOT_IMPL_IN_TOSQL"] = 358] = "NOT_IMPL_IN_TOSQL";
    ErrorCode[ErrorCode["LOCAL_STORAGE_NOT_PROVIDED"] = 359] = "LOCAL_STORAGE_NOT_PROVIDED";
    ErrorCode[ErrorCode["NOT_IMPLEMENTED"] = 360] = "NOT_IMPLEMENTED";
    ErrorCode[ErrorCode["CANT_OPEN_IDB"] = 361] = "CANT_OPEN_IDB";
    ErrorCode[ErrorCode["CANT_READ_IDB"] = 362] = "CANT_READ_IDB";
    ErrorCode[ErrorCode["CANT_LOAD_IDB"] = 363] = "CANT_LOAD_IDB";
    // Syntax errors
    ErrorCode[ErrorCode["SYNTAX_ERROR"] = 500] = "SYNTAX_ERROR";
    ErrorCode[ErrorCode["UNBOUND_VALUE"] = 501] = "UNBOUND_VALUE";
    ErrorCode[ErrorCode["INVALID_NAME"] = 502] = "INVALID_NAME";
    ErrorCode[ErrorCode["NAME_IN_USE"] = 503] = "NAME_IN_USE";
    ErrorCode[ErrorCode["INVALID_AUTO_KEY_TYPE"] = 504] = "INVALID_AUTO_KEY_TYPE";
    ErrorCode[ErrorCode["INVALID_AUTO_KEY_COLUMN"] = 505] = "INVALID_AUTO_KEY_COLUMN";
    ErrorCode[ErrorCode["IMMEDIATE_EVAL_ONLY"] = 506] = "IMMEDIATE_EVAL_ONLY";
    ErrorCode[ErrorCode["COLUMN_NOT_FOUND"] = 508] = "COLUMN_NOT_FOUND";
    ErrorCode[ErrorCode["COLUMN_NOT_INDEXABLE"] = 509] = "COLUMN_NOT_INDEXABLE";
    ErrorCode[ErrorCode["BIND_ARRAY_OUT_OF_RANGE"] = 510] = "BIND_ARRAY_OUT_OF_RANGE";
    ErrorCode[ErrorCode["CANT_GET_IDB_TABLE"] = 511] = "CANT_GET_IDB_TABLE";
    ErrorCode[ErrorCode["CANT_GET_WEBSQL_TABLE"] = 512] = "CANT_GET_WEBSQL_TABLE";
    ErrorCode[ErrorCode["UNKNOWN_QUERY_CONTEXT"] = 513] = "UNKNOWN_QUERY_CONTEXT";
    ErrorCode[ErrorCode["UNKNOWN_NODE_TYPE"] = 514] = "UNKNOWN_NODE_TYPE";
    ErrorCode[ErrorCode["DUPLICATE_FROM"] = 515] = "DUPLICATE_FROM";
    ErrorCode[ErrorCode["DUPLICATE_WHERE"] = 516] = "DUPLICATE_WHERE";
    ErrorCode[ErrorCode["INVALID_DELETE"] = 517] = "INVALID_DELETE";
    ErrorCode[ErrorCode["INVALID_INSERT"] = 518] = "INVALID_INSERT";
    ErrorCode[ErrorCode["INVALID_INSERT_OR_REPLACE"] = 519] = "INVALID_INSERT_OR_REPLACE";
    ErrorCode[ErrorCode["DUPLICATE_INTO"] = 520] = "DUPLICATE_INTO";
    ErrorCode[ErrorCode["DUPLICATE_VALUES"] = 521] = "DUPLICATE_VALUES";
    ErrorCode[ErrorCode["INVALID_SELECT"] = 522] = "INVALID_SELECT";
    ErrorCode[ErrorCode["UNBOUND_LIMIT_SKIP"] = 523] = "UNBOUND_LIMIT_SKIP";
    ErrorCode[ErrorCode["INVALID_DISTINCT"] = 524] = "INVALID_DISTINCT";
    ErrorCode[ErrorCode["INVALID_GROUPBY"] = 525] = "INVALID_GROUPBY";
    ErrorCode[ErrorCode["INVALID_PROJECTION"] = 526] = "INVALID_PROJECTION";
    ErrorCode[ErrorCode["INVALID_AGGREGATION"] = 527] = "INVALID_AGGREGATION";
    ErrorCode[ErrorCode["DUPLICATE_LIMIT"] = 528] = "DUPLICATE_LIMIT";
    ErrorCode[ErrorCode["DUPLICATE_SKIP"] = 529] = "DUPLICATE_SKIP";
    ErrorCode[ErrorCode["DUPLICATE_GROUPBY"] = 530] = "DUPLICATE_GROUPBY";
    ErrorCode[ErrorCode["NEGATIVE_LIMIT_SKIP"] = 531] = "NEGATIVE_LIMIT_SKIP";
    ErrorCode[ErrorCode["INVALID_UPDATE"] = 532] = "INVALID_UPDATE";
    ErrorCode[ErrorCode["FK_LOOP"] = 533] = "FK_LOOP";
    ErrorCode[ErrorCode["FK_COLUMN_IN_USE"] = 534] = "FK_COLUMN_IN_USE";
    ErrorCode[ErrorCode["SCHEMA_FINALIZED"] = 535] = "SCHEMA_FINALIZED";
    ErrorCode[ErrorCode["INVALID_FK_TABLE"] = 536] = "INVALID_FK_TABLE";
    ErrorCode[ErrorCode["INVALID_FK_COLUMN"] = 537] = "INVALID_FK_COLUMN";
    ErrorCode[ErrorCode["INVALID_FK_COLUMN_TYPE"] = 538] = "INVALID_FK_COLUMN_TYPE";
    ErrorCode[ErrorCode["FK_COLUMN_NONUNIQUE"] = 539] = "FK_COLUMN_NONUNIQUE";
    ErrorCode[ErrorCode["INVALID_FK_REF"] = 540] = "INVALID_FK_REF";
    ErrorCode[ErrorCode["INVALID_OUTER_JOIN"] = 541] = "INVALID_OUTER_JOIN";
    ErrorCode[ErrorCode["MISSING_FROM_BEFORE_JOIN"] = 542] = "MISSING_FROM_BEFORE_JOIN";
    ErrorCode[ErrorCode["PK_CANT_BE_FK"] = 543] = "PK_CANT_BE_FK";
    ErrorCode[ErrorCode["DUPLICATE_PK"] = 544] = "DUPLICATE_PK";
    ErrorCode[ErrorCode["NULLABLE_PK"] = 545] = "NULLABLE_PK";
    ErrorCode[ErrorCode["DUPLICATE_NAME"] = 546] = "DUPLICATE_NAME";
    ErrorCode[ErrorCode["INVALID_WHERE"] = 547] = "INVALID_WHERE";
    ErrorCode[ErrorCode["FROM_AFTER_WHERE"] = 548] = "FROM_AFTER_WHERE";
    ErrorCode[ErrorCode["FROM_AFTER_ORDER_GROUPBY"] = 549] = "FROM_AFTER_ORDER_GROUPBY";
    ErrorCode[ErrorCode["INVALID_PREDICATE"] = 550] = "INVALID_PREDICATE";
    // Test errors
    ErrorCode[ErrorCode["TEST_ERROR"] = 900] = "TEST_ERROR";
    ErrorCode[ErrorCode["ASSERTION"] = 998] = "ASSERTION";
    ErrorCode[ErrorCode["SIMULATED_ERROR"] = 999] = "SIMULATED_ERROR";
})(ErrorCode || (ErrorCode = {}));
// The comparison result constant. This must be consistent with the constant
// required by the sort function of Array.prototype.sort.
var Favor;
(function (Favor) {
    Favor[Favor["RHS"] = -1] = "RHS";
    Favor[Favor["TIE"] = 0] = "TIE";
    Favor[Favor["LHS"] = 1] = "LHS"; // favors left hand side, i.e. lhs > rhs
})(Favor || (Favor = {}));
var TableType;
(function (TableType) {
    TableType[TableType["DATA"] = 0] = "DATA";
    TableType[TableType["INDEX"] = 1] = "INDEX";
})(TableType || (TableType = {}));
var ExecType;
(function (ExecType) {
    ExecType[ExecType["NO_CHILD"] = -1] = "NO_CHILD";
    ExecType[ExecType["ALL"] = 0] = "ALL";
    ExecType[ExecType["FIRST_CHILD"] = 1] = "FIRST_CHILD"; // Will invoke only the first child's exec().
})(ExecType || (ExecType = {}));
var LockType;
(function (LockType) {
    LockType[LockType["EXCLUSIVE"] = 0] = "EXCLUSIVE";
    LockType[LockType["RESERVED_READ_ONLY"] = 1] = "RESERVED_READ_ONLY";
    LockType[LockType["RESERVED_READ_WRITE"] = 2] = "RESERVED_READ_WRITE";
    LockType[LockType["SHARED"] = 3] = "SHARED";
})(LockType || (LockType = {}));
// The priority of each type of task. Lower number means higher priority.
var TaskPriority;
(function (TaskPriority) {
    TaskPriority[TaskPriority["EXPORT_TASK"] = 0] = "EXPORT_TASK";
    TaskPriority[TaskPriority["IMPORT_TASK"] = 0] = "IMPORT_TASK";
    TaskPriority[TaskPriority["OBSERVER_QUERY_TASK"] = 0] = "OBSERVER_QUERY_TASK";
    TaskPriority[TaskPriority["EXTERNAL_CHANGE_TASK"] = 1] = "EXTERNAL_CHANGE_TASK";
    TaskPriority[TaskPriority["USER_QUERY_TASK"] = 2] = "USER_QUERY_TASK";
    TaskPriority[TaskPriority["TRANSACTION_TASK"] = 2] = "TRANSACTION_TASK";
})(TaskPriority || (TaskPriority = {}));
var FnType;
(function (FnType) {
    FnType["AVG"] = "AVG";
    FnType["COUNT"] = "COUNT";
    FnType["DISTINCT"] = "DISTINCT";
    FnType["GEOMEAN"] = "GEOMEAN";
    FnType["MAX"] = "MAX";
    FnType["MIN"] = "MIN";
    FnType["STDDEV"] = "STDDEV";
    FnType["SUM"] = "SUM";
})(FnType || (FnType = {}));
var Operator;
(function (Operator) {
    Operator["AND"] = "and";
    Operator["OR"] = "or";
})(Operator || (Operator = {}));
var EvalType;
(function (EvalType) {
    EvalType["BETWEEN"] = "between";
    EvalType["EQ"] = "eq";
    EvalType["GTE"] = "gte";
    EvalType["GT"] = "gt";
    EvalType["IN"] = "in";
    EvalType["LTE"] = "lte";
    EvalType["LT"] = "lt";
    EvalType["MATCH"] = "match";
    EvalType["NEQ"] = "neq";
})(EvalType || (EvalType = {}));
var JoinAlgorithm;
(function (JoinAlgorithm) {
    JoinAlgorithm["HASH"] = "hash";
    JoinAlgorithm["INDEX_NESTED_LOOP"] = "index_nested_loop";
    JoinAlgorithm["NESTED_LOOP"] = "nested_loop";
})(JoinAlgorithm || (JoinAlgorithm = {}));
// The following states represent the life cycle of a transaction. These states
// are exclusive meaning that a tx can be only on one state at a given time.
var TransactionState;
(function (TransactionState) {
    TransactionState[TransactionState["CREATED"] = 0] = "CREATED";
    TransactionState[TransactionState["ACQUIRING_SCOPE"] = 1] = "ACQUIRING_SCOPE";
    TransactionState[TransactionState["ACQUIRED_SCOPE"] = 2] = "ACQUIRED_SCOPE";
    TransactionState[TransactionState["EXECUTING_QUERY"] = 3] = "EXECUTING_QUERY";
    TransactionState[TransactionState["EXECUTING_AND_COMMITTING"] = 4] = "EXECUTING_AND_COMMITTING";
    TransactionState[TransactionState["COMMITTING"] = 5] = "COMMITTING";
    TransactionState[TransactionState["ROLLING_BACK"] = 6] = "ROLLING_BACK";
    TransactionState[TransactionState["FINALIZED"] = 7] = "FINALIZED";
})(TransactionState || (TransactionState = {}));
new Set([
    Type.ARRAY_BUFFER,
    Type.OBJECT
]);
