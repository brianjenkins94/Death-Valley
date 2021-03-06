/* eslint-disable @typescript-eslint/explicit-member-accessibility */
/* eslint-disable @typescript-eslint/no-parameter-properties */
/* eslint-disable @typescript-eslint/no-type-alias */
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
const DEFAULT_VALUES = new Map([
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
class Resolver {
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolveFn = resolve;
            this.rejectFn = reject;
        });
    }
    resolve(value) {
        this.resolveFn(value);
    }
    reject(reason) {
        this.rejectFn(reason);
    }
}
class UniqueId {
    getUniqueNumber() {
        if (this.uniqueNumber === undefined) {
            this.uniqueNumber = ++UniqueId.nextId;
        }
        return this.uniqueNumber;
    }
}
UniqueId.nextId = 0;
class InMemoryUpdater {
    constructor(schema, cache, indexStore) {
        this.cache = cache;
        this.indexStore = indexStore;
        this.schema = schema;
    }
    // Updates all indices and the cache to reflect the changes that are described
    // in the given diffs.
    update(tableDiffs) {
        tableDiffs.forEach((tableDiff) => {
            this.updateIndicesForDiff(tableDiff);
            this.updateCacheForDiff(tableDiff);
        }, this);
    }
    // Updates all indices that are affected as a result of the given
    // modification. In the case where an exception is thrown (constraint
    // violation) all the indices are unaffected.
    updateTableIndicesForRow(table, modification) {
        const indices = this.indexStore.getTableIndices(table.getName());
        let updatedIndices = 0;
        indices.forEach((index) => {
            try {
                this.updateTableIndexForRow(index, modification);
                updatedIndices++;
            }
            catch (e) {
                // Rolling back any indices that were successfully updated, since
                // updateTableIndicesForRow must be atomic.
                indices.slice(0, updatedIndices).forEach((idx) => {
                    this.updateTableIndexForRow(idx, [modification[1], modification[0]]);
                }, this);
                // Forwarding the exception to the caller.
                throw e;
            }
        }, this);
    }
    // Updates the cache based on the given table diff.
    updateCacheForDiff(diff) {
        const tableName = diff.getName();
        diff
            .getDeleted()
            .forEach((row, rowId) => { this.cache.remove(tableName, rowId); });
        diff.getAdded().forEach((row) => { this.cache.set(tableName, row); });
        diff
            .getModified()
            .forEach((modification) => { this.cache.set(tableName, modification[1]); });
    }
    // Updates index data structures based on the given table diff.
    updateIndicesForDiff(diff) {
        const table = this.schema.table(diff.getName());
        const modifications = diff.getAsModifications();
        modifications.forEach((modification) => {
            this.updateTableIndicesForRow(table, modification);
        }, this);
    }
    // Updates a given index to reflect a given row modification.
    updateTableIndexForRow(index, modification) {
        // Using 'undefined' as a special value to indicate insertion/
        // deletion instead of 'null', since 'null' can be a valid index key.
        const keyNow = modification[1] === null ? undefined : modification[1].keyOfIndex(index.getName());
        const keyThen = modification[0] === null ? undefined : modification[0].keyOfIndex(index.getName());
        if (keyThen === undefined && keyNow !== undefined) {
            // Insertion
            index.add(keyNow, modification[1].id());
        }
        else if (keyThen !== undefined && keyNow !== undefined) {
            // Index comparators may not handle null, so handle it here for them.
            if (keyNow === null || keyThen === null) {
                if (keyNow === keyThen) {
                    return;
                }
            }
            else if (index.comparator().compare(keyThen, keyNow) === Favor.TIE) {
                return;
            }
            // Update
            // NOTE: the order of calling add() and remove() here matters.
            // Index#add() might throw an exception because of a constraint
            // violation, in which case the index remains unaffected as expected.
            index.add(keyNow, modification[1].id());
            index.remove(keyThen, modification[0].id());
        }
        else if (keyThen !== undefined && keyNow === undefined) {
            // Deletion
            index.remove(keyThen, modification[0].id());
        }
    }
}
class TransactionStatsImpl {
    constructor(success_, insertedRowCount_, updatedRowCount_, deletedRowCount_, changedTableCount_) {
        this.success_ = success_;
        this.insertedRowCount_ = insertedRowCount_;
        this.updatedRowCount_ = updatedRowCount_;
        this.deletedRowCount_ = deletedRowCount_;
        this.changedTableCount_ = changedTableCount_;
    }
    static getDefault() {
        return new TransactionStatsImpl(false, 0, 0, 0, 0);
    }
    success() {
        return this.success_;
    }
    insertedRowCount() {
        return this.insertedRowCount_;
    }
    updatedRowCount() {
        return this.updatedRowCount_;
    }
    deletedRowCount() {
        return this.deletedRowCount_;
    }
    changedTableCount() {
        return this.changedTableCount_;
    }
}
function assert(condition, message = "assertion failed") {
    if (!condition) {
        throw new Exception(ErrorCode.ASSERTION, message);
    }
}
// A MapSet maps a key to a set of values, without allowing duplicate entries
// for a given key.
class MapSet {
    constructor() {
        this.map = new Map();
        this.count = 0;
    }
    get size() {
        return this.count;
    }
    has(key) {
        return this.map.has(key);
    }
    set(key, value) {
        const valueSet = this.getSet(key);
        if (!valueSet.has(value)) {
            valueSet.add(value);
            this.count++;
        }
        return this;
    }
    setMany(key, values) {
        const valueSet = this.getSet(key);
        values.forEach((value) => {
            if (!valueSet.has(value)) {
                valueSet.add(value);
                this.count++;
            }
        });
        return this;
    }
    merge(mapSet) {
        mapSet
            .keys()
            .forEach((key) => this.setMany(key, Array.from(mapSet.getSet(key))));
        return this;
    }
    get(key) {
        const valueSet = this.map.get(key) || null;
        return valueSet === null ? null : Array.from(valueSet);
    }
    keys() {
        return Array.from(this.map.keys());
    }
    values() {
        const results = [];
        this.map.forEach((valueSet) => results.push(...Array.from(valueSet)));
        return results;
    }
    // Returns a set for a given key. If the key does not exist in the map,
    // a new Set will be created.
    getSet(key) {
        let valueSet = this.map.get(key) || null;
        if (valueSet === null) {
            valueSet = new Set();
            this.map.set(key, valueSet);
        }
        return valueSet;
    }
}
// A transaction journal which is contained within Tx. The journal
// stores rows changed by this transaction so that they can be merged into the
// backing store. Caches and indices are updated as soon as a change is
// recorded in the journal.
class Journal {
    constructor(schema, cache, indexStore, txScope) {
        this.scope = new Map();
        txScope.forEach((tableSchema) => this.scope.set(tableSchema.getName(), tableSchema));
        this.indexStore = indexStore;
        this.inMemoryUpdater = new InMemoryUpdater(schema, cache, indexStore);
        this.terminated = false;
        this.pendingRollback = false;
        this.tableDiffs = new Map();
    }
    getDiff() {
        return this.tableDiffs;
    }
    // Returns the indices that were modified in this within this journal.
    // TODO(dpapad): Indices currently can't provide a diff, therefore the entire
    // index is flushed into disk every time, even if only one leaf-node changed.
    getIndexDiff() {
        const tableSchemas = Array.from(this.tableDiffs.keys()).map((tableName) => this.scope.get(tableName));
        const indices = [];
        tableSchemas.forEach((tblSchema) => {
            const tableSchema = tblSchema;
            if (tableSchema.persistentIndex()) {
                const tableIndices = tableSchema.getIndices();
                tableIndices.forEach((indexSchema) => {
                    indices.push(this.indexStore.get(indexSchema.getNormalizedName()));
                }, this);
                indices.push(this.indexStore.get(tableSchema.getName() + ".#"));
            }
        }, this);
        return indices;
    }
    getScope() {
        return this.scope;
    }
    // Commits journal changes into cache and indices.
    commit() {
        this.assertJournalWritable();
        this.terminated = true;
    }
    // Rolls back all the changes that were made in this journal from the cache
    // and indices.
    rollback() {
        assert(!this.terminated, "Attempted to rollback a terminated journal.");
        const reverseDiffs = Array.from(this.tableDiffs.values()).map((tableDiff) => tableDiff.getReverse());
        this.inMemoryUpdater.update(reverseDiffs);
        this.terminated = true;
        this.pendingRollback = false;
    }
    // Asserts that this journal can still be used.
    assertJournalWritable() {
        assert(!this.pendingRollback, "Attempted to use journal that needs to be rolled back.");
        assert(!this.terminated, "Attempted to commit a terminated journal.");
    }
}
// Binder class that instructs the query engine to evaluate bound value at
// execution time.
class Binder {
    constructor(index) {
        this.index = index;
    }
    getIndex() {
        return this.index;
    }
}
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
function identity(value) {
    return value;
}
/**
 * Builds a map associating evaluator types with the evaluator functions, for
 * the case of a column of type 'boolean'.
 * NOTE: lf.eval.Type.BETWEEN, MATCH, GTE, GT, LTE, LT, are not available for
 * boolean objects.
 */
function buildKeyOfIndexConversionMap() {
    const map = new Map();
    map.set(Type.BOOLEAN, ((value) => {
        return value === null ? null : value ? 1 : 0;
    }));
    map.set(Type.DATE_TIME, ((value) => {
        return value === null ? null : value.getTime();
    }));
    map.set(Type.INTEGER, identity);
    map.set(Type.NUMBER, identity);
    map.set(Type.STRING, identity);
    return map;
}
/**
 * Builds a map associating evaluator types with the evaluator functions, for
 * the case of a column of type 'boolean'.
 * NOTE: lf.eval.Type.BETWEEN, MATCH, GTE, GT, LTE, LT, are not available for
 * boolean objects.
 */
function buildBooleanEvaluatorMap() {
    const map = new Map();
    map.set(EvalType.EQ, (a, b) => a === b);
    map.set(EvalType.NEQ, (a, b) => a !== b);
    return map;
}
function buildCommonEvaluatorMap() {
    const map = buildBooleanEvaluatorMap();
    map.set(EvalType.BETWEEN, (a, range) => {
        return a === null || range[0] === null || range[1] === null ? false : a >= range[0] && a <= range[1];
    });
    map.set(EvalType.GTE, (a, b) => {
        return a === null || b === null ? false : a >= b;
    });
    map.set(EvalType.GT, (a, b) => {
        return a === null || b === null ? false : a > b;
    });
    map.set(EvalType.IN, (rowValue, values) => {
        return values.includes(rowValue);
    });
    map.set(EvalType.LTE, (a, b) => {
        return a === null || b === null ? false : a <= b;
    });
    map.set(EvalType.LT, (a, b) => {
        return a === null || b === null ? false : a < b;
    });
    return map;
}
/**
 * Builds a map associating evaluator types with the evaluator functions, for
 * the case of a column of type 'number'.
 * NOTE: lf.eval.Type.MATCH is not available for numbers.
 */
const buildNumberEvaluatorMap = buildCommonEvaluatorMap;
/**
 * Builds a map associating evaluator types with the evaluator functions, for
 * the case of a column of type 'string'.
 */
function buildStringEvaluatorMap() {
    const map = buildCommonEvaluatorMap();
    map.set(EvalType.MATCH, (value, regex) => {
        if (value === null || regex === null) {
            return false;
        }
        const re = new RegExp(regex);
        return re.test(value);
    });
    return map;
}
/**
 * Builds a map associating evaluator types with the evaluator functions, for
 * the case of a column of type 'Object'.
 * NOTE: Only lf.eval.Type.EQ and NEQ are available for objects.
 */
function buildObjectEvaluatorMap() {
    const map = new Map();
    const checkNull = (value) => {
        if (value !== null) {
            // 550: where() clause includes an invalid predicate, can't compare
            // lf.Type.OBJECT to anything other than null.
            throw new Exception(ErrorCode.INVALID_PREDICATE);
        }
    };
    map.set(EvalType.EQ, (a, b) => {
        checkNull(b);
        return a === null;
    });
    map.set(EvalType.NEQ, (a, b) => {
        checkNull(b);
        return a !== null;
    });
    return map;
}
/**
 * Builds a map associating evaluator types with the evaluator functions, for
 * the case of a column of type 'Date'.
 * NOTE: lf.eval.Type.MATCH is not available for Date objects.
 */
function buildDateEvaluatorMap() {
    const map = new Map();
    map.set(EvalType.BETWEEN, (a, range) => {
        return a === null || range[0] === null || range[1] === null ? false : a.getTime() >= range[0].getTime() && a.getTime() <= range[1].getTime();
    });
    map.set(EvalType.EQ, (a, b) => {
        const aTime = a === null ? -1 : a.getTime();
        const bTime = b === null ? -1 : b.getTime();
        return aTime === bTime;
    });
    map.set(EvalType.GTE, (a, b) => {
        return a === null || b === null ? false : a.getTime() >= b.getTime();
    });
    map.set(EvalType.GT, (a, b) => {
        return a === null || b === null ? false : a.getTime() > b.getTime();
    });
    map.set(EvalType.IN, (targetValue, values) => {
        return values.some((value) => value.getTime() === targetValue.getTime());
    });
    map.set(EvalType.LTE, (a, b) => {
        return a === null || b === null ? false : a.getTime() <= b.getTime();
    });
    map.set(EvalType.LT, (a, b) => {
        return a === null || b === null ? false : a.getTime() < b.getTime();
    });
    map.set(EvalType.NEQ, (a, b) => {
        const aTime = a === null ? -1 : a.getTime();
        const bTime = b === null ? -1 : b.getTime();
        return aTime !== bTime;
    });
    return map;
}
class EvalRegistry {
    constructor() {
        this.keyOfIndexConversionMap = buildKeyOfIndexConversionMap();
        this.evalMaps = new Map();
        const numberOrIntegerEvalMap = buildNumberEvaluatorMap();
        this.evalMaps.set(Type.BOOLEAN, buildBooleanEvaluatorMap());
        this.evalMaps.set(Type.DATE_TIME, buildDateEvaluatorMap());
        this.evalMaps.set(Type.NUMBER, numberOrIntegerEvalMap);
        this.evalMaps.set(Type.INTEGER, numberOrIntegerEvalMap);
        this.evalMaps.set(Type.STRING, buildStringEvaluatorMap());
        this.evalMaps.set(Type.OBJECT, buildObjectEvaluatorMap());
    }
    static get() {
        EvalRegistry.instance = EvalRegistry.instance || new EvalRegistry();
        return EvalRegistry.instance;
    }
    getEvaluator(columnType, evaluatorType) {
        const evaluationMap = this.evalMaps.get(columnType) || null;
        if (evaluationMap === null) {
            // 550: where() clause includes an invalid predicate. Could not find
            // evaluation map for the given column type.
            throw new Exception(ErrorCode.INVALID_PREDICATE);
        }
        const evaluatorFn = evaluationMap.get(evaluatorType) || null;
        if (evaluatorFn === null) {
            // 550: where() clause includes an invalid predicate. Could not find
            // evaluation map for the given column type.
            throw new Exception(ErrorCode.INVALID_PREDICATE);
        }
        return evaluatorFn;
    }
    getKeyOfIndexEvaluator(columnType) {
        const fn = this.keyOfIndexConversionMap.get(columnType) || null;
        if (fn === null) {
            // 300: Not supported
            throw new Exception(ErrorCode.NOT_SUPPORTED);
        }
        return fn;
    }
}
// Unbound is used to denote an unbound key range boundary.
class UnboundKey {
}
// A SingleKeyRange represents a key range of a single column.
class SingleKeyRange {
    constructor(from, to, excludeLower, excludeUpper) {
        this.from = from;
        this.to = to;
        this.excludeLower = !SingleKeyRange.isUnbound(this.from) ? excludeLower : false;
        this.excludeUpper = !SingleKeyRange.isUnbound(this.to) ? excludeUpper : false;
    }
    static isUnbound(value) {
        return value === SingleKeyRange.UNBOUND_VALUE;
    }
    static upperBound(key, shouldExclude = false) {
        return new SingleKeyRange(SingleKeyRange.UNBOUND_VALUE, key, false, shouldExclude);
    }
    static lowerBound(key, shouldExclude = false) {
        return new SingleKeyRange(key, SingleKeyRange.UNBOUND_VALUE, shouldExclude, false);
    }
    // Creates a range that includes a single key.
    static only(key) {
        return new SingleKeyRange(key, key, false, false);
    }
    // Creates a range that includes all keys.
    static all() {
        return new SingleKeyRange(SingleKeyRange.UNBOUND_VALUE, SingleKeyRange.UNBOUND_VALUE, false, false);
    }
    static xor(a, b) {
        return a ? !b : b;
    }
    // Compares two ranges, meant to be used in Array#sort.
    static compare(lhs, rhs) {
        let result = SingleKeyRange.compareKey(lhs.from, rhs.from, true, lhs.excludeLower, rhs.excludeLower);
        if (result === Favor.TIE) {
            result = SingleKeyRange.compareKey(lhs.to, rhs.to, false, lhs.excludeUpper, rhs.excludeUpper);
        }
        return result;
    }
    // Returns a new range that is the minimum range that covers both ranges
    // given.
    static getBoundingRange(r1, r2) {
        let from = SingleKeyRange.UNBOUND_VALUE;
        let to = SingleKeyRange.UNBOUND_VALUE;
        let excludeLower = false;
        let excludeUpper = false;
        if (!SingleKeyRange.isUnbound(r1.from)
            && !SingleKeyRange.isUnbound(r2.from)) {
            const favor = SingleKeyRange.compareKey(r1.from, r2.from, true);
            if (favor !== Favor.LHS) {
                from = r1.from;
                excludeLower = favor !== Favor.TIE ? r1.excludeLower : r1.excludeLower && r2.excludeLower;
            }
            else {
                from = r2.from;
                excludeLower = r2.excludeLower;
            }
        }
        if (!SingleKeyRange.isUnbound(r1.to) && !SingleKeyRange.isUnbound(r2.to)) {
            const favor = SingleKeyRange.compareKey(r1.to, r2.to, false);
            if (favor !== Favor.RHS) {
                to = r1.to;
                excludeUpper = favor !== Favor.TIE ? r1.excludeUpper : r1.excludeUpper && r2.excludeUpper;
            }
            else {
                to = r2.to;
                excludeUpper = r2.excludeUpper;
            }
        }
        return new SingleKeyRange(from, to, excludeLower, excludeUpper);
    }
    // Intersects two ranges and return their intersection.
    // Returns null if intersection is empty.
    static and(r1, r2) {
        if (!r1.overlaps(r2)) {
            return null;
        }
        let favor = SingleKeyRange.compareKey(r1.from, r2.from, true);
        const left = favor === Favor.TIE ? r1.excludeLower ? r1 : r2 : favor !== Favor.RHS ? r1 : r2;
        // right side boundary test is different, null is considered greater.
        let right;
        if (SingleKeyRange.isUnbound(r1.to) || SingleKeyRange.isUnbound(r2.to)) {
            right = SingleKeyRange.isUnbound(r1.to) ? r2 : r1;
        }
        else {
            favor = SingleKeyRange.compareKey(r1.to, r2.to, false);
            right = favor === Favor.TIE ? r1.excludeUpper ? r1 : r2 : favor === Favor.RHS ? r1 : r2;
        }
        return new SingleKeyRange(left.from, right.to, left.excludeLower, right.excludeUpper);
    }
    // Calculates the complement key ranges of the input key ranges.
    // NOTE: The key ranges passed in this method must satisfy "isOnly() == true",
    // and none of from/to should be null.
    static complement(keyRanges) {
        if (keyRanges.length === 0) {
            return SingleKeyRange.EMPTY_RANGE;
        }
        keyRanges.sort(SingleKeyRange.compare);
        const complementKeyRanges = new Array(keyRanges.length + 1);
        for (let i = 0; i < complementKeyRanges.length; i++) {
            if (i === 0) {
                complementKeyRanges[i] = SingleKeyRange.upperBound(keyRanges[i].from, true);
            }
            else if (i === complementKeyRanges.length - 1) {
                complementKeyRanges[i] = SingleKeyRange.lowerBound(keyRanges[i - 1].to, true);
            }
            else {
                complementKeyRanges[i] = new SingleKeyRange(keyRanges[i - 1].to, keyRanges[i].from, true, true);
            }
        }
        return complementKeyRanges;
    }
    static compareKey(l, r, isLeftHandSide, excludeL = false, excludeR = false) {
        const flip = (favor) => isLeftHandSide ? favor : favor === Favor.LHS ? Favor.RHS : Favor.LHS;
        // The following logic is implemented for LHS. RHS is achieved using flip().
        const tieLogic = () => !SingleKeyRange.xor(excludeL, excludeR)
            ? Favor.TIE
            : excludeL
                ? flip(Favor.LHS)
                : flip(Favor.RHS);
        if (SingleKeyRange.isUnbound(l)) {
            return !SingleKeyRange.isUnbound(r) ? flip(Favor.RHS) : tieLogic();
        }
        return SingleKeyRange.isUnbound(r) ? flip(Favor.LHS) : l < r ? Favor.RHS : l === r ? tieLogic() : Favor.LHS;
    }
    // A text representation of this key range, useful for tests.
    // Example: [a, b] means from a to b, with both a and b included in the range.
    // Example: (a, b] means from a to b, with a excluded, b included.
    // Example: (a, b) means from a to b, with both a and b excluded.
    // Example: [unbound, b) means anything less than b, with b not included.
    // Example: [a, unbound] means anything greater than a, with a included.
    toString() {
        return ((this.excludeLower ? "(" : "[")
            + (SingleKeyRange.isUnbound(this.from) ? "unbound" : this.from)
            + ", "
            + (SingleKeyRange.isUnbound(this.to) ? "unbound" : this.to)
            + (this.excludeUpper ? ")" : "]"));
    }
    // Reverses a keyRange such that "lower" refers to larger values and "upper"
    // refers to smaller values. Note: This is different than what complement()
    // does.
    reverse() {
        return new SingleKeyRange(this.to, this.from, this.excludeUpper, this.excludeLower);
    }
    // Determines if this range overlaps with the given one.
    overlaps(range) {
        const favor = SingleKeyRange.compareKey(this.from, range.from, true, this.excludeLower, range.excludeLower);
        if (favor === Favor.TIE) {
            return true;
        }
        const left = favor === Favor.RHS ? this : range;
        const right = favor === Favor.LHS ? this : range;
        return (SingleKeyRange.isUnbound(left.to)
            || left.to > right.from
            || left.to === right.from && !left.excludeUpper && !right.excludeLower);
    }
    // Returns whether the range is all.
    isAll() {
        return (SingleKeyRange.isUnbound(this.from) && SingleKeyRange.isUnbound(this.to));
    }
    // Returns if the range is only.
    isOnly() {
        return (this.from === this.to
            && !SingleKeyRange.isUnbound(this.from)
            && !this.excludeLower
            && !this.excludeUpper);
    }
}
SingleKeyRange.UNBOUND_VALUE = new UnboundKey();
SingleKeyRange.EMPTY_RANGE = [];
class SingleKeyRangeSet {
    constructor(ranges) {
        this.ranges = [];
        if (ranges) {
            this.add(ranges);
        }
    }
    // Intersection of two range sets.
    static intersect(s0, s1) {
        const ranges = s0.getValues().map((r0) => {
            return s1.getValues().map((r1) => SingleKeyRange.and(r0, r1));
        });
        let results = [];
        ranges.forEach((dimension) => results = results.concat(dimension));
        return new SingleKeyRangeSet(results.filter((r) => r !== null));
    }
    toString() {
        return this.ranges.map((r) => r.toString()).join(",");
    }
    getValues() {
        return this.ranges;
    }
    add(keyRanges) {
        if (keyRanges.length === 0) {
            return;
        }
        const ranges = this.ranges.concat(keyRanges);
        if (ranges.length === 1) {
            this.ranges = ranges;
            return;
        }
        ranges.sort(SingleKeyRange.compare);
        const results = [];
        let start = ranges[0];
        for (let i = 1; i < ranges.length; ++i) {
            if (start.overlaps(ranges[i])) {
                start = SingleKeyRange.getBoundingRange(start, ranges[i]);
            }
            else {
                results.push(start);
                start = ranges[i];
            }
        }
        results.push(start);
        this.ranges = results;
    }
}
// Whether set2 is a subset of set1
function isSubset(set1, set2) {
    if (set2.size > set1.size) {
        return false;
    }
    let result = true;
    set2.forEach((value) => result = result && set1.has(value));
    return result;
}
function setEquals(set1, set2) {
    return set1.size === set2.size && isSubset(set1, set2);
}
// The base row class for all rows.
class Row {
    constructor(id_, payload) {
        this.id_ = id_;
        this.payload_ = payload || this.defaultPayload();
    }
    // Get the next unique row ID to use for creating a new instance.
    static getNextId() {
        return Row.nextId++;
    }
    // Creates a new Row instance from DB data.
    static deserialize(data) {
        return new Row(data.id, data.value);
    }
    // ArrayBuffer to hex string.
    static binToHex(buffer) {
        if (buffer === null) {
            return null;
        }
        const uint8Array = new Uint8Array(buffer);
        let s = "";
        uint8Array.forEach((c) => {
            const chr = c.toString(16);
            s += chr.length < 2 ? "0" + chr : chr;
        });
        return s;
    }
    // Hex string to ArrayBuffer.
    static hexToBin(hex) {
        if (hex === null || hex === "") {
            return null;
        }
        if (hex.length % 2 !== 0) {
            hex = "0" + hex;
        }
        const buffer = new ArrayBuffer(hex.length / 2);
        const uint8Array = new Uint8Array(buffer);
        for (let i = 0, j = 0; i < hex.length; i += 2) {
            uint8Array[j++] = Number(`0x${hex.substr(i, 2)}`) & 0xff;
        }
        return buffer;
    }
    id() {
        return this.id_;
    }
    payload() {
        return this.payload_;
    }
    defaultPayload() {
        return {};
    }
    toDbPayload() {
        return this.payload_;
    }
    serialize() {
        return { "id": this.id_, "value": this.toDbPayload() };
    }
    keyOfIndex(indexName) {
        if (indexName.substr(-1) === "#") {
            return this.id_;
        }
        // Remaining indices keys are implemented by overriding keyOfIndex in
        // subclasses.
        return null;
    }
}
// An ID to be used when a row that does not correspond to a DB entry is
// created (for example the result of joining two rows).
Row.DUMMY_ID = -1;
// The ID to assign to the next row that will be created.
// Should be initialized to the appropriate value from the BackStore instance
// that is being used.
Row.nextId = Row.DUMMY_ID + 1;
/**
 * Each RelationEntry represents a row that is passed from one execution step
 * to another and does not necessarily correspond to a physical row in a DB
 * table (as it can be the result of a cross-product/join operation).
 */
class RelationEntry {
    // |isPrefixApplied| Whether the payload in this entry is using prefixes for
    // each attribute. This happens when this entry is the result of a relation
    // join.
    constructor(row, isPrefixApplied) {
        this.row = row;
        this.isPrefixApplied = isPrefixApplied;
        this.id = RelationEntry.getNextId();
    }
    // Combines two entries into a single entry.
    static combineEntries(leftEntry, leftEntryTables, rightEntry, rightEntryTables) {
        const result = {};
        const mergeEntry = (entry, entryTables) => {
            if (entry.isPrefixApplied) {
                const payload = entry.row.payload();
                Array.from(Object.keys(payload)).forEach((prefix) => {
                    result[prefix] = payload[prefix];
                });
            }
            else {
                assert(!Object.prototype.hasOwnProperty.call(result, entryTables[0]), "Attempted to join table with itself, without using table alias, "
                    + "or same alias "
                    + entryTables[0]
                    + "is reused for multiple tables.");
                // Since the entry is not prefixed, all attributes come from a single
                // table.
                result[entryTables[0]] = entry.row.payload();
            }
        };
        mergeEntry(leftEntry, leftEntryTables);
        mergeEntry(rightEntry, rightEntryTables);
        const row = new Row(Row.DUMMY_ID, result);
        return new RelationEntry(row, true);
    }
    static getNextId() {
        return RelationEntry.nextId++;
    }
    getField(col) {
        // Attempting to get the field from the aliased location first, since it is
        // not guaranteed that setField() has been called for this instance. If not
        // found then look for it in its normal location.
        const column = col;
        const alias = column.getAlias();
        if (alias !== null
            && Object.prototype.hasOwnProperty.call(this.row.payload(), alias)) {
            return this.row.payload()[alias];
        }
        if (this.isPrefixApplied) {
            return this.row.payload()[column.getTable().getEffectiveName()][column.getName()];
        }
        else {
            return this.row.payload()[column.getName()];
        }
    }
    setField(col, value) {
        const column = col;
        const alias = column.getAlias();
        if (alias !== null) {
            this.row.payload()[alias] = value;
            return;
        }
        if (this.isPrefixApplied) {
            const tableName = column.getTable().getEffectiveName();
            let containerObj = this.row.payload()[tableName];
            if (!(containerObj !== undefined && containerObj !== null)) {
                containerObj = {};
                this.row.payload()[tableName] = containerObj;
            }
            containerObj[column.getName()] = value;
        }
        else {
            this.row.payload()[column.getName()] = value;
        }
    }
}
// The ID to assign to the next entry that will be created.
RelationEntry.nextId = 0;
class Relation {
    constructor(entries, tables) {
        this.entries = entries;
        this.tables = new Set(tables);
        this.aggregationResults = null;
    }
    // Creates an empty Relation instance. Since a relation is immutable, a
    // singleton "empty" relation instance is lazily instantiated and returned in
    // all subsequent calls.
    static createEmpty() {
        if (Relation.emptyRelation === null) {
            Relation.emptyRelation = new Relation([], []);
        }
        return Relation.emptyRelation;
    }
    // Finds the intersection of a given list of relations.
    static intersect(relations) {
        if (relations.length === 0) {
            return Relation.createEmpty();
        }
        const totalCount = relations.reduce((soFar, relation) => {
            Relation.assertCompatible(relations[0], relation);
            return soFar + relation.entries.length;
        }, 0);
        const allEntries = new Array(totalCount);
        let entryCounter = 0;
        // Creating a map [entry.id --> entry] for each relation, and at the same
        // time populating the allEntries array.
        const relationMaps = relations.map((relation) => {
            const map = new Map();
            relation.entries.forEach((entry) => {
                allEntries[entryCounter++] = entry;
                map.set(entry.id, entry);
            });
            return map;
        });
        const intersection = new Map();
        allEntries.forEach((entry) => {
            const existsInAll = relationMaps.every((relation) => relation.has(entry.id));
            if (existsInAll) {
                intersection.set(entry.id, entry);
            }
        });
        return new Relation(Array.from(intersection.values()), Array.from(relations[0].tables.values()));
    }
    // Finds the union of a given list of relations.
    static union(relations) {
        if (relations.length === 0) {
            return Relation.createEmpty();
        }
        const union = new Map();
        relations.forEach((relation) => {
            Relation.assertCompatible(relations[0], relation);
            relation.entries.forEach((entry) => union.set(entry.id, entry));
        });
        return new Relation(Array.from(union.values()), Array.from(relations[0].tables.values()));
    }
    // Creates an lf.proc.Relation instance from a set of lf.Row instances.
    static fromRows(rows, tables) {
        const isPrefixApplied = tables.length > 1;
        const entries = rows.map((row) => new RelationEntry(row, isPrefixApplied));
        return new Relation(entries, tables);
    }
    // Asserts that two relations are compatible with regards to
    // union/intersection operations.
    static assertCompatible(lhs, rhs) {
        assert(lhs.isCompatible(rhs), "Intersection/union operations only apply to compatible relations.");
    }
    // Whether this is compatible with given relation in terms of calculating
    // union/intersection.
    isCompatible(relation) {
        return setEquals(this.tables, relation.tables);
    }
    // Returns the names of all source tables of this relation.
    getTables() {
        return Array.from(this.tables.values());
    }
    // Whether prefixes have been applied to the payloads in this relation.
    isPrefixApplied() {
        return this.tables.size > 1;
    }
    getPayloads() {
        return this.entries.map((entry) => entry.row.payload());
    }
    getRowIds() {
        return this.entries.map((entry) => entry.row.id());
    }
    // Adds an aggregated result to this relation.
    setAggregationResult(column, result) {
        if (this.aggregationResults === null) {
            this.aggregationResults = new Map();
        }
        this.aggregationResults.set(column.getNormalizedName(), result);
    }
    // Gets an already calculated aggregated result for this relation.
    getAggregationResult(column) {
        assert(this.aggregationResults !== null, "getAggregationResult called before any results have been calculated.");
        const colName = column.getNormalizedName();
        const result = this.aggregationResults.get(colName);
        assert(result !== undefined, `Could not find result for ${colName}`);
        return result;
    }
    // Whether an aggregation result for the given aggregated column has been
    // calculated.
    hasAggregationResult(column) {
        return (this.aggregationResults !== null
            && this.aggregationResults.has(column.getNormalizedName()));
    }
}
Relation.emptyRelation = null;
class TreeNode {
    constructor() {
        this.parent = null;
        this.children = null;
    }
    getParent() {
        return this.parent;
    }
    getRoot() {
        let root = this;
        while (root.parent !== null) {
            root = root.parent;
        }
        return root;
    }
    getDepth() {
        let depth = 0;
        let node = this;
        while (node.parent !== null) {
            depth++;
            node = node.parent;
        }
        return depth;
    }
    isLeaf() {
        return this.children === null;
    }
    getChildren() {
        return this.children || TreeNode.EMPTY_ARRAY;
    }
    getChildAt(index) {
        return this.children && index >= 0 && index < this.children.length ? this.getChildren()[index] : null;
    }
    getChildCount() {
        return this.getChildren().length;
    }
    addChildAt(child, index) {
        assert(child.parent === null);
        child.parent = this;
        if (this.children === null) {
            // assert(index == 0);
            this.children = [child];
        }
        else {
            assert(index >= 0 && index <= this.children.length);
            this.children.splice(index, 0, child);
        }
    }
    addChild(child) {
        assert(child.parent === null);
        child.parent = this;
        if (this.children === null) {
            this.children = [child];
        }
        else {
            this.children.push(child);
        }
    }
    // Returns removed node at index, if any.
    removeChildAt(index) {
        if (this.children) {
            const child = this.children[index];
            if (child) {
                child.parent = null;
                this.children.splice(index, 1);
                if (this.children.length === 0) {
                    this.children = null;
                }
                return child;
            }
        }
        return null;
    }
    // Returns removed node, if any.
    removeChild(child) {
        return this.children ? this.removeChildAt(this.children.indexOf(child)) : null;
    }
    // Returns original node, if any.
    replaceChildAt(newChild, index) {
        assert(newChild.parent === null);
        if (this.children) {
            const oldChild = this.getChildAt(index);
            if (oldChild) {
                oldChild.parent = null;
                newChild.parent = this;
                this.children[index] = newChild;
                return oldChild;
            }
        }
        return null;
    }
    // Traverses the subtree with the possibility to skip branches. Starts with
    // this node, and visits the descendant nodes depth-first, in preorder.
    traverse(f) {
        if (f(this) !== false) {
            this.getChildren().forEach((child) => {
                child.traverse(f);
            });
        }
    }
}
TreeNode.EMPTY_ARRAY = [];
class PredicateNode extends TreeNode {
    constructor() {
        super();
        this.id = PredicateNode.nextId++;
    }
    setId(id) {
        this.id = id;
    }
    getId() {
        return this.id;
    }
}
// The ID to assign to the next predicate that will be created. Note that
// predicates are constructed with unique IDs, but when a predicate is cloned
//  the ID is also purposefully cloned.
PredicateNode.nextId = 0;
class ValuePredicate extends PredicateNode {
    constructor(column, value, evaluatorType) {
        super();
        this.column = column;
        this.value = value;
        this.evaluatorType = evaluatorType;
        this.evaluatorFn = EvalRegistry.get().getEvaluator(this.column.getType(), this.evaluatorType);
        this.isComplement = false;
        this.binder = value;
    }
    eval(relation) {
        this.checkBinding();
        // Ignoring this.evaluatorFn_() for the case of the IN, in favor of a faster
        // evaluation implementation.
        if (this.evaluatorType === EvalType.IN) {
            return this.evalAsIn(relation);
        }
        const entries = relation.entries.filter((entry) => {
            return (this.evaluatorFn(entry.getField(this.column), this.value) !== this.isComplement);
        });
        return new Relation(entries, relation.getTables());
    }
    setComplement(isComplement) {
        this.isComplement = isComplement;
    }
    copy() {
        const clone = new ValuePredicate(this.column, this.value, this.evaluatorType);
        clone.binder = this.binder;
        clone.isComplement = this.isComplement;
        clone.setId(this.getId());
        return clone;
    }
    getColumns(results) {
        if (results) {
            results.push(this.column);
            return results;
        }
        return [this.column];
    }
    getTables(results) {
        const tables = results ? results : new Set();
        tables.add(this.column.getTable());
        return tables;
    }
    bind(values) {
        const checkIndexWithinRange = (index) => {
            if (values.length <= index) {
                // 510: Cannot bind to given array: out of range.
                throw new Exception(ErrorCode.BIND_ARRAY_OUT_OF_RANGE);
            }
        };
        if (this.binder instanceof Binder) {
            const index = this.binder.index;
            checkIndexWithinRange(index);
            this.value = values[index];
        }
        else if (Array.isArray(this.binder)) {
            const array = this.binder;
            this.value = array.map((val) => {
                if (val instanceof Binder) {
                    checkIndexWithinRange(val.index);
                    return values[val.index];
                }
                else {
                    return val;
                }
            });
        }
    }
    toString() {
        return ("value_pred("
            + this.column.getNormalizedName()
            + " "
            + this.evaluatorType
            + (this.isComplement ? "(complement)" : "")
            + " "
            + this.value
            + ")");
    }
    // This is used to enable unit test.
    peek() {
        return this.value;
    }
    // Whether this predicate can be converted to a KeyRange instance.
    isKeyRangeCompatible() {
        this.checkBinding();
        return (this.value !== null
            && (this.evaluatorType === EvalType.BETWEEN
                || this.evaluatorType === EvalType.IN
                || this.evaluatorType === EvalType.EQ
                || this.evaluatorType === EvalType.GT
                || this.evaluatorType === EvalType.GTE
                || this.evaluatorType === EvalType.LT
                || this.evaluatorType === EvalType.LTE));
    }
    // Converts this predicate to a key range.
    // NOTE: Not all predicates can be converted to a key range, callers must call
    // isKeyRangeCompatible() before calling this method.
    toKeyRange() {
        assert(this.isKeyRangeCompatible(), "Could not convert predicate to key range.");
        let keyRange = null;
        if (this.evaluatorType === EvalType.BETWEEN) {
            const val = this.value;
            keyRange = new SingleKeyRange(this.getValueAsKey(val[0]), this.getValueAsKey(val[1]), false, false);
        }
        else if (this.evaluatorType === EvalType.IN) {
            const val = this.value;
            const keyRanges = val.map((v) => SingleKeyRange.only(v));
            return new SingleKeyRangeSet(this.isComplement ? SingleKeyRange.complement(keyRanges) : keyRanges);
        }
        else {
            const value = this.getValueAsKey(this.value);
            if (this.evaluatorType === EvalType.EQ) {
                keyRange = SingleKeyRange.only(value);
            }
            else if (this.evaluatorType === EvalType.GTE) {
                keyRange = SingleKeyRange.lowerBound(value);
            }
            else if (this.evaluatorType === EvalType.GT) {
                keyRange = SingleKeyRange.lowerBound(value, true);
            }
            else if (this.evaluatorType === EvalType.LTE) {
                keyRange = SingleKeyRange.upperBound(value);
            }
            else {
                // Must be this.evaluatorType === EvalType.LT.
                keyRange = SingleKeyRange.upperBound(value, true);
            }
        }
        return new SingleKeyRangeSet(this.isComplement ? keyRange.complement() : [keyRange]);
    }
    checkBinding() {
        let bound = false;
        if (!(this.value instanceof Binder)) {
            if (Array.isArray(this.value)) {
                const array = this.value;
                bound = !array.some((val) => val instanceof Binder);
            }
            else {
                bound = true;
            }
        }
        if (!bound) {
            // 501: Value is not bounded.
            throw new Exception(ErrorCode.UNBOUND_VALUE);
        }
    }
    evalAsIn(relation) {
        assert(this.evaluatorType === EvalType.IN, "ValuePredicate#evalAsIn_() called for wrong predicate type.");
        const valueSet = new Set(this.value);
        const evaluatorFn = (rowValue) => {
            return rowValue === null ? false : valueSet.has(rowValue) !== this.isComplement;
        };
        const entries = relation.entries.filter((entry) => evaluatorFn(entry.getField(this.column)));
        return new Relation(entries, relation.getTables());
    }
    // Converts value in this predicate to index key.
    getValueAsKey(value) {
        if (this.column.getType() === Type.DATE_TIME) {
            return value.getTime();
        }
        return value;
    }
}
// Base context for all query types.
class Context extends UniqueId {
    constructor() {
        super();
        this.clonedFrom = null;
        this.where = null;
        this.predicateMap = null;
    }
    // Creates predicateMap such that predicates can be located by ID.
    static buildPredicateMap(rootPredicate) {
        const predicateMap = new Map();
        rootPredicate.traverse((n) => {
            const node = n;
            predicateMap.set(node.getId(), node);
        });
        return predicateMap;
    }
    getPredicate(id) {
        if (this.predicateMap === null && this.where !== null) {
            this.predicateMap = Context.buildPredicateMap(this.where);
        }
        const predicate = this.predicateMap.get(id);
        assert(predicate !== undefined);
        return predicate;
    }
    bind(values) {
        assert(this.clonedFrom === null);
        return this;
    }
    bindValuesInSearchCondition(values) {
        const searchCondition = this.where;
        if (searchCondition !== null) {
            searchCondition.traverse((node) => {
                if (node instanceof ValuePredicate) {
                    node.bind(values);
                }
            });
        }
    }
    cloneBase(context) {
        if (context.where) {
            this.where = context.where.copy();
        }
        this.clonedFrom = context;
    }
}
// Internal representation of SELECT query.
class SelectContext extends Context {
    constructor() {
        super();
    }
    static orderByToString(orderBy) {
        let out = "";
        orderBy.forEach((orderByEl, index) => {
            out += orderByEl.column.getNormalizedName() + " ";
            out += orderByEl.order === Order.ASC ? "ASC" : "DESC";
            if (index < orderBy.length - 1) {
                out += ", ";
            }
        });
        return out;
    }
    getScope() {
        return new Set(this.from);
    }
    clone() {
        const context = new SelectContext();
        context.cloneBase(this);
        if (this.columns) {
            context.columns = this.columns.slice();
        }
        if (this.from) {
            context.from = this.from.slice();
        }
        context.limit = this.limit;
        context.skip = this.skip;
        if (this.orderBy) {
            context.orderBy = this.orderBy.slice();
        }
        if (this.groupBy) {
            context.groupBy = this.groupBy.slice();
        }
        if (this.limitBinder) {
            context.limitBinder = this.limitBinder;
        }
        if (this.skipBinder) {
            context.skipBinder = this.skipBinder;
        }
        context.outerJoinPredicates = this.outerJoinPredicates;
        return context;
    }
    bind(values) {
        super.bind(values);
        if (this.limitBinder !== undefined && this.limitBinder !== null) {
            this.limit = values[this.limitBinder.index];
        }
        if (this.skipBinder !== undefined && this.skipBinder !== null) {
            this.skip = values[this.skipBinder.index];
        }
        this.bindValuesInSearchCondition(values);
        return this;
    }
}
class PhysicalQueryPlan {
    constructor(rootNode, scope) {
        this.rootNode = rootNode;
        this.scope = scope;
    }
    // Calculates the combined scope of the given list of physical query plans.
    static getCombinedScope(plans) {
        const tableSet = new Set();
        plans.forEach((plan) => {
            plan.getScope().forEach(tableSet.add.bind(tableSet));
        });
        return tableSet;
    }
    getRoot() {
        return this.rootNode;
    }
    // Returns scope of this plan (i.e. tables involved)
    getScope() {
        return this.scope;
    }
}
// A QueryTask represents a collection of queries that should be executed as
// part of a single transaction.
class QueryTask extends UniqueId {
    constructor(backStore, schema, cache, indexStore, items) {
        super();
        this.backStore = backStore;
        this.schema = schema;
        this.cache = cache;
        this.indexStore = indexStore;
        this.queries = items.map((item) => item.context);
        this.plans = items.map((item) => item.plan);
        this.combinedScope = PhysicalQueryPlan.getCombinedScope(this.plans);
        this.txType = this.detectType();
        this.resolver = new Resolver();
    }
    exec() {
        const journal = this.txType === TransactionType.READ_ONLY ? undefined : new Journal(this.schema, this.cache, this.indexStore, this.combinedScope);
        const results = [];
        const remainingPlans = this.plans.slice();
        const queries = this.queries;
        const sequentiallyExec = () => {
            const plan = remainingPlans.shift();
            if (plan) {
                const queryContext = queries[results.length];
                return plan
                    .getRoot()
                    .exec(journal, queryContext)
                    .then((relations) => {
                    results.push(relations[0]);
                    return sequentiallyExec();
                });
            }
            return Promise.resolve(results);
        };
        return sequentiallyExec()
            .then(() => {
            this.tx = this.backStore.createTx(this.txType, Array.from(this.combinedScope.values()), journal);
            return this.tx.commit();
        })
            .then(() => {
            this.onSuccess(results);
            return results;
        }, (e) => {
            if (journal) {
                journal.rollback();
            }
            throw e;
        });
    }
    getType() {
        return this.txType;
    }
    getScope() {
        return this.combinedScope;
    }
    getResolver() {
        return this.resolver;
    }
    getId() {
        return this.getUniqueNumber();
    }
    // Returns stats for the task. Used in transaction.exec([queries]).
    stats() {
        let results = null;
        if (this.tx) {
            results = this.tx.stats();
        }
        return results === null ? TransactionStatsImpl.getDefault() : results;
    }
    // Executes after all queries have finished successfully. Default
    // implementation is a no-op. Subclasses should override this method as
    // necessary.
    onSuccess(results) {
        // Default implementation is a no-op.
    }
    detectType() {
        return this.queries.some((query) => !(query instanceof SelectContext)) ? TransactionType.READ_WRITE : TransactionType.READ_ONLY;
    }
}
class MemoryTable {
    constructor() {
        this.data = new Map();
    }
    getSync(ids) {
        // Empty array is treated as "return all rows".
        if (ids.length === 0) {
            return Array.from(this.data.values());
        }
        const results = [];
        ids.forEach((id) => {
            const row = this.data.get(id) || null;
            if (row !== null) {
                results.push(row);
            }
        }, this);
        return results;
    }
    get(ids) {
        return Promise.resolve(this.getSync(ids));
    }
    putSync(rows) {
        rows.forEach((row) => this.data.set(row.id(), row));
    }
    put(rows) {
        this.putSync(rows);
        return Promise.resolve();
    }
    removeSync(ids) {
        if (ids.length === 0 || ids.length === this.data.size) {
            // Remove all.
            this.data.clear();
        }
        else {
            ids.forEach((id) => this.data.delete(id));
        }
    }
    remove(ids) {
        this.removeSync(ids);
        return Promise.resolve();
    }
}
// A base class for all native DB transactions wrappers to subclass.
class BaseTx {
    constructor(txType, journal) {
        this.txType = txType;
        this.journal = journal || null;
        this.resolver = new Resolver();
        this.success = false;
        this.statsObject = null;
    }
    getJournal() {
        return this.journal;
    }
    commit() {
        const promise = this.txType === TransactionType.READ_ONLY ? this.commitInternal() : this.commitReadWrite();
        return promise.then((results) => {
            this.success = true;
            return results;
        });
    }
    stats() {
        if (this.statsObject === null) {
            if (!this.success) {
                this.statsObject = TransactionStatsImpl.getDefault();
            }
            else if (this.txType === TransactionType.READ_ONLY) {
                this.statsObject = new TransactionStatsImpl(true, 0, 0, 0, 0);
            }
            else {
                const diff = this.journal.getDiff();
                let insertedRows = 0;
                let deletedRows = 0;
                let updatedRows = 0;
                let tablesChanged = 0;
                diff.forEach((tableDiff) => {
                    tablesChanged++;
                    insertedRows += tableDiff.getAdded().size;
                    updatedRows += tableDiff.getModified().size;
                    deletedRows += tableDiff.getDeleted().size;
                });
                this.statsObject = new TransactionStatsImpl(true, insertedRows, updatedRows, deletedRows, tablesChanged);
            }
        }
        return this.statsObject;
    }
    commitReadWrite() {
        return this.mergeIntoBackstore().then((results) => {
            this.journal.commit();
            return results;
        });
    }
    // Flushes all changes currently in this transaction's journal to the backing
    // store. Returns a promise firing after all changes have been successfully
    // written to the backing store.
    mergeIntoBackstore() {
        this.mergeTableChanges();
        this.mergeIndexChanges();
        // When all DB operations have finished, this.whenFinished will fire.
        return this.commitInternal();
    }
    // Flushes the changes currently in this transaction's journal that refer to
    // user-defined tables to the backing store.
    mergeTableChanges() {
        const journal = this.journal;
        const diff = journal.getDiff();
        diff.forEach((tableDiff, tableName) => {
            const tableSchema = journal.getScope().get(tableName);
            const table = this.getTable(tableSchema.getName(), tableSchema.deserializeRow.bind(tableSchema), TableType.DATA);
            const toDeleteRowIds = Array.from(tableDiff.getDeleted().values()).map((row) => row.id());
            const toPut = Array.from(tableDiff.getModified().values())
                .map((modification) => modification[1])
                .concat(Array.from(tableDiff.getAdded().values()));
            // If we have things to put and delete in the same transaction then we
            // need to disable the clear table optimization the backing store might
            // want to do. Otherwise we have possible races between the put and
            // count/clear.
            const shouldDisableClearTableOptimization = toPut.length > 0;
            if (toDeleteRowIds.length > 0) {
                table.remove(toDeleteRowIds, shouldDisableClearTableOptimization).then(() => { }, (e) => {
                    this.resolver.reject(e);
                });
            }
            table.put(toPut).then(() => { }, (e) => {
                this.resolver.reject(e);
            });
        }, this);
    }
    // Flushes the changes currently in this transaction's journal that refer to
    // persisted indices to the backing store.
    mergeIndexChanges() {
        const indices = this.journal.getIndexDiff();
        indices.forEach((index) => {
            const indexTable = this.getTable(index.getName(), Row.deserialize, TableType.INDEX);
            // Since there is no index diff implemented yet, the entire index needs
            // to be overwritten on disk.
            indexTable.remove([]);
            indexTable.put(index.serialize());
        }, this);
    }
}
class MemoryTx extends BaseTx {
    constructor(store, type, journal) {
        super(type, journal);
        this.store = store;
        if (type === TransactionType.READ_ONLY) {
            this.resolver.resolve();
        }
    }
    getTable(tableName, deserializeFn, tableType) {
        return this.store.getTableInternal(tableName);
    }
    abort() {
        this.resolver.reject();
    }
    commitInternal() {
        this.resolver.resolve();
        return this.resolver.promise;
    }
}
class Memory {
    constructor(schema) {
        this.schema = schema;
        this.tables = new Map();
        this.schema.tables().forEach((table) => {
            this.initTable(table);
        }, this);
    }
    getTableInternal(tableName) {
        const table = this.tables.get(tableName) || null;
        if (table === null) {
            // 101: Table {0} not found.
            throw new Exception(ErrorCode.TABLE_NOT_FOUND, tableName);
        }
        return table;
    }
    createTx(type, scope, journal) {
        return new MemoryTx(this, type, journal);
    }
    close() {
        // No op.
    }
    supportsImport() {
        return true;
    }
    peek() {
        return this.tables;
    }
    // Creates a new empty table in the database. It is a no-op if a table with
    // the given name already exists.
    // NOTE: the return value is not ported because it's not used.
    createTable(tableName) {
        if (!this.tables.has(tableName)) {
            this.tables.set(tableName, new MemoryTable());
        }
    }
    initTable(tableSchema) {
        this.createTable(tableSchema.getName());
        if (tableSchema.persistentIndex()) {
            tableSchema.getIndices().forEach((indexSchema) => {
                this.createTable(indexSchema.getNormalizedName());
            }, this);
            // Creating RowId index table.
            this.createTable(tableSchema.getRowIdIndexName());
        }
    }
}
// Port of goog.math methods used by Lovefield.
class MathHelper {
    static sum(...args) {
        return args.reduce((sum, value) => sum + value, 0);
    }
    static average(...args) {
        return MathHelper.sum.apply(null, args) / args.length;
    }
    static standardDeviation(...args) {
        if (!args || args.length < 2) {
            return 0;
        }
        const mean = MathHelper.average.apply(null, args);
        const sampleVariance = MathHelper.sum.apply(null, args.map((val) => (val - mean) ** 2))
            / (args.length - 1);
        return Math.sqrt(sampleVariance);
    }
}
class DefaultCache {
    constructor(schema) {
        this.map = new Map();
        this.tableRows = new Map();
        schema.tables().forEach((table) => {
            this.tableRows.set(table.getName(), new Set());
        }, this);
    }
    set(tableName, row) {
        this.map.set(row.id(), row);
        this.getTableRowSet(tableName).add(row.id());
    }
    setMany(tableName, rows) {
        const tableSet = this.getTableRowSet(tableName);
        rows.forEach((row) => {
            this.map.set(row.id(), row);
            tableSet.add(row.id());
        }, this);
    }
    get(id) {
        return this.map.get(id) || null;
    }
    getMany(ids) {
        return ids.map((id) => this.get(id));
    }
    getRange(tableName, fromId, toId) {
        const data = [];
        const min = Math.min(fromId, toId);
        const max = Math.max(fromId, toId);
        const tableSet = this.getTableRowSet(tableName);
        // Ensure the least number of keys are iterated.
        if (tableSet.size < max - min) {
            tableSet.forEach((key) => {
                if (key >= min && key <= max) {
                    const value = this.map.get(key);
                    assert(value !== null && value !== undefined, "Inconsistent cache 1");
                    data.push(value);
                }
            }, this);
        }
        else {
            for (let i = min; i <= max; ++i) {
                if (!tableSet.has(i)) {
                    continue;
                }
                const value = this.map.get(i);
                assert(value !== null && value !== undefined, "Inconsistent cache 2");
                data.push(value);
            }
        }
        return data;
    }
    remove(tableName, id) {
        this.map.delete(id);
        this.getTableRowSet(tableName).delete(id);
    }
    removeMany(tableName, ids) {
        const tableSet = this.getTableRowSet(tableName);
        ids.forEach((id) => {
            this.map.delete(id);
            tableSet.delete(id);
        }, this);
    }
    getCount(tableName) {
        return tableName ? this.getTableRowSet(tableName).size : this.map.size;
    }
    clear() {
        this.map.clear();
        this.tableRows.clear();
    }
    getTableRowSet(tableName) {
        const ret = this.tableRows.get(tableName);
        return ret;
    }
}
class ArrayHelper {
    // Returns true if the value were inserted, false otherwise.
    static binaryInsert(arr, value, comparator) {
        const index = ArrayHelper.binarySearch(arr, value, comparator);
        if (index < 0) {
            arr.splice(-(index + 1), 0, value);
            return true;
        }
        return false;
    }
    // Returns true if the value were inserted, false otherwise.
    static binaryRemove(arr, value, comparator) {
        const index = ArrayHelper.binarySearch(arr, value, comparator);
        if (index < 0) {
            return false;
        }
        arr.splice(index, 1);
        return true;
    }
    // Flatten the array.
    static flatten(...arr) {
        const CHUNK_SIZE = 8192;
        const result = [];
        arr.forEach((element) => {
            if (Array.isArray(element)) {
                for (let c = 0; c < element.length; c += CHUNK_SIZE) {
                    const chunk = element.slice(c, c + CHUNK_SIZE);
                    const recurseResult = ArrayHelper.flatten.apply(null, chunk);
                    recurseResult.forEach((r) => result.push(r));
                }
            }
            else {
                result.push(element);
            }
        });
        return result;
    }
    // Cartesian product of zero or more sets.  Gives an iterator that gives every
    // combination of one element chosen from each set.  For example,
    // ([1, 2], [3, 4]) gives ([1, 3], [1, 4], [2, 3], [2, 4]).
    static product(arrays) {
        const someArrayEmpty = arrays.some((arr) => !arr.length);
        if (someArrayEmpty || arrays.length === 0) {
            return [];
        }
        let indices = new Array(arrays.length);
        indices.fill(0);
        const result = [];
        while (indices !== null) {
            result.push(indices.map((valueIndex, arrayIndex) => arrays[arrayIndex][valueIndex]));
            // Generate the next-largest indices for the next call.
            // Increase the rightmost index. If it goes over, increase the next
            // rightmost (like carry-over addition).
            for (let i = indices.length - 1; i >= 0; i--) {
                // Assertion prevents compiler warning below.
                assert(indices !== null);
                if (indices[i] < arrays[i].length - 1) {
                    indices[i]++;
                    break;
                }
                // We're at the last indices (the last element of every array), so
                // the iteration is over on the next call.
                if (i === 0) {
                    indices = null;
                    break;
                }
                // Reset the index in this column and loop back to increment the
                // next one.
                indices[i] = 0;
            }
        }
        return result;
    }
    // Returns lowest index of the target value if found, otherwise
    // (-(insertion point) - 1). The insertion point is where the value should
    // be inserted into arr to preserve the sorted property.  Return value >= 0
    // iff target is found.
    static binarySearch(arr, value, comparator) {
        let left = 0;
        let right = arr.length;
        const comp = comparator
            || ArrayHelper.defaultComparator;
        while (left < right) {
            const middle = left + right >> 1;
            if (comp(arr[middle], value) < 0) {
                left = middle + 1;
            }
            else {
                right = middle;
            }
        }
        // ~left is a shorthand for -left - 1.
        return left === right && arr[left] === value ? left : ~left;
    }
    // Returns negative value if lhs < rhs, 0 if equal, positive value if
    // lhs > rhs.
    static defaultComparator(lhs, rhs) {
        return lhs - rhs;
    }
}
// Helper functions for index structures.
class IndexHelper {
    // Slice result array by limit and skip.
    // Note: For performance reasons the input array might be modified in place.
    static slice(rawArray, reverseOrder, limit, skip) {
        const array = reverseOrder ? rawArray.reverse() : rawArray;
        // First handling case where no limit and no skip parameters have been
        // specified, such that no copying of the input array is performed. This is
        // an optimization such that unnecessary copying can be avoided for the
        // majority case (no limit/skip params).
        if ((limit === undefined || limit === null)
            && (skip === undefined || skip === null)) {
            return array;
        }
        // Handling case where at least one of limit/skip parameters has been
        // specified. The input array will have to be sliced.
        const actualLimit = Math.min(limit !== undefined ? limit : array.length, array.length);
        if (actualLimit === 0) {
            return [];
        }
        const actualSkip = Math.min(skip || 0, array.length);
        return array.slice(actualSkip, actualSkip + actualLimit);
    }
}
class IndexStats {
    constructor() {
        this.totalRows = 0;
        this.maxKeyEncountered = 0;
    }
    // Signals that a row had been added to index.
    add(key, rowCount) {
        this.totalRows += rowCount;
        this.maxKeyEncountered = this.maxKeyEncountered === null ? key : key > this.maxKeyEncountered ? key : this.maxKeyEncountered;
    }
    // Signals that row(s) had been removed from index.
    remove(key, removedCount) {
        this.totalRows -= removedCount;
    }
    // Signals that the index had been cleared.
    clear() {
        this.totalRows = 0;
        // this.maxKeyEncountered shall not be updated.
    }
    // Combines stats given and put the results into current object.
    updateFromList(statsList) {
        this.clear();
        statsList.forEach((stats) => this.totalRows += stats.totalRows);
    }
}
// Wrapper of the BTree.
class BTree {
    constructor(name, comparatorObj, uniqueKeyOnly, data) {
        this.name = name;
        this.comparatorObj = comparatorObj;
        this.uniqueKeyOnly = uniqueKeyOnly;
        this.root = undefined;
        this.statsObj = new IndexStats();
        if (data) {
            this.root = BTreeNode.fromData(this, data);
        }
        else {
            this.clear();
        }
    }
    getName() {
        return this.name;
    }
    toString() {
        return this.root.toString();
    }
    add(key, value) {
        this.root = this.root.insert(key, value);
    }
    set(key, value) {
        this.root = this.root.insert(key, value, true);
    }
    remove(key, rowId) {
        this.root = this.root.remove(key, rowId);
    }
    get(key) {
        return this.root.get(key);
    }
    cost(keyRange) {
        if (keyRange === undefined || keyRange === null) {
            return this.stats().totalRows;
        }
        if (keyRange instanceof SingleKeyRange) {
            if (keyRange.isAll()) {
                return this.stats().totalRows;
            }
            if (keyRange.isOnly()) {
                // TODO(arthurhsu): this shall be further optimized
                return this.get(keyRange.from).length;
            }
        }
        // TODO(arthurhsu): implement better cost calculation for ranges.
        return this.getRange([keyRange]).length;
    }
    stats() {
        return this.statsObj;
    }
    getRange(keyRanges, reverseOrder, rawLimit, rawSkip) {
        const leftMostKey = this.root.getLeftMostNode().keys[0];
        if (leftMostKey === undefined || rawLimit === 0) {
            // Tree is empty or fake fetch to make query plan cached.
            return BTree.EMPTY;
        }
        const reverse = reverseOrder || false;
        const limit = rawLimit !== undefined && rawLimit !== null ? Math.min(rawLimit, this.stats().totalRows) : this.stats().totalRows;
        const skip = rawSkip || 0;
        const maxCount = Math.min(Math.max(this.stats().totalRows - skip, 0), limit);
        if (maxCount === 0) {
            return BTree.EMPTY;
        }
        if (keyRanges === undefined
            || keyRanges.length === 1
                && keyRanges[0] instanceof SingleKeyRange
                && keyRanges[0].isAll()) {
            return this.getAll(maxCount, reverse, limit, skip);
        }
        const sortedKeyRanges = this.comparator().sortKeyRanges(keyRanges);
        // TODO(arthurhsu): Currently we did not traverse in reverse order so that
        //     the results array needs to be maxCount. Need further optimization.
        const results = new Array(reverse ? this.stats().totalRows : maxCount);
        const params = {
            "count": 0,
            "limit": results.length,
            "reverse": reverse,
            "skip": skip
        };
        // For all cross-column indices, use filter to handle non-continuous blocks.
        const useFilter = this.comparator().keyDimensions() > 1;
        sortedKeyRanges.forEach((range) => {
            const keys = this.comparator().rangeToKeys(range);
            const key = this.comparator().isLeftOpen(range) ? leftMostKey : keys[0];
            let start = this.root.getContainingLeaf(key);
            // Need to have two strikes to stop.
            // Reason: say the nodes are [12, 15], [16, 18], when look for >15,
            //         first node will return empty, but we shall not stop there.
            let strikeCount = 0;
            while (start !== undefined
                && start !== null
                && params.count < params.limit) {
                if (useFilter) {
                    start.getRangeWithFilter(range, params, results);
                }
                else {
                    start.getRange(range, params, results);
                }
                if (params.skip === 0
                    && !start.isFirstKeyInRange(range)) {
                    strikeCount++;
                }
                else {
                    strikeCount = 0;
                }
                start = strikeCount === 2 ? null : start.next;
            }
        }, this);
        if (results.length > params.count) {
            // There are extra elements in results, truncate them.
            results.splice(params.count, results.length - params.count);
        }
        return reverse ? IndexHelper.slice(results, reverse, limit, skip) : results;
    }
    clear() {
        this.root = BTreeNode.create(this);
        this.stats().clear();
    }
    containsKey(key) {
        return this.root.containsKey(key);
    }
    min() {
        return this.minMax(this.comparatorObj.min.bind(this.comparatorObj));
    }
    max() {
        return this.minMax(this.comparatorObj.max.bind(this.comparatorObj));
    }
    isUniqueKey() {
        return this.uniqueKeyOnly;
    }
    comparator() {
        return this.comparatorObj;
    }
    eq(lhs, rhs) {
        if (lhs !== undefined && lhs !== null) {
            return this.comparator().compare(lhs, rhs) === Favor.TIE;
        }
        return false;
    }
    // Converts the tree leaves into serializable rows that can be written into
    // persistent stores. Each leaf node is one row.
    serialize() {
        return BTreeNode.serialize(this.root.getLeftMostNode());
    }
    // Special optimization for get all values.
    // |maxCount|: max possible number of rows
    // |reverse|: retrieve the results in the reverse ordering of the comparator.
    getAll(maxCount, reverse, limit, skip) {
        const off = reverse ? this.stats().totalRows - maxCount - skip : skip;
        const results = new Array(maxCount);
        const params = {
            "count": maxCount,
            "offset": off,
            "startIndex": 0
        };
        this.root.fill(params, results);
        return reverse ? results.reverse() : results;
    }
    // If the first dimension of key is null, returns null, otherwise returns the
    // results for min()/max().
    checkNullKey(node, index) {
        if (!this.comparator().comparable(node.keys[index])) {
            if (Array.isArray(node.keys[index])) {
                if (node.keys[index][0] === null) {
                    return null;
                }
            }
            else {
                return null;
            }
        }
        return [
            node.keys[index],
            this.uniqueKeyOnly ? [node.values[index]] : node.values[index]
        ];
    }
    findLeftMost() {
        let node = this.root.getLeftMostNode();
        let index = 0;
        do {
            if (index >= node.keys.length) {
                node = node.next;
                index = 0;
                continue;
            }
            const results = this.checkNullKey(node, index);
            if (results !== null) {
                return results;
            }
            index++;
        } while (node !== null);
        return null;
    }
    findRightMost() {
        let node = this.root.getRightMostNode();
        let index = node.keys.length - 1;
        do {
            if (index < 0) {
                node = node.prev;
                index = 0;
                continue;
            }
            const results = this.checkNullKey(node, index);
            if (results !== null) {
                return results;
            }
            index--;
        } while (node !== null);
        return null;
    }
    minMax(compareFn) {
        const leftMost = this.findLeftMost();
        const rightMost = this.findRightMost();
        if (leftMost === null || rightMost === null) {
            return null;
        }
        return compareFn(leftMost[0], rightMost[0]) === Favor.LHS ? leftMost : rightMost;
    }
}
BTree.EMPTY = [];
class BTreeNode {
    constructor(id, tree) {
        this.id = id;
        this.tree = tree;
        this.height = 0;
        this.parent = null;
        this.prev = null;
        this.next = null;
        this.keys = [];
        this.values = [];
        this.children = [];
        this.getContainingLeaf = tree.comparator().keyDimensions() === 1 ? this.getContainingLeafSingleKey : this.getContainingLeafMultiKey;
    }
    static create(tree) {
        // TODO(arthurhsu): Should distinguish internal nodes from leaf nodes to
        // avoid unnecessary row id wasting.
        return new BTreeNode(Row.getNextId(), tree);
    }
    static serialize(start) {
        const rows = [];
        let node = start;
        while (node) {
            const payload = {
                "k": node.keys,
                "v": node.values
            };
            rows.push(new Row(node.id, payload));
            node = node.next;
        }
        return rows;
    }
    // Create B-Tree from sorted array of key-value pairs
    static fromData(tree, data) {
        let max = BTreeNode.MAX_KEY_LEN;
        max = max * max * max;
        if (data.length >= max) {
            // Tree has more than three levels, need to use a bigger N!
            // 6: Too many rows: B-Tree implementation supports at most {0} rows.
            throw new Exception(ErrorCode.TOO_MANY_ROWS, max.toString());
        }
        let node = BTreeNode.createLeaves(tree, data);
        node = BTreeNode.createInternals(node);
        return node;
    }
    // Dump the contents of node of the same depth.
    // |node| is the left-most in the level.
    // Returns key and contents string in pair.
    static dumpLevel(node) {
        let key = `${node.id}[${node.keys.join("|")}]`;
        const children = node.children.map((n) => n.id).join("|");
        const values = node.values.join("/");
        const getNodeId = (n) => {
            return n !== null && n !== undefined ? n.id.toString() : "_";
        };
        let contents = getNodeId(node.prev) + "{";
        contents += node.isLeaf() ? values : children;
        contents = contents + "}" + getNodeId(node.parent);
        if (node.next) {
            const next = BTreeNode.dumpLevel(node.next);
            key = key + "  " + next[0];
            contents = contents + "  " + next[1];
        }
        return [key, contents];
    }
    static associate(left, right) {
        if (right) {
            right.prev = left;
        }
        if (left) {
            left.next = right;
        }
    }
    // Returns appropriate node length for direct construction.
    static calcNodeLen(remaining) {
        const maxLen = BTreeNode.MAX_KEY_LEN;
        const minLen = BTreeNode.MIN_KEY_LEN + 1;
        return remaining >= maxLen + minLen ? maxLen : remaining >= minLen && remaining <= maxLen ? remaining : minLen;
    }
    // Create leaf nodes from given data.
    static createLeaves(tree, data) {
        let remaining = data.length;
        let dataIndex = 0;
        let curNode = BTreeNode.create(tree);
        const node = curNode;
        while (remaining > 0) {
            const nodeLen = BTreeNode.calcNodeLen(remaining);
            const target = data.slice(dataIndex, dataIndex + nodeLen);
            curNode.keys = target.map((e) => e.key);
            curNode.values = target.map((e) => e.value);
            dataIndex += nodeLen;
            remaining -= nodeLen;
            if (remaining > 0) {
                const newNode = BTreeNode.create(curNode.tree);
                BTreeNode.associate(curNode, newNode);
                curNode = newNode;
            }
        }
        return node;
    }
    // Create parent node from children nodes.
    static createParent(nodes) {
        const node = nodes[0];
        const root = BTreeNode.create(node.tree);
        root.height = node.height + 1;
        root.children = nodes;
        nodes.forEach((n, i) => {
            n.parent = root;
            if (i > 0) {
                root.keys.push(n.keys[0]);
            }
        });
        return root;
    }
    // Create BTree from left-most leaf node.
    static createInternals(node) {
        let curNode = node;
        const data = [];
        do {
            data.push(curNode);
            curNode = curNode.next;
        } while (curNode);
        let root;
        if (data.length <= BTreeNode.MAX_KEY_LEN + 1) {
            // Create a root node and return.
            root = BTreeNode.createParent(data);
        }
        else {
            let remaining = data.length;
            let dataIndex = 0;
            root = BTreeNode.create(node.tree);
            root.height = node.height + 2;
            while (remaining > 0) {
                const nodeLen = BTreeNode.calcNodeLen(remaining);
                const target = data.slice(dataIndex, dataIndex + nodeLen);
                const newNode = BTreeNode.createParent(target);
                newNode.parent = root;
                if (root.children.length) {
                    root.keys.push(target[0].keys[0]);
                    BTreeNode.associate(root.children[root.children.length - 1], newNode);
                }
                root.children.push(newNode);
                dataIndex += nodeLen;
                remaining -= nodeLen;
            }
        }
        return root;
    }
    // Returns left most key of the subtree.
    static leftMostKey(node) {
        return node.isLeaf() ? node.keys[0] : BTreeNode.leftMostKey(node.children[0]);
    }
    // Dump the tree as string. For example, if the tree is
    //
    //                     15
    //          /                      \
    //        9|13                   27|31
    //  /      |       \        /      |      \
    // 1|3  9|10|11  13|14    15|16  27|29  31|38|45
    //
    // and the values of the tree are identical to the keys, then the output will
    // be
    //
    // 11[15]
    // {2|12}
    // 2[9|13]  12[27|31]
    // {0|15|1}11  2{17|5|7}11
    // 0[1|3]  15[9|10|11]  1[13|14]  17[15|16]  5[27|29]  7[31|38|45]
    // {1/3}2  0{9/10/11}2  15{13/14}2  1{15/16}12  17{27/29}12  5{31/38/45}12
    //
    // Each tree level contains two lines, the first line is the key line
    // containing keys of each node in the format of
    // <node_id>[<key0>|<key1>|...|<keyN-1>]. The second line is the value line
    // containing values of each node in the format of
    // <left_node_id>[<value0>|<value1>|...|<valueN>]<parent_node_id>. The root
    // node does not have parent so its parent node id is denoted as underscore.
    //
    // Nodes in each level is a doubly-linked list therefore BFS traversal from
    // left-most to right-most is used. As a result, if the right link is
    // broken, the result will be partial.
    toString() {
        let result = "";
        const level = BTreeNode.dumpLevel(this);
        result += level[0] + "\n" + level[1] + "\n";
        if (this.children.length) {
            result += this.children[0].toString();
        }
        return result;
    }
    getLeftMostNode() {
        return this.isLeaf() ? this : this.children[0].getLeftMostNode();
    }
    getRightMostNode() {
        return this.isLeaf() ? this : this.children[this.children.length - 1].getRightMostNode();
    }
    get(key) {
        let pos = this.searchKey(key);
        if (this.isLeaf()) {
            let results = BTree.EMPTY;
            if (this.tree.eq(this.keys[pos], key)) {
                // Use concat here because this.values[pos] can be number or array.
                results = results.concat(this.values[pos]);
            }
            return results;
        }
        else {
            pos = this.tree.eq(this.keys[pos], key) ? pos + 1 : pos;
            return this.children[pos].get(key);
        }
    }
    containsKey(key) {
        const pos = this.searchKey(key);
        if (this.tree.eq(this.keys[pos], key)) {
            return true;
        }
        return this.isLeaf() ? false : this.children[pos].containsKey(key);
    }
    // Deletes a node and returns (new) root node after deletion.
    remove(key, value) {
        this.delete(key, -1, value);
        if (this.isRoot()) {
            let root = this;
            if (this.children.length === 1) {
                root = this.children[0];
                root.parent = null;
            }
            return root;
        }
        return this;
    }
    // Insert node into this subtree. Returns new root if any.
    // |replace| means to replace the value if key existed.
    insert(key, value, replace = false) {
        let pos = this.searchKey(key);
        if (this.isLeaf()) {
            if (this.tree.eq(this.keys[pos], key)) {
                if (replace) {
                    this.tree
                        .stats()
                        .remove(key, this.tree.isUniqueKey() ? 1 : this.values[pos].length);
                    this.values[pos] = this.tree.isUniqueKey() ? value : [value];
                }
                else if (this.tree.isUniqueKey()) {
                    // 201: Duplicate keys are not allowed.
                    throw new Exception(ErrorCode.DUPLICATE_KEYS, this.tree.getName(), JSON.stringify(key));
                }
                else {
                    // Non-unique key that already existed.
                    if (!ArrayHelper.binaryInsert(this.values[pos], value)) {
                        // 109: Attempt to insert a row number that already existed.
                        throw new Exception(ErrorCode.ROW_ID_EXISTED);
                    }
                }
                this.tree.stats().add(key, 1);
                return this;
            }
            this.keys.splice(pos, 0, key);
            this.values.splice(pos, 0, this.tree.isUniqueKey() ? value : [value]);
            this.tree.stats().add(key, 1);
            return this.keys.length === BTreeNode.MAX_COUNT ? this.splitLeaf() : this;
        }
        else {
            pos = this.tree.eq(this.keys[pos], key) ? pos + 1 : pos;
            const node = this.children[pos].insert(key, value, replace);
            if (!node.isLeaf() && node.keys.length === 1) {
                // Merge the internal to se
                this.keys.splice(pos, 0, node.keys[0]);
                node.children[1].parent = this;
                node.children[0].parent = this;
                this.children.splice(pos, 1, node.children[1]);
                this.children.splice(pos, 0, node.children[0]);
            }
            return this.keys.length === BTreeNode.MAX_COUNT ? this.splitInternal() : this;
        }
    }
    // The API signature of this function is specially crafted for performance
    // optimization. Perf results showed that creation of empty array erodes the
    // benefit of indexing significantly (in some cases >50%). As a result, it
    // is required to pass in the results array.
    getRange(keyRange, params, results) {
        const c = this.tree.comparator();
        let left = 0;
        let right = this.keys.length - 1;
        // Position of range relative to the key.
        const compare = (coverage) => {
            return coverage[0] ? coverage[1] ? Favor.TIE : Favor.LHS : Favor.RHS;
        };
        const keys = this.keys; // Used to avoid binding this for recursive functions.
        const favorLeft = compare(c.compareRange(keys[left], keyRange));
        const favorRight = compare(c.compareRange(keys[right], keyRange));
        // Range is on the left of left most key or right of right most key.
        if (favorLeft === Favor.LHS
            || favorLeft === Favor.RHS && favorRight === Favor.RHS) {
            return;
        }
        const getMidPoint = (l, r) => {
            const mid = l + r >> 1;
            return mid === l ? mid + 1 : mid;
        };
        // Find the first key that is in range. Returns index of the key, -1 if
        // not found. |favorR| is Favor of right.
        const findFirstKey = (l, r, favorR) => {
            if (l >= r) {
                return favorR === Favor.TIE ? r : -1;
            }
            const favorL = compare(c.compareRange(keys[l], keyRange));
            if (favorL === Favor.TIE) {
                return l;
            }
            else if (favorL === Favor.LHS) {
                return -1; // Shall not be here.
            }
            const mid = getMidPoint(l, r);
            if (mid === r) {
                return favorR === Favor.TIE ? r : -1;
            }
            const favorM = compare(c.compareRange(keys[mid], keyRange));
            if (favorM === Favor.TIE) {
                return findFirstKey(l, mid, favorM);
            }
            else if (favorM === Favor.RHS) {
                return findFirstKey(mid + 1, r, favorR);
            }
            else {
                return findFirstKey(l + 1, mid, favorM);
            }
        };
        // Find the last key that is in range. Returns index of the key, -1 if
        // not found.
        const findLastKey = (l, r) => {
            if (l >= r) {
                return l;
            }
            const favorR = compare(c.compareRange(keys[r], keyRange));
            if (favorR === Favor.TIE) {
                return r;
            }
            else if (favorR === Favor.RHS) {
                return l;
            }
            const mid = getMidPoint(l, r);
            if (mid === r) {
                return l;
            }
            const favorM = compare(c.compareRange(keys[mid], keyRange));
            if (favorM === Favor.TIE) {
                return findLastKey(mid, r);
            }
            else if (favorM === Favor.LHS) {
                return findLastKey(l, mid - 1);
            }
            else {
                return -1; // Shall not be here.
            }
        };
        if (favorLeft !== Favor.TIE) {
            left = findFirstKey(left + 1, right, favorRight);
        }
        if (left !== -1) {
            right = findLastKey(left, right);
            if (right !== -1 && right >= left) {
                this.appendResults(params, results, left, right + 1);
            }
        }
    }
    // Loops through all keys and check if key is in the given range. If so push
    // the values into results. This method is slower than the getRange() by
    // design and should be used only in the case of cross-column nullable
    // indices.
    // TODO(arthurhsu): remove this method when GridFile is implemented.
    //
    // |results| can be an empty array, or an array holding any results from
    // previous calls to getRangeWithFilter().
    getRangeWithFilter(keyRange, params, results) {
        const c = this.tree.comparator();
        let start = -1;
        // Find initial pos
        for (let i = 0; i < this.keys.length; ++i) {
            if (c.isInRange(this.keys[i], keyRange)) {
                start = i;
                break;
            }
        }
        if (start === -1) {
            return;
        }
        for (let i = start; i < this.keys.length && params.count < params.limit; ++i) {
            if (!c.isInRange(this.keys[i], keyRange)) {
                continue;
            }
            this.appendResultsAt(params, results, i);
        }
    }
    // Special optimization for appending results. For performance reasons, the
    // parameters of this function are passed by reference.
    // |params| offset means number of rows to skip, count means remaining number
    // of rows to fill, and startIndex is the start index of results for filling.
    fill(params, results) {
        if (this.isLeaf()) {
            for (let i = 0; i < this.values.length && params.count > 0; ++i) {
                const val = this.values[i];
                if (params.offset > 0) {
                    params.offset -= !this.tree.isUniqueKey() ? val.length : 1;
                    if (params.offset < 0) {
                        for (let j = val.length + params.offset; j < val.length && params.count > 0; ++j) {
                            results[params.startIndex++] = val[j];
                            params.count--;
                        }
                    }
                    continue;
                }
                if (this.tree.isUniqueKey()) {
                    results[params.startIndex++] = this.values[i];
                    params.count--;
                }
                else {
                    for (let j = 0; j < val.length && params.count > 0; ++j) {
                        results[params.startIndex++] = val[j];
                        params.count--;
                    }
                }
            }
        }
        else {
            for (let i = 0; i < this.children.length && params.count > 0; ++i) {
                this.children[i].fill(params, results);
            }
        }
    }
    isFirstKeyInRange(range) {
        return this.tree.comparator().isFirstKeyInRange(this.keys[0], range);
    }
    isLeaf() {
        return this.height === 0;
    }
    isRoot() {
        return this.parent === null;
    }
    // Reconstructs internal node keys.
    fix() {
        this.keys = [];
        for (let i = 1; i < this.children.length; ++i) {
            this.keys.push(BTreeNode.leftMostKey(this.children[i]));
        }
    }
    // Deletes a key from a given node. If the key length is smaller than
    // required, execute the following operations according to order:
    // 1. Steal a key from right sibling, if there is one with key > N/2
    // 2. Steal a key from left sibling, if there is one with key > N/2
    // 3. Merge to right sibling, if any
    // 4. Merge to left sibling, if any
    //
    // When stealing and merging happens on internal nodes, the key array of that
    // node will be obsolete and need to be reconstructed by fix().
    //
    // @param {!index.Index.Key} key
    // @param {number} parentPos Position of this node in parent's children.
    // @param {number=} value Match the value to delete.
    // @return {boolean} Whether a fix is needed or not.
    // @private
    delete(key, parentPos, value) {
        const pos = this.searchKey(key);
        const isLeaf = this.isLeaf();
        if (!isLeaf) {
            const index = this.tree.eq(this.keys[pos], key) ? pos + 1 : pos;
            if (this.children[index].delete(key, index, value)) {
                this.fix();
            }
            else {
                return false;
            }
        }
        else if (!this.tree.eq(this.keys[pos], key)) {
            return false;
        }
        if (this.keys.length > pos && this.tree.eq(this.keys[pos], key)) {
            if (value !== undefined && !this.tree.isUniqueKey() && isLeaf) {
                if (ArrayHelper.binaryRemove(this.values[pos], value)) {
                    this.tree.stats().remove(key, 1);
                }
                const len = this.values[pos].length;
                if (len) {
                    return false; // No need to fix.
                }
            }
            this.keys.splice(pos, 1);
            if (isLeaf) {
                const removedLength = this.tree.isUniqueKey() ? 1 : this.values[pos].length;
                this.values.splice(pos, 1);
                this.tree.stats().remove(key, removedLength);
            }
        }
        if (this.keys.length < BTreeNode.MIN_KEY_LEN && !this.isRoot()) {
            if (!this.steal()) {
                this.merge(parentPos);
            }
            return true;
        }
        return true;
    }
    // Steals key from adjacent nodes.
    steal() {
        let from = null;
        let fromIndex;
        let fromChildIndex;
        let toIndex;
        if (this.next && this.next.keys.length > BTreeNode.MIN_KEY_LEN) {
            from = this.next;
            fromIndex = 0;
            fromChildIndex = 0;
            toIndex = this.keys.length + 1;
        }
        else if (this.prev && this.prev.keys.length > BTreeNode.MIN_KEY_LEN) {
            from = this.prev;
            fromIndex = this.prev.keys.length - 1;
            fromChildIndex = this.isLeaf() ? fromIndex : fromIndex + 1;
            toIndex = 0;
        }
        else {
            return false;
        }
        this.keys.splice(toIndex, 0, from.keys[fromIndex]);
        from.keys.splice(fromIndex, 1);
        const child = this.isLeaf() ? this.values : this.children;
        let fromChild = null;
        if (this.isLeaf()) {
            fromChild = from.values;
        }
        else {
            fromChild = from.children;
            fromChild[fromChildIndex].parent = this;
        }
        child.splice(toIndex, 0, fromChild[fromChildIndex]);
        fromChild.splice(fromChildIndex, 1);
        if (!from.isLeaf()) {
            from.fix();
            this.fix();
        }
        return true;
    }
    // Merges with adjacent nodes.
    // |parentPos| indicates this node's position in parent's children.
    merge(parentPos) {
        let mergeTo;
        let keyOffset;
        let childOffset;
        if (this.next && this.next.keys.length < BTreeNode.MAX_KEY_LEN) {
            mergeTo = this.next;
            keyOffset = 0;
            childOffset = 0;
        }
        else if (this.prev) {
            mergeTo = this.prev;
            keyOffset = mergeTo.keys.length;
            childOffset = mergeTo.isLeaf() ? mergeTo.values.length : mergeTo.children.length;
        }
        else {
            throw new Exception(ErrorCode.ASSERTION);
        }
        mergeTo.keys.splice(keyOffset, 0, ...this.keys);
        let myChildren = null;
        if (this.isLeaf()) {
            myChildren = this.values;
        }
        else {
            myChildren = this.children;
            myChildren.forEach((node) => node.parent = mergeTo);
        }
        if (mergeTo.isLeaf()) {
            mergeTo.values.splice(childOffset, 0, ...myChildren);
        }
        else {
            mergeTo.children.splice(childOffset, 0, ...myChildren);
        }
        BTreeNode.associate(this.prev, this.next);
        if (!mergeTo.isLeaf()) {
            mergeTo.fix();
        }
        if (parentPos !== -1) {
            this.parent.keys.splice(parentPos, 1);
            this.parent.children.splice(parentPos, 1);
        }
    }
    // Split leaf node into two nodes, returns the split internal node.
    splitLeaf() {
        const half = BTreeNode.MIN_KEY_LEN;
        const right = BTreeNode.create(this.tree);
        const root = BTreeNode.create(this.tree);
        root.height = 1;
        root.keys = [this.keys[half]];
        root.children = [this, right];
        root.parent = this.parent;
        this.parent = root;
        right.keys = this.keys.splice(half);
        right.values = this.values.splice(half);
        right.parent = root;
        BTreeNode.associate(right, this.next);
        BTreeNode.associate(this, right);
        return root;
    }
    // Split internal node into two nodes, returns the split internal node.
    splitInternal() {
        const half = BTreeNode.MIN_KEY_LEN;
        const root = BTreeNode.create(this.tree);
        const right = BTreeNode.create(this.tree);
        root.parent = this.parent;
        root.height = this.height + 1;
        root.keys = [this.keys[half]];
        root.children = [this, right];
        this.keys.splice(half, 1);
        right.parent = root;
        right.height = this.height;
        right.keys = this.keys.splice(half);
        right.children = this.children.splice(half + 1);
        right.children.forEach((node) => node.parent = right);
        this.parent = root;
        BTreeNode.associate(right, this.next);
        BTreeNode.associate(this, right);
        return root;
    }
    // Returns the position where the key is the closest smaller or equals to.
    searchKey(key) {
        // Binary search.
        let left = 0;
        let right = this.keys.length;
        const c = this.tree.comparator();
        while (left < right) {
            const middle = left + right >> 1;
            if (c.compare(this.keys[middle], key) === Favor.RHS) {
                left = middle + 1;
            }
            else {
                right = middle;
            }
        }
        return left;
    }
    getContainingLeafSingleKey(key) {
        if (!this.isLeaf()) {
            let pos = this.searchKey(key);
            if (this.tree.eq(this.keys[pos], key)) {
                pos++;
            }
            return this.children[pos].getContainingLeaf(key);
        }
        return this;
    }
    getContainingLeafMultiKey(key) {
        if (!this.isLeaf()) {
            let pos = this.searchKey(key);
            if (this.tree.eq(this.keys[pos], key)) {
                // Note the multi-key comparator will return TIE if compared with an
                // unbounded key. As a result, we need to check if any dimension of the
                // key contains unbound.
                const hasUnbound = key.some((dimension) => dimension === SingleKeyRange.UNBOUND_VALUE);
                if (!hasUnbound) {
                    pos++;
                }
            }
            return this.children[pos].getContainingLeafMultiKey(key);
        }
        return this;
    }
    // Appends newly found results to an existing bag of results. For performance
    // reasons, parameters are passed by reference.
    // |params| count is number of filled elements in the results array; limit
    // means max number to fill in the results; reverse means the request is
    // for reverse ordering; skip means remaining skip count.
    appendResultsAt(params, results, i) {
        if (this.tree.isUniqueKey()) {
            if (!params.reverse && params.skip) {
                params.skip--;
                return;
            }
            results[params.count++] = this.values[i];
        }
        else {
            const val = this.values[i];
            for (let j = 0; j < val.length && params.count < results.length; ++j) {
                if (!params.reverse && params.skip) {
                    params.skip--;
                    continue;
                }
                results[params.count++] = val[j];
            }
        }
    }
    // Appends newly found results to an existing bag of results. For performance
    // reasons, parameters are passed by reference.
    // |params| count is number of filled elements in the results array; limit
    // means max number to fill in the results; reverse means the request is
    // for reverse ordering; skip means remaining skip count.
    appendResults(params, results, from, to) {
        for (let i = from; i < to; ++i) {
            if (!params.reverse && params.count >= params.limit) {
                return;
            }
            this.appendResultsAt(params, results, i);
        }
    }
}
// Maximum number of children a node can have (i.e. order of the B-Tree,
// denoted as N in the following comments). This number must be greater or
// equals to 4 for the implemented deletion algorithm to function correctly.
BTreeNode.MAX_COUNT = 512;
BTreeNode.MAX_KEY_LEN = BTreeNode.MAX_COUNT - 1;
BTreeNode.MIN_KEY_LEN = BTreeNode.MAX_COUNT >> 1;
class SimpleComparator {
    constructor(order) {
        this.compareFn = order === Order.DESC ? SimpleComparator.compareDescending : SimpleComparator.compareAscending;
        this.normalizeKeyRange = order === Order.DESC ? (keyRange) => {
            return keyRange !== undefined && keyRange !== null ? keyRange.reverse() : null;
        } : (keyRange) => keyRange || null;
        this.orderRange = order === Order.DESC ? SimpleComparator.orderRangeDescending : SimpleComparator.orderRangeAscending;
    }
    static compareAscending(lhs, rhs) {
        return lhs > rhs ? Favor.LHS : lhs < rhs ? Favor.RHS : Favor.TIE;
    }
    static compareDescending(lhs, rhs) {
        return SimpleComparator.compareAscending(rhs, lhs);
    }
    static orderRangeAscending(lhs, rhs) {
        return SingleKeyRange.compare(lhs, rhs);
    }
    static orderRangeDescending(lhs, rhs) {
        return SingleKeyRange.compare(rhs, lhs);
    }
    // Checks if the range covers "left" or "right" of the key (inclusive).
    // For example:
    //
    // key is 2, comparator ASC
    //
    // |-----|-----X-----|-----|
    // 0     1     2     3     4
    //
    // range [0, 4] and [2, 2] cover both left and right, so return [true, true].
    // range [0, 2) covers only left, return [true, false].
    // range (2, 0] covers only right, return [false, true].
    compareRange(key, naturalRange) {
        const LEFT = 0;
        const RIGHT = 1;
        const range = this.normalizeKeyRange(naturalRange);
        const results = [
            SingleKeyRange.isUnbound(range.from),
            SingleKeyRange.isUnbound(range.to)
        ];
        if (!results[LEFT]) {
            const favor = this.compareFn(key, range.from);
            results[LEFT] = range.excludeLower ? favor === Favor.LHS : favor !== Favor.RHS;
        }
        if (!results[RIGHT]) {
            const favor = this.compareFn(key, range.to);
            results[RIGHT] = range.excludeUpper ? favor === Favor.RHS : favor !== Favor.LHS;
        }
        return results;
    }
    compare(lhs, rhs) {
        return this.compareFn(lhs, rhs);
    }
    min(lhs, rhs) {
        return lhs < rhs ? Favor.LHS : lhs === rhs ? Favor.TIE : Favor.RHS;
    }
    max(lhs, rhs) {
        return lhs > rhs ? Favor.LHS : lhs === rhs ? Favor.TIE : Favor.RHS;
    }
    isInRange(key, range) {
        const results = this.compareRange(key, range);
        return results[0] && results[1];
    }
    isFirstKeyInRange(key, range) {
        return this.isInRange(key, range);
    }
    getAllRange() {
        return SingleKeyRange.all();
    }
    orderKeyRange(lhs, rhs) {
        return this.orderRange(lhs, rhs);
    }
    sortKeyRanges(keyRanges) {
        return keyRanges
            .filter((range) => range !== null)
            .sort((lhs, rhs) => this.orderKeyRange(lhs, rhs));
    }
    isLeftOpen(range) {
        return SingleKeyRange.isUnbound(this.normalizeKeyRange(range).from);
    }
    rangeToKeys(naturalRange) {
        const range = this.normalizeKeyRange(naturalRange);
        return [range.from, range.to];
    }
    comparable(key) {
        return key !== null;
    }
    keyDimensions() {
        return 1;
    }
    toString() {
        return this.compare === SimpleComparator.compareDescending ? "SimpleComparator_DESC" : "SimpleComparator_ASC";
    }
}
class MultiKeyComparator {
    constructor(orders) {
        this.comparators = orders.map((order) => new SimpleComparator(order));
    }
    compare(lk, rk) {
        const lhs = lk;
        const rhs = rk;
        return this.forEach(lhs, rhs, (c, l, r) => {
            return l === SingleKeyRange.UNBOUND_VALUE
                || r === SingleKeyRange.UNBOUND_VALUE ? Favor.TIE : c.compare(l, r);
        });
    }
    min(lk, rk) {
        const lhs = lk;
        const rhs = rk;
        return this.forEach(lhs, rhs, (c, l, r) => c.min(l, r));
    }
    max(lk, rk) {
        const lhs = lk;
        const rhs = rk;
        return this.forEach(lhs, rhs, (c, l, r) => c.max(l, r));
    }
    compareRange(k, range) {
        const key = k;
        const results = [true, true];
        for (let i = 0; i < this.comparators.length && (results[0] || results[1]); ++i) {
            const dimensionResults = this.comparators[i].compareRange(key[i], range[i]);
            results[0] = results[0] && dimensionResults[0];
            results[1] = results[1] && dimensionResults[1];
        }
        return results;
    }
    isInRange(k, range) {
        const key = k;
        let isInRange = true;
        for (let i = 0; i < this.comparators.length && isInRange; ++i) {
            isInRange = this.comparators[i].isInRange(key[i], range[i]);
        }
        return isInRange;
    }
    isFirstKeyInRange(k, range) {
        const key = k;
        return this.comparators[0].isInRange(key[0], range[0]);
    }
    getAllRange() {
        return this.comparators.map((c) => c.getAllRange());
    }
    sortKeyRanges(keyRanges) {
        const outputKeyRanges = keyRanges.filter((range) => {
            return range.every((r) => r !== undefined && r !== null);
        });
        // Ranges are in the format of
        // [[dim0_range0, dim1_range0, ...], [dim0_range1, dim1_range1, ...], ...]
        // Reorganize the array to
        // [[dim0_range0, dim0_range1, ...], [dim1_range0, dim1_range1, ...], ...]
        const keysPerDimensions = new Array(this.comparators.length);
        for (let i = 0; i < keysPerDimensions.length; i++) {
            keysPerDimensions[i] = outputKeyRanges.map((range) => range[i]);
        }
        // Sort ranges per dimension.
        keysPerDimensions.forEach((keys, i) => {
            keys.sort((lhs, rhs) => {
                return this.comparators[i].orderKeyRange(lhs, rhs);
            });
        }, this);
        // Swapping back to original key range format. This time the new ranges
        // are properly aligned from left to right in each dimension.
        const finalKeyRanges = new Array(outputKeyRanges.length);
        for (let i = 0; i < finalKeyRanges.length; i++) {
            finalKeyRanges[i] = keysPerDimensions.map((keys) => keys[i]);
        }
        // Perform another sorting to properly arrange order of ranges with either
        // excludeLower or excludeUpper.
        return finalKeyRanges.sort((lhs, rhs) => {
            let favor = Favor.TIE;
            for (let i = 0; i < this.comparators.length && favor === Favor.TIE; ++i) {
                favor = this.comparators[i].orderKeyRange(lhs[i], rhs[i]);
            }
            return favor;
        });
    }
    isLeftOpen(range) {
        return this.comparators[0].isLeftOpen(range[0]);
    }
    rangeToKeys(keyRange) {
        const startKey = keyRange.map((range, i) => this.comparators[i].rangeToKeys(range)[0]);
        const endKey = keyRange.map((range, i) => this.comparators[i].rangeToKeys(range)[1]);
        return [startKey, endKey];
    }
    comparable(key) {
        return key.every((keyDimension, i) => this.comparators[i].comparable(keyDimension));
    }
    keyDimensions() {
        return this.comparators.length;
    }
    forEach(lhs, rhs, fn) {
        let favor = Favor.TIE;
        for (let i = 0; i < this.comparators.length && favor === Favor.TIE; ++i) {
            favor = fn(this.comparators[i], lhs[i], rhs[i]);
        }
        return favor;
    }
}
// This comparator is not used to replace existing NullableIndex wrapper
// because of its compareAscending function requires extra null key
// checking every time, where the wrapper does it only once. This resulted in
// performance difference and therefore the NullableIndex is kept.
class SimpleComparatorWithNull extends SimpleComparator {
    static compareAscending(lhs, rhs) {
        if (lhs === null) {
            return rhs === null ? Favor.TIE : Favor.RHS;
        }
        return rhs === null ? Favor.LHS : SimpleComparator.compareAscending(lhs, rhs);
    }
    static compareDescending(lhs, rhs) {
        return SimpleComparatorWithNull.compareAscending(rhs, lhs);
    }
    constructor(order) {
        super(order);
        this.compareFn = order === Order.DESC ? SimpleComparatorWithNull.compareDescending : SimpleComparatorWithNull.compareAscending;
    }
    isInRange(key, range) {
        return key === null ? range.isAll() : super.isInRange(key, range);
    }
    min(lhs, rhs) {
        const results = this.minMax(lhs, rhs);
        return results === null ? super.min(lhs, rhs) : results;
    }
    max(lhs, rhs) {
        const results = this.minMax(lhs, rhs);
        return results === null ? super.max(lhs, rhs) : results;
    }
    minMax(lhs, rhs) {
        if (lhs === null) {
            return rhs === null ? Favor.TIE : Favor.RHS;
        }
        return rhs === null ? Favor.LHS : null;
    }
}
class MultiKeyComparatorWithNull extends MultiKeyComparator {
    constructor(orders) {
        super(orders);
        this.comparators = orders.map((order) => {
            return new SimpleComparatorWithNull(order);
        });
    }
}
class ComparatorFactory {
    static create(indexSchema) {
        if (indexSchema.columns.length === 1) {
            return new SimpleComparator(indexSchema.columns[0].order);
        }
        const orders = indexSchema.columns.map((col) => col.order);
        const nullable = indexSchema.columns.some((col) => col.schema.isNullable());
        return nullable ? new MultiKeyComparatorWithNull(orders) : new MultiKeyComparator(orders);
    }
}
// Wraps another index which does not support NULL to accept NULL values.
class NullableIndex {
    constructor(index) {
        this.index = index;
        this.nulls = new Set();
        this.statsNull = new IndexStats();
        this.statsObj = new IndexStats();
    }
    getName() {
        return this.index.getName();
    }
    add(key, value) {
        if (key === null) {
            // Note: Nullable index allows multiple nullable keys even if it is marked
            // as unique. This is matching the behavior of other SQL engines.
            this.nulls.add(value);
            this.statsNull.add(key, 1);
        }
        else {
            this.index.add(key, value);
        }
    }
    set(key, value) {
        if (key === null) {
            this.nulls.clear();
            this.statsNull.clear();
            this.add(key, value);
        }
        else {
            this.index.set(key, value);
        }
    }
    remove(key, rowId) {
        if (key === null) {
            if (rowId) {
                this.nulls.delete(rowId);
                this.statsNull.remove(key, 1);
            }
            else {
                this.nulls.clear();
                this.statsNull.clear();
            }
        }
        else {
            this.index.remove(key, rowId);
        }
    }
    get(key) {
        if (key === null) {
            return Array.from(this.nulls.values());
        }
        else {
            return this.index.get(key);
        }
    }
    min() {
        return this.index.min();
    }
    max() {
        return this.index.max();
    }
    cost(keyRange) {
        return this.index.cost(keyRange);
    }
    getRange(range, reverseOrder, limit, skip) {
        const results = this.index.getRange(range, reverseOrder, limit, skip);
        if (range !== undefined && range !== null) {
            return results;
        }
        return results.concat(Array.from(this.nulls.values()));
    }
    clear() {
        this.nulls.clear();
        this.index.clear();
    }
    containsKey(key) {
        return key === null ? this.nulls.size !== 0 : this.index.containsKey(key);
    }
    serialize() {
        const rows = [
            new Row(NullableIndex.NULL_ROW_ID, {
                "v": Array.from(this.nulls.values())
            })
        ];
        return rows.concat(this.index.serialize());
    }
    comparator() {
        return this.index.comparator();
    }
    isUniqueKey() {
        return this.index.isUniqueKey();
    }
    stats() {
        this.statsObj.updateFromList([this.index.stats(), this.statsNull]);
        return this.statsObj;
    }
}
NullableIndex.NULL_ROW_ID = -2;
// This is actually the row id set for a given table, but in the form of
// RuntimeIndex.
class RowId {
    constructor(name) {
        this.name = name;
        this.rows = new Set();
        this.comparatorObj = new SimpleComparator(Order.ASC);
    }
    getName() {
        return this.name;
    }
    add(key, value) {
        if (typeof key !== "number") {
            // 103: Row id must be numbers.
            throw new Exception(ErrorCode.INVALID_ROW_ID);
        }
        this.rows.add(key);
    }
    set(key, value) {
        this.add(key, value);
    }
    remove(key, rowId) {
        this.rows.delete(key);
    }
    get(key) {
        return this.containsKey(key) ? [key] : RowId.EMPTY_ARRAY;
    }
    min() {
        return this.minMax(this.comparatorObj.min.bind(this.comparatorObj));
    }
    max() {
        return this.minMax(this.comparatorObj.max.bind(this.comparatorObj));
    }
    cost(keyRange) {
        // Give the worst case so that this index is not used unless necessary.
        return this.rows.size;
    }
    getRange(range, reverseOrder, limit, skip) {
        const keyRanges = range || [
            SingleKeyRange.all()
        ];
        const values = Array.from(this.rows.values()).filter((value) => {
            return keyRanges.some((r) => this.comparatorObj.isInRange(value, r));
        }, this);
        return IndexHelper.slice(values, reverseOrder, limit, skip);
    }
    clear() {
        this.rows.clear();
    }
    containsKey(key) {
        return this.rows.has(key);
    }
    serialize() {
        return [new Row(RowId.ROW_ID, { "v": Array.from(this.rows.values()) })];
    }
    comparator() {
        return this.comparatorObj;
    }
    isUniqueKey() {
        return true;
    }
    stats() {
        const stats = new IndexStats();
        stats.totalRows = this.rows.size;
        return stats;
    }
    minMax(compareFn) {
        if (this.rows.size === 0) {
            return null;
        }
        const keys = Array.from(this.rows.values()).reduce((keySoFar, key) => {
            return keySoFar === null || compareFn(key, keySoFar) === Favor.LHS ? key : keySoFar;
        });
        return [keys, [keys]];
    }
}
// The Row ID to use when serializing this index to disk. Currently the entire
// index is serialized to a single lf.Row instance with rowId set to ROW_ID.
RowId.ROW_ID = 0;
RowId.EMPTY_ARRAY = [];
// In-memory index store that builds all indices at the time of init.
class MemoryIndexStore {
    constructor() {
        this.store = new Map();
        this.tableIndices = new Map();
    }
    init(schema) {
        const tables = schema.tables();
        tables.forEach((table) => {
            const tableIndices = [];
            this.tableIndices.set(table.getName(), tableIndices);
            const rowIdIndexName = table.getRowIdIndexName();
            const rowIdIndex = this.get(rowIdIndexName);
            if (rowIdIndex === null) {
                const index = new RowId(rowIdIndexName);
                tableIndices.push(index);
                this.store.set(rowIdIndexName, index);
            }
            table.getIndices().forEach((indexSchema) => {
                const index = this.createIndex(indexSchema);
                tableIndices.push(index);
                this.store.set(indexSchema.getNormalizedName(), index);
            }, this);
        }, this);
        return Promise.resolve();
    }
    get(name) {
        return this.store.get(name) || null;
    }
    set(tableName, index) {
        let tableIndices = this.tableIndices.get(tableName) || null;
        if (tableIndices === null) {
            tableIndices = [];
            this.tableIndices.set(tableName, tableIndices);
        }
        // Replace the index in-place in the array if such index already exists.
        let existsAt = -1;
        for (let i = 0; i < tableIndices.length; i++) {
            if (tableIndices[i].getName() === index.getName()) {
                existsAt = i;
                break;
            }
        }
        if (existsAt >= 0 && tableIndices.length > 0) {
            tableIndices.splice(existsAt, 1, index);
        }
        else {
            tableIndices.push(index);
        }
        this.store.set(index.getName(), index);
    }
    getTableIndices(tableName) {
        return this.tableIndices.get(tableName) || [];
    }
    createIndex(indexSchema) {
        const comparator = ComparatorFactory.create(indexSchema);
        const index = new BTree(indexSchema.getNormalizedName(), comparator, indexSchema.isUnique);
        return indexSchema.hasNullableColumn() && indexSchema.columns.length === 1 ? new NullableIndex(index) : index;
    }
}
class UserQueryTask extends QueryTask {
    constructor(backStore, schema, cache, indexStore, items) {
        super(backStore, schema, cache, indexStore, items);
    }
    getPriority() {
        return TaskPriority.USER_QUERY_TASK;
    }
}
class TreeHelper {
    // Creates a new tree with the exact same structure, where every node in the
    // tree has been replaced by a new node according to the mapping function.
    // This is equivalent to Array#map, but for a tree data structure.
    // Note: T1 and T2 are expected to be either lf.structs.TreeNode or subtypes
    // but there is no way to currently express that in JS compiler annotations.
    static map(origTree, mapFn) {
        // A stack storing nodes that will be used as parents later in the
        // traversal.
        const copyParentStack = [];
        // Removes a node from the parent stack, if that node has already reached
        // its target number of children.
        const cleanUpParentStack = (original, clone) => {
            if (original === null) {
                return;
            }
            const cloneFull = original.getChildCount() === clone.getChildCount();
            if (cloneFull) {
                const cloneIndex = copyParentStack.indexOf(clone);
                if (cloneIndex !== -1) {
                    copyParentStack.splice(cloneIndex, 1);
                }
            }
        };
        // The node that should become the parent of the next traversed node.
        let nextParent = null;
        let copyRoot = null;
        origTree.traverse((node) => {
            const newNode = mapFn(node);
            if (node.getParent() === null) {
                copyRoot = newNode;
            }
            else {
                nextParent.addChild(newNode);
            }
            cleanUpParentStack(node.getParent(), nextParent);
            if (node.getChildCount() > 1) {
                copyParentStack.push(newNode);
            }
            nextParent = node.isLeaf() ? copyParentStack[copyParentStack.length - 1] : newNode;
        });
        return copyRoot;
    }
    // Finds all leafs node existing in the subtree that starts at the given node.
    static getLeafNodes(node) {
        return TreeHelper.find(node, (n) => n.isLeaf());
    }
    // Removes a node from a tree. It takes care of re-parenting the children of
    // the removed node with its parent (if any).
    // Returns an object holding the parent of the node prior to removal (if any),
    // and the children of the node prior to removal.
    static removeNode(node) {
        const parentNode = node.getParent();
        let originalIndex = 0;
        if (parentNode !== null) {
            originalIndex = parentNode.getChildren().indexOf(node);
            parentNode.removeChild(node);
        }
        const children = node.getChildren().slice();
        children.forEach((child, index) => {
            node.removeChild(child);
            if (parentNode !== null) {
                parentNode.addChildAt(child, originalIndex + index);
            }
        });
        return {
            "children": children,
            "parent": parentNode
        };
    }
    // Inserts a new node under an existing node. The new node inherits all
    // children of the existing node, and the existing node ends up having only
    // the new node as a child. Example: Calling insertNodeAt(n2, n6) would result
    // in the following transformation.
    //
    //        n1              n1
    //       /  \            /  \
    //      n2  n5          n2  n5
    //     /  \      =>    /
    //    n3  n4          n6
    //                   /  \
    //                  n3  n4
    static insertNodeAt(existingNode, newNode) {
        const children = existingNode.getChildren().slice();
        children.forEach((child) => {
            existingNode.removeChild(child);
            newNode.addChild(child);
        });
        existingNode.addChild(newNode);
    }
    // Swaps a node with its only child. The child also needs to have exactly one
    // child.
    // Example: Calling swapNodeWithChild(n2) would result in the following
    // transformation.
    //
    //        n1              n1
    //       /  \            /  \
    //      n2   n6         n3  n6
    //     /         =>    /
    //    n3              n2
    //   /  \            /  \
    //  n4  n5          n4  n5
    //
    // Returns the new root of the subtree that used to start where "node" was
    // before swapping.
    static swapNodeWithChild(node) {
        assert(node.getChildCount() === 1);
        const child = node.getChildAt(0);
        assert(child.getChildCount() === 1);
        TreeHelper.removeNode(node);
        TreeHelper.insertNodeAt(child, node);
        return child;
    }
    // Pushes a node below its only child. It takes care of replicating the node
    // only for those branches where it makes sense.
    // Example: Calling
    //   pushNodeBelowChild(
    //       n2,
    //       function(grandChild) {return true;},
    //       function(node) {return node.clone();})
    //  would result in the following transformation.
    //
    //        n1              n1
    //       /  \            /  \
    //      n2   n6         n3  n6
    //     /         =>    /  \
    //    n3             n2'  n2''
    //   /  \            /      \
    //  n4  n5          n4      n5
    //
    //  where n2 has been pushed below n3, on both branches. n2'and n2'' denote
    //  that copies of the original node were made.
    //
    // |shouldPushDownFn| is a function that is called on every grandchild to
    // determine whether the node can be pushed down on that branch.
    // |cloneFn| is a function used to clone the node that is being pushed down.
    //
    // Returns the new parent of the subtree that used to start at "node" or
    // "node" itself if it could not be pushed down at all.
    static pushNodeBelowChild(node, shouldPushDownFn, cloneFn) {
        assert(node.getChildCount() === 1);
        const child = node.getChildAt(0);
        assert(child.getChildCount() > 1);
        const grandChildren = child.getChildren().slice();
        const canPushDown = grandChildren.some((grandChild) => shouldPushDownFn(grandChild));
        if (!canPushDown) {
            return node;
        }
        TreeHelper.removeNode(node);
        grandChildren.forEach((grandChild, index) => {
            if (shouldPushDownFn(grandChild)) {
                const newNode = cloneFn(node);
                child.removeChildAt(index);
                newNode.addChild(grandChild);
                child.addChildAt(newNode, index);
            }
        });
        return child;
    }
    // Replaces a chain of nodes with a new chain of nodes.
    // Example: Calling replaceChainWithChain(n2, n3, n7, n8) would result in the
    // following transformation.
    //
    //        n1              n1
    //       /  \            /  \
    //      n2   n6         n7   n6
    //     /         =>    /
    //    n3              n8
    //   /  \            /  \
    //  n4  n5          n4  n5
    //
    // Returns the new root of the subtree that used to start at "old head".
    // Effectively the new root is always equal to "newHead".
    static replaceChainWithChain(oldHead, oldTail, newHead, newTail) {
        const parentNode = oldHead.getParent();
        if (parentNode !== null) {
            const oldHeadIndex = parentNode.getChildren().indexOf(oldHead);
            parentNode.removeChildAt(oldHeadIndex);
            parentNode.addChildAt(newHead, oldHeadIndex);
        }
        oldTail
            .getChildren()
            .slice()
            .forEach((child) => {
            oldTail.removeChild(child);
            newTail.addChild(child);
        });
        return newHead;
    }
    // Removes a node from the tree, and replaces it with a chain of nodes where
    // each node in the chain (excluding the tail) has exactly one child.
    // Example: Calling replaceNodeWithChain(n6, n10, n12), where the chain
    // consists of n7->n8->n9, would result in the following transformation.
    //
    //        n1               n1
    //       /  \             /  \
    //      n2   n6          n2  n10
    //     /    /  \    =>  /      \
    //    n3   n7  n8      n3      n11
    //   /  \             /  \       \
    //  n4  n5          n4   n5      n12
    //                               /  \
    //                              n7  n8
    //
    // Returns the new root of the subtree that used to start at "node".
    // Effectively the new root is always equal to "head".
    static replaceNodeWithChain(node, head, tail) {
        return TreeHelper.replaceChainWithChain(node, node, head, tail);
    }
    // Replaces a chain of nodes with a new node.
    // Example: Calling replaceChainWithNode(n2, n3, n7) would result in the
    // following transformation.
    //
    //        n1              n1
    //       /  \            /  \
    //      n2   n6         n7   n6
    //     /         =>    /  \
    //    n3              n4  n5
    //   /  \
    //  n4  n5
    //
    // Returns the new root of the subtree that used to start at "head".
    // Effectively the new root is always equal to "node".
    static replaceChainWithNode(head, tail, node) {
        return TreeHelper.replaceChainWithChain(head, tail, node, node);
    }
    // Finds all nodes in the given tree that satisfy a given condition.
    // |root| is the root of the tree to search.
    // |filterFn| is the filter function. It will be called on every node of
    // the tree.
    // |stopFn| is a function that indicates whether searching should be stopped.
    // It will be called on every visited node on the tree. If false is returned
    // searching will stop for nodes below that node. If such a function were not
    // provided the entire tree is searched.
    static find(root, filterFn, stopFn) {
        const results = [];
        /** @param {!lf.structs.TreeNode} node */
        const filterRec = (node) => {
            if (filterFn(node)) {
                results.push(node);
            }
            if (stopFn === undefined || stopFn === null || !stopFn(node)) {
                node.getChildren().forEach(filterRec);
            }
        };
        filterRec(root);
        return results;
    }
    // Returns a string representation of a tree. Useful for testing/debugging.
    // |stringFunc| is the function to use for converting a single node to a
    // string. If not provided a default function will be used.
    static toString(rootNode, stringFunc) {
        const defaultStringFn = (node) => {
            return node.toString() + "\n";
        };
        const stringFn = stringFunc || defaultStringFn;
        let out = "";
        rootNode.traverse((node) => {
            for (let i = 0; i < node.getDepth(); i++) {
                out += "-";
            }
            out += stringFn(node);
        });
        return out;
    }
}
class CombinedPredicate extends PredicateNode {
    constructor(operator) {
        super();
        this.operator = operator;
        // Whether this predicate has been reversed. This is necessary only for
        // handling the case where setComplement() is called twice with the same
        // value.
        this.isComplement = false;
    }
    eval(relation) {
        const results = this.getChildren().map((condition) => condition.eval(relation));
        return this.combineResults(results);
    }
    setComplement(isComplement) {
        if (this.isComplement === isComplement) {
            // Nothing to do.
            return;
        }
        this.isComplement = isComplement;
        // NOT(AND(c1, c2)) becomes OR(NOT(c1), NOT(c2)).
        // NOT(OR(c1, c2)) becomes AND(NOT(c1), NOT(c2)).
        // Toggling AND/OR.
        this.operator = this.operator === Operator.AND ? Operator.OR : Operator.AND;
        // Toggling children conditions.
        this.getChildren().forEach((condition) => {
            condition.setComplement(isComplement);
        });
    }
    copy() {
        const copy = TreeHelper.map(this, (node) => {
            if (node instanceof CombinedPredicate) {
                const tempCopy = new CombinedPredicate(node.operator);
                tempCopy.isComplement = node.isComplement;
                tempCopy.setId(node.getId());
                return tempCopy;
            }
            else {
                return node.copy();
            }
        });
        return copy;
    }
    getColumns(results) {
        const columns = results || [];
        this.traverse((child) => {
            if (child === this) {
                return;
            }
            child.getColumns(columns);
        });
        const columnSet = new Set(columns);
        return Array.from(columnSet.values());
    }
    getTables(results) {
        const tables = results ? results : new Set();
        this.traverse((child) => {
            if (child === this) {
                return;
            }
            child.getTables(tables);
        });
        return tables;
    }
    toString() {
        return `combined_pred_${this.operator.toString()}`;
    }
    // Converts this predicate to a key range.
    // NOTE: Not all predicates can be converted to a key range, callers must call
    // isKeyRangeCompatible() before calling this method.
    toKeyRange() {
        assert(this.isKeyRangeCompatible(), "Could not convert combined predicate to key range.");
        if (this.operator === Operator.OR) {
            const keyRangeSet = new SingleKeyRangeSet();
            this.getChildren().forEach((child) => {
                const childKeyRanges = child
                    .toKeyRange()
                    .getValues();
                keyRangeSet.add(childKeyRanges);
            });
            return keyRangeSet;
        }
        else {
            // this.operator.lf.pred.Operator.OR
            // Unreachable code, because the assertion above should have already
            // thrown an error if this predicate is of type AND.
            assert(false, "toKeyRange() called for an AND predicate.");
            return new SingleKeyRangeSet();
        }
    }
    // Returns whether this predicate can be converted to a set of key ranges.
    isKeyRangeCompatible() {
        if (this.operator === Operator.OR) {
            return this.isKeyRangeCompatibleOr();
        }
        // AND predicates are broken down to individual predicates by the optimizer,
        // and therefore there is no need to convert an AND predicate to a key
        // range, because such predicates do not exist in the tree during query
        // execution.
        return false;
    }
    // Combines the results of all the children predicates.
    combineResults(results) {
        if (this.operator === Operator.AND) {
            return Relation.intersect(results);
        }
        else {
            // Must be the case where this.operator === Operator.OR.
            return Relation.union(results);
        }
    }
    // Checks if this OR predicate can be converted to a set of key ranges.
    // Currently only OR predicates that satisfy all of the following criteria can
    // be converted.
    //  1) Every child is a ValuePredicate
    //  2) All children refer to the same table and column.
    //  3) All children are key range compatible.
    isKeyRangeCompatibleOr() {
        let predicateColumn = null;
        return this.getChildren().every((child) => {
            const isCandidate = child instanceof ValuePredicate && child.isKeyRangeCompatible();
            if (!isCandidate) {
                return false;
            }
            if (predicateColumn === null) {
                predicateColumn = child.column;
            }
            return (predicateColumn.getNormalizedName() === child.column.getNormalizedName());
        });
    }
}
class JoinPredicate extends PredicateNode {
    constructor(leftColumn, rightColumn, evaluatorType) {
        super();
        this.leftColumn = leftColumn;
        this.rightColumn = rightColumn;
        this.evaluatorType = evaluatorType;
        this.nullPayload = null;
        const registry = EvalRegistry.get();
        this.evaluatorFn = registry.getEvaluator(this.leftColumn.getType(), this.evaluatorType);
        this.keyOfIndexFn = registry.getKeyOfIndexEvaluator(this.leftColumn.getType());
    }
    copy() {
        const clone = new JoinPredicate(this.leftColumn, this.rightColumn, this.evaluatorType);
        clone.setId(this.getId());
        return clone;
    }
    getColumns(results) {
        if (results !== undefined && results !== null) {
            results.push(this.leftColumn);
            results.push(this.rightColumn);
            return results;
        }
        return [this.leftColumn, this.rightColumn];
    }
    getTables(results) {
        const tables = results !== undefined && results !== null ? results : new Set();
        tables.add(this.leftColumn.getTable());
        tables.add(this.rightColumn.getTable());
        return tables;
    }
    // Creates a new predicate with the  left and right columns swapped and
    // operator changed (if necessary).
    reverse() {
        let evaluatorType = this.evaluatorType;
        switch (this.evaluatorType) {
            case EvalType.GT:
                evaluatorType = EvalType.LT;
                break;
            case EvalType.LT:
                evaluatorType = EvalType.GT;
                break;
            case EvalType.GTE:
                evaluatorType = EvalType.LTE;
                break;
            case EvalType.LTE:
                evaluatorType = EvalType.GTE;
                break;
        }
        const newPredicate = new JoinPredicate(this.rightColumn, this.leftColumn, evaluatorType);
        return newPredicate;
    }
    eval(relation) {
        const entries = relation.entries.filter((entry) => {
            const leftValue = entry.getField(this.leftColumn);
            const rightValue = entry.getField(this.rightColumn);
            return this.evaluatorFn(leftValue, rightValue);
        }, this);
        return new Relation(entries, relation.getTables());
    }
    toString() {
        return ("join_pred("
            + this.leftColumn.getNormalizedName()
            + " "
            + this.evaluatorType
            + " "
            + this.rightColumn.getNormalizedName()
            + ")");
    }
    // Calculates the join between the input relations using a Nested-Loop-Join
    // algorithm.
    // Nulls cannot be matched. Hence Inner join does not return null matches
    // at all and Outer join retains each null entry of the left table.
    evalRelationsNestedLoopJoin(leftRelation, rightRelation, isOuterJoin) {
        let leftRightRelations = [leftRelation, rightRelation];
        // For outer join, left and right are not interchangeable.
        if (!isOuterJoin) {
            leftRightRelations = this.detectLeftRight(leftRelation, rightRelation);
        }
        leftRelation = leftRightRelations[0];
        rightRelation = leftRightRelations[1];
        const combinedEntries = [];
        const leftRelationTables = leftRelation.getTables();
        const rightRelationTables = rightRelation.getTables();
        const leftEntriesLength = leftRelation.entries.length;
        const rightEntriesLength = rightRelation.entries.length;
        // Since block size is a power of two, we can use bitwise operators.
        const blockNumBits = JoinPredicate.BLOCK_SIZE_EXPONENT;
        // This is equivalent to Math.ceil(rightEntriesLength/blockSize).
        const blockCount = rightEntriesLength + (1 << blockNumBits) - 1 >> blockNumBits;
        let currentBlock = 0;
        // The inner loop is executed in blocks. Blocking helps in pre-fetching
        // the next contents by CPU and also reduces cache misses as long as a block
        // is close to the size of cache.
        while (currentBlock < blockCount) {
            for (let i = 0; i < leftEntriesLength; i++) {
                let matchFound = false;
                const leftValue = leftRelation.entries[i].getField(this.leftColumn);
                if (leftValue !== null) {
                    const rightLimit = Math.min(currentBlock + 1 << blockNumBits, rightEntriesLength);
                    for (let j = currentBlock << blockNumBits; j < rightLimit; j++) {
                        // Evaluating before combining the rows, since combining is fairly
                        // expensive.
                        const predicateResult = this.evaluatorFn(leftValue, rightRelation.entries[j].getField(this.rightColumn));
                        if (predicateResult) {
                            matchFound = true;
                            const combinedEntry = RelationEntry.combineEntries(leftRelation.entries[i], leftRelationTables, rightRelation.entries[j], rightRelationTables);
                            combinedEntries.push(combinedEntry);
                        }
                    }
                }
                if (isOuterJoin && !matchFound) {
                    combinedEntries.push(this.createCombinedEntryForUnmatched(leftRelation.entries[i], leftRelationTables));
                }
            }
            currentBlock++;
        }
        const srcTables = leftRelation
            .getTables()
            .concat(rightRelation.getTables());
        return new Relation(combinedEntries, srcTables);
    }
    // Calculates the join between the input relations using a Hash-Join
    // algorithm. Such a join implementation can only be used if the join
    // conditions is the "equals" operator.
    // Nulls cannot be matched. Hence Inner join does not return null matches
    // at all and Outer join retains each null entry of the left table.
    evalRelationsHashJoin(leftRelation, rightRelation, isOuterJoin) {
        let leftRightRelations = [leftRelation, rightRelation];
        // For outer join, left and right are not interchangeable.
        if (!isOuterJoin) {
            leftRightRelations = this.detectLeftRight(leftRelation, rightRelation);
        }
        leftRelation = leftRightRelations[0];
        rightRelation = leftRightRelations[1];
        // If it is an outer join, then swap to make sure that the right table is
        // used for the "build" phase of the hash-join algorithm. If it is inner
        // join, choose the smaller of the two relations to be used for the "build"
        // phase.
        let minRelation = leftRelation;
        let maxRelation = rightRelation;
        let minColumn = this.leftColumn;
        let maxColumn = this.rightColumn;
        if (isOuterJoin) {
            minRelation = rightRelation;
            maxRelation = leftRelation;
            minColumn = this.rightColumn;
            maxColumn = this.leftColumn;
        }
        const map = new MapSet();
        const combinedEntries = [];
        minRelation.entries.forEach((entry) => {
            const key = String(entry.getField(minColumn));
            map.set(key, entry);
        });
        const minRelationTableNames = minRelation.getTables();
        const maxRelationTableNames = maxRelation.getTables();
        maxRelation.entries.forEach((entry) => {
            const value = entry.getField(maxColumn);
            const key = String(value);
            if (value !== null && map.has(key)) {
                map.get(key).forEach((innerEntry) => {
                    const combinedEntry = RelationEntry.combineEntries(entry, maxRelationTableNames, innerEntry, minRelationTableNames);
                    combinedEntries.push(combinedEntry);
                });
            }
            else if (isOuterJoin) {
                combinedEntries.push(this.createCombinedEntryForUnmatched(entry, maxRelationTableNames));
            }
        }, this);
        const srcTables = leftRelation
            .getTables()
            .concat(rightRelation.getTables());
        return new Relation(combinedEntries, srcTables);
    }
    evalRelationsIndexNestedLoopJoin(leftRelation, rightRelation, indexJoinInfo, cache) {
        assert(this.evaluatorType === EvalType.EQ, "For now, index nested loop join can only be leveraged for EQ.");
        // Detecting which relation should be used as outer (non-indexed) and which
        // as inner (indexed).
        const indexedTable = indexJoinInfo.indexedColumn.getTable();
        let outerRelation = leftRelation;
        let innerRelation = rightRelation;
        if (leftRelation.getTables().includes(indexedTable.getEffectiveName())) {
            outerRelation = rightRelation;
            innerRelation = leftRelation;
        }
        const combinedEntries = [];
        const innerRelationTables = innerRelation.getTables();
        const outerRelationTables = outerRelation.getTables();
        // Generates and pushes a new combined entry to the results.
        // |row| is The row corresponding to the inner entry.
        function pushCombinedEntry(outerEntry, row) {
            const innerEntry = new RelationEntry(row, innerRelationTables.length > 1);
            const combinedEntry = RelationEntry.combineEntries(outerEntry, outerRelationTables, innerEntry, innerRelationTables);
            combinedEntries.push(combinedEntry);
        }
        outerRelation.entries.forEach((entry) => {
            const keyOfIndex = this.keyOfIndexFn(entry.getField(indexJoinInfo.nonIndexedColumn));
            const matchingRowIds = indexJoinInfo.index.get(keyOfIndex);
            if (matchingRowIds.length === 0) {
                return;
            }
            if (indexJoinInfo.index.isUniqueKey()) {
                // Since the index has only unique keys, expecting only one rowId.
                // Using Cache#get, instead of Cache#getMany, since it has better
                // performance (no unnecessary array allocations).
                pushCombinedEntry(entry, cache.get(matchingRowIds[0]));
            }
            else {
                const rows = cache.getMany(matchingRowIds);
                rows.forEach((r) => {
                    pushCombinedEntry(entry, r);
                });
            }
        }, this);
        const srcTables = outerRelation
            .getTables()
            .concat(innerRelation.getTables());
        return new Relation(combinedEntries, srcTables);
    }
    setComplement(isComplement) {
        throw new Exception(ErrorCode.ASSERTION, "Join predicate has no complement");
    }
    // Swaps left and right columns and changes operator (if necessary).
    reverseSelf() {
        const temp = this.leftColumn;
        this.leftColumn = this.rightColumn;
        this.rightColumn = temp;
        let evaluatorType = this.evaluatorType;
        switch (this.evaluatorType) {
            case EvalType.GT:
                evaluatorType = EvalType.LT;
                break;
            case EvalType.LT:
                evaluatorType = EvalType.GT;
                break;
            case EvalType.GTE:
                evaluatorType = EvalType.LTE;
                break;
            case EvalType.LTE:
                evaluatorType = EvalType.GTE;
                break;
            default:
                return;
        }
        this.evaluatorType = evaluatorType;
        this.evaluatorFn = EvalRegistry.get().getEvaluator(this.leftColumn.getType(), this.evaluatorType);
    }
    // Returns whether the given relation can be used as the "left" parameter of
    // this predicate.
    appliesToLeft(relation) {
        return relation
            .getTables()
            .includes(this.leftColumn.getTable().getEffectiveName());
    }
    // Returns whether the given relation can be used as the "right" parameter of
    // this predicate.
    appliesToRight(relation) {
        return relation
            .getTables()
            .includes(this.rightColumn.getTable().getEffectiveName());
    }
    // Asserts that the given relations are applicable to this join predicate.
    // Example of non-applicable relations:
    //   - join predicate: photoTable.albumId == albumTable.id
    //   leftRelation.getTables() does not include photoTable, or
    //   rightRelation.getTables() does not include albumTable.
    assertRelationsApply(left, right) {
        assert(this.appliesToLeft(left), "Mismatch between join predicate left operand and right relation.");
        assert(this.appliesToRight(right), "Mismatch between join predicate right operand and right relation.");
    }
    // Detects which input relation should be used as left/right. If predicate
    // order does not match with the left and right relations, left and right are
    // reversed. If the right table has larger size, then the left, right and
    // evaluation type are reversed (This is done to make it more cache
    // efficient).
    // Returns an array holding the two input relations in the order of
    // [left, right].
    detectLeftRight(relation1, relation2) {
        let left = null;
        let right = null;
        if (this.appliesToLeft(relation1)) {
            this.assertRelationsApply(relation1, relation2);
            left = relation1;
            right = relation2;
        }
        else {
            this.assertRelationsApply(relation2, relation1);
            left = relation2;
            right = relation1;
        }
        if (left.entries.length > right.entries.length) {
            this.reverseSelf();
            this.assertRelationsApply(right, left);
            return [right, left];
        }
        return [left, right];
    }
    // Creates a row with null columns with column names obtained from the table.
    createNullPayload(table) {
        const payload = {};
        table.getColumns().forEach((column) => payload[column.getName()] = null);
        return payload;
    }
    // Creates a combined entry with an unmatched left entry from outer join
    // algorithm and a null entry.
    createCombinedEntryForUnmatched(entry, leftRelationTables) {
        if (this.nullPayload === null) {
            this.nullPayload = this.createNullPayload(this.rightColumn.getTable());
        }
        // The right relation is guaranteed to never be the result
        // of a previous join.
        const nullEntry = new RelationEntry(new Row(Row.DUMMY_ID, this.nullPayload), false);
        const combinedEntry = RelationEntry.combineEntries(entry, leftRelationTables, nullEntry, [this.rightColumn.getTable().getEffectiveName()]);
        return combinedEntry;
    }
}
// Exponent of block size, so the block size is 2^(BLOCK_SIZE_EXPONENT).
JoinPredicate.BLOCK_SIZE_EXPONENT = 8;
class SqlHelper {
    static toSql(builder, stripValueInfo = false) {
        const query = builder.getQuery();
        if (query instanceof SelectContext) {
            return SqlHelper.selectToSql(query, stripValueInfo);
        }
        // 358: toSql() is not implemented for {0}.
        throw new Exception(ErrorCode.NOT_IMPL_IN_TOSQL, typeof query);
    }
    static escapeSqlValue(type, val) {
        const value = val;
        if (value === undefined || value === null) {
            return "NULL";
        }
        switch (type) {
            case Type.BOOLEAN:
                return value ? 1 : 0;
            case Type.INTEGER:
            case Type.NUMBER:
                return value;
            case Type.ARRAY_BUFFER:
                // Note: Oracle format is used here.
                return `'${Row.binToHex(value)}'`;
            default:
                // datetime, string
                return `'${value.toString()}'`;
        }
    }
    static evaluatorToSql(op) {
        switch (op) {
            case EvalType.BETWEEN:
                return "BETWEEN";
            case EvalType.EQ:
                return "=";
            case EvalType.GTE:
                return ">=";
            case EvalType.GT:
                return ">";
            case EvalType.IN:
                return "IN";
            case EvalType.LTE:
                return "<=";
            case EvalType.LT:
                return "<";
            case EvalType.MATCH:
                return "LIKE";
            case EvalType.NEQ:
                return "<>";
            default:
                return "UNKNOWN";
        }
    }
    static valueToSql(value, op, type, stripValueInfo) {
        if (value instanceof Binder) {
            return "?" + value.getIndex().toString();
        }
        if (stripValueInfo) {
            return value !== undefined && value !== null ? "#" : "NULL";
        }
        else if (op === EvalType.MATCH) {
            return `'${value.toString()}'`;
        }
        else if (op === EvalType.IN) {
            const array = value;
            const vals = array.map((e) => SqlHelper.escapeSqlValue(type, e));
            return `(${vals.join(", ")})`;
        }
        else if (op === EvalType.BETWEEN) {
            return (SqlHelper.escapeSqlValue(type, value[0])
                + " AND "
                + SqlHelper.escapeSqlValue(type, value[1]));
        }
        return SqlHelper.escapeSqlValue(type, value).toString();
    }
    static valuePredicateToSql(pred, stripValueInfo) {
        const column = pred.column.getNormalizedName();
        const op = SqlHelper.evaluatorToSql(pred.evaluatorType);
        const value = SqlHelper.valueToSql(pred.peek(), pred.evaluatorType, pred.column.getType(), stripValueInfo);
        if (op === "=" && value === "NULL") {
            return [column, "IS NULL"].join(" ");
        }
        else if (op === "<>" && value === "NULL") {
            return [column, "IS NOT NULL"].join(" ");
        }
        else {
            return [column, op, value].join(" ");
        }
    }
    static combinedPredicateToSql(pred, stripValueInfo) {
        const children = pred.getChildren().map((childNode) => {
            return ("("
                + SqlHelper.parseSearchCondition(childNode, stripValueInfo)
                + ")");
        });
        const joinToken = pred.operator === Operator.AND ? " AND " : " OR ";
        return children.join(joinToken);
    }
    static joinPredicateToSql(pred) {
        return [
            pred.leftColumn.getNormalizedName(),
            SqlHelper.evaluatorToSql(pred.evaluatorType),
            pred.rightColumn.getNormalizedName()
        ].join(" ");
    }
    static parseSearchCondition(pred, stripValueInfo) {
        if (pred instanceof ValuePredicate) {
            return SqlHelper.valuePredicateToSql(pred, stripValueInfo);
        }
        else if (pred instanceof CombinedPredicate) {
            return SqlHelper.combinedPredicateToSql(pred, stripValueInfo);
        }
        else if (pred instanceof JoinPredicate) {
            return SqlHelper.joinPredicateToSql(pred);
        }
        // 357: toSql() does not support predicate type: {0}.
        throw new Exception(357, typeof pred);
    }
    static predicateToSql(pred, stripValueInfo) {
        const whereClause = SqlHelper.parseSearchCondition(pred, stripValueInfo);
        if (whereClause) {
            return " WHERE " + whereClause;
        }
        return "";
    }
    static selectToSql(query, stripValueInfo) {
        let colList = "*";
        if (query.columns.length) {
            colList = query.columns
                .map((c) => {
                const col = c;
                if (col.getAlias()) {
                    return col.getNormalizedName() + " AS " + col.getAlias();
                }
                else {
                    return col.getNormalizedName();
                }
            })
                .join(", ");
        }
        let sql = "SELECT " + colList + " FROM ";
        if (query.outerJoinPredicates && query.outerJoinPredicates.size !== 0) {
            sql += SqlHelper.getFromListForOuterJoin(query, stripValueInfo);
        }
        else {
            sql += SqlHelper.getFromListForInnerJoin(query, stripValueInfo);
            if (query.where) {
                sql += SqlHelper.predicateToSql(query.where, stripValueInfo);
            }
        }
        if (query.orderBy) {
            const orderBy = query.orderBy
                .map((order) => {
                return (order.column.getNormalizedName()
                    + (order.order === Order.DESC ? " DESC" : " ASC"));
            })
                .join(", ");
            sql += " ORDER BY " + orderBy;
        }
        if (query.groupBy) {
            const groupBy = query.groupBy
                .map((col) => col.getNormalizedName())
                .join(", ");
            sql += " GROUP BY " + groupBy;
        }
        if (query.limit) {
            sql += " LIMIT " + query.limit.toString();
        }
        if (query.skip) {
            sql += " SKIP " + query.skip.toString();
        }
        sql += ";";
        return sql;
    }
    static getTableNameToSql(t) {
        const table = t;
        return table.getEffectiveName() !== table.getName() ? table.getName() + " AS " + table.getEffectiveName() : table.getName();
    }
    // Handles Sql queries that have left outer join.
    static getFromListForOuterJoin(query, stripValueInfo) {
        // Retrieves all JoinPredicates.
        const retrievedNodes = TreeHelper.find(query.where, (n) => n instanceof JoinPredicate);
        const predicateString = retrievedNodes.map((n) => SqlHelper.joinPredicateToSql(n));
        let fromList = SqlHelper.getTableNameToSql(query.from[0]);
        for (let i = 1; i < query.from.length; i++) {
            const fromName = SqlHelper.getTableNameToSql(query.from[i]);
            if (query.outerJoinPredicates.has(retrievedNodes[predicateString.length - i].getId())) {
                fromList += " LEFT OUTER JOIN " + fromName;
            }
            else {
                fromList += " INNER JOIN " + fromName;
            }
            fromList += " ON (" + predicateString[predicateString.length - i] + ")";
        }
        const node = query.where;
        const leftChild = node.getChildCount() > 0 ? node.getChildAt(0) : node;
        // The following condition checks that where has been called in the query.
        if (!(leftChild instanceof JoinPredicate)) {
            fromList
                += " WHERE "
                    + SqlHelper.parseSearchCondition(leftChild, stripValueInfo);
        }
        return fromList;
    }
    static getFromListForInnerJoin(query, stripValueInfo) {
        return query.from.map(SqlHelper.getTableNameToSql).join(", ");
    }
}
class BaseBuilder {
    constructor(backStore, schema, cache, indexStore, queryEngine, runner, context) {
        this.backStore = backStore;
        this.schema = schema;
        this.cache = cache;
        this.indexStore = indexStore;
        this.queryEngine = queryEngine;
        this.runner = runner;
        this.query = context;
    }
    exec() {
        try {
            this.assertExecPreconditions();
        }
        catch (e) {
            return Promise.reject(e);
        }
        return new Promise((resolve, reject) => {
            const queryTask = new UserQueryTask(this.backStore, this.schema, this.cache, this.indexStore, [this.getTaskItem()]);
            this.runner.scheduleTask(queryTask).then((results) => {
                resolve(results[0].getPayloads());
            }, reject);
        });
    }
    explain() {
        const stringFn = (node) => `${node.toContextString(this.query)}\n`;
        return TreeHelper.toString(this.getPlan().getRoot(), stringFn);
    }
    bind(values) {
        this.query.bind(values);
        return this;
    }
    toSql(stripValueInfo = false) {
        return SqlHelper.toSql(this, stripValueInfo);
    }
    // Asserts whether the preconditions for executing this query are met. Should
    // be overridden by subclasses.
    assertExecPreconditions() {
        // No-op default implementation.
    }
    getQuery() {
        return this.query.clone();
    }
    getTaskItem() {
        return {
            "context": this.getQuery(),
            "plan": this.getPlan()
        };
    }
    getPlan() {
        if (this.plan === undefined || this.plan === null) {
            this.plan = this.queryEngine.getPlan(this.query);
        }
        return this.plan;
    }
}
// Base class for AggregateColumn and StarColumn which does not support
// PredicateProvider interface.
class NonPredicateProvider {
    eq(operand) {
        throw new Exception(ErrorCode.SYNTAX_ERROR);
    }
    neq(operand) {
        throw new Exception(ErrorCode.SYNTAX_ERROR);
    }
    lt(operand) {
        throw new Exception(ErrorCode.SYNTAX_ERROR);
    }
    lte(operand) {
        throw new Exception(ErrorCode.SYNTAX_ERROR);
    }
    gt(operand) {
        throw new Exception(ErrorCode.SYNTAX_ERROR);
    }
    gte(operand) {
        throw new Exception(ErrorCode.SYNTAX_ERROR);
    }
    match(operand) {
        throw new Exception(ErrorCode.SYNTAX_ERROR);
    }
    between(from, to) {
        throw new Exception(ErrorCode.SYNTAX_ERROR);
    }
    in(values) {
        throw new Exception(ErrorCode.SYNTAX_ERROR);
    }
    isNull() {
        throw new Exception(ErrorCode.SYNTAX_ERROR);
    }
    isNotNull() {
        throw new Exception(ErrorCode.SYNTAX_ERROR);
    }
}
class AggregatedColumn extends NonPredicateProvider {
    constructor(child, aggregatorType) {
        super();
        this.child = child;
        this.aggregatorType = aggregatorType;
        this.alias = null;
    }
    getName() {
        return `${this.aggregatorType}(${this.child.getName()})`;
    }
    getNormalizedName() {
        return `${this.aggregatorType}(${this.child.getNormalizedName()})`;
    }
    getTable() {
        return this.child.getTable();
    }
    toString() {
        return this.getNormalizedName();
    }
    getType() {
        return this.child.getType();
    }
    getAlias() {
        return this.alias;
    }
    getIndices() {
        return [];
    }
    getIndex() {
        return null;
    }
    isNullable() {
        return false;
    }
    isUnique() {
        return false;
    }
    as(name) {
        this.alias = name;
        return this;
    }
    // Returns The chain of columns that starts from this column. All columns
    // are of type AggregatedColumn except for the last column.
    getColumnChain() {
        const columnChain = [this];
        let currentColumn = this;
        while (currentColumn instanceof AggregatedColumn) {
            columnChain.push(currentColumn.child);
            currentColumn = currentColumn.child;
        }
        return columnChain;
    }
}
// Keep lower case class name for compatibility with Lovefield API.
// TODO(arthurhsu): FIXME: use public interface.
class op {
    static and(...predicates) {
        return op.createPredicate(Operator.AND, predicates);
    }
    static or(...predicates) {
        return op.createPredicate(Operator.OR, predicates);
    }
    static not(operand) {
        operand.setComplement(true);
        return operand;
    }
    static createPredicate(operator, predicates) {
        const condition = new CombinedPredicate(operator);
        predicates.forEach((predicate) => {
            condition.addChild(predicate);
        });
        return condition;
    }
}
class SelectBuilder extends BaseBuilder {
    constructor(backStore, schema, cache, indexStore, queryEngine, runner, columns) {
        super(backStore, schema, cache, indexStore, queryEngine, runner, new SelectContext());
        this.backStore = backStore;
        this.schema = schema;
        this.cache = cache;
        this.indexStore = indexStore;
        this.fromAlreadyCalled = false;
        this.whereAlreadyCalled = false;
        this.query.columns = columns;
        this.checkDistinctColumn();
        this.checkAggregations();
    }
    assertExecPreconditions() {
        super.assertExecPreconditions();
        const context = this.query;
        if (context.from === undefined || context.from === null) {
            // 522: Invalid usage of select().
            throw new Exception(ErrorCode.INVALID_SELECT);
        }
        if (context.limitBinder && context.limit === undefined
            || context.skipBinder && context.skip === undefined) {
            // 523: Binding parameters of limit/skip without providing values.
            throw new Exception(ErrorCode.UNBOUND_LIMIT_SKIP);
        }
        this.checkProjectionList();
    }
    from(...tables) {
        if (tables.every((element) => {
            return typeof element === "string";
        })) {
            tables = tables.map((table) => {
                return this.schema.table(table);
            });
        }
        if (this.fromAlreadyCalled) {
            // 515: from() has already been called.
            throw new Exception(ErrorCode.DUPLICATE_FROM);
        }
        this.fromAlreadyCalled = true;
        if (this.query.from === undefined || this.query.from === null) {
            this.query.from = [];
        }
        this.query.from.push(...tables);
        return this;
    }
    where(predicate) {
        // 548: from() has to be called before where().
        this.checkFrom(ErrorCode.FROM_AFTER_WHERE);
        if (this.whereAlreadyCalled) {
            // 516: where() has already been called.
            throw new Exception(ErrorCode.DUPLICATE_WHERE);
        }
        this.whereAlreadyCalled = true;
        this.augmentWhereClause(predicate);
        return this;
    }
    limit(numberOfRows) {
        if (this.query.limit !== undefined || this.query.limitBinder) {
            // 528: limit() has already been called.
            throw new Exception(ErrorCode.DUPLICATE_LIMIT);
        }
        if (numberOfRows instanceof Binder) {
            this.query.limitBinder = numberOfRows;
        }
        else {
            if (numberOfRows < 0) {
                // 531: Number of rows must not be negative for limit/skip.
                throw new Exception(ErrorCode.NEGATIVE_LIMIT_SKIP);
            }
            this.query.limit = numberOfRows;
        }
        return this;
    }
    skip(numberOfRows) {
        if (this.query.skip !== undefined || this.query.skipBinder) {
            // 529: skip() has already been called.
            throw new Exception(ErrorCode.DUPLICATE_SKIP);
        }
        if (numberOfRows instanceof Binder) {
            this.query.skipBinder = numberOfRows;
        }
        else {
            if (numberOfRows < 0) {
                // 531: Number of rows must not be negative for limit/skip.
                throw new Exception(ErrorCode.NEGATIVE_LIMIT_SKIP);
            }
            this.query.skip = numberOfRows;
        }
        return this;
    }
    orderBy(column, order) {
        // 549: from() has to be called before orderBy() or groupBy().
        this.checkFrom(ErrorCode.FROM_AFTER_ORDER_GROUPBY);
        if (this.query.orderBy === undefined) {
            this.query.orderBy = [];
        }
        this.query.orderBy.push({
            "column": column,
            "order": order !== undefined && order !== null ? order : Order.ASC
        });
        return this;
    }
    groupBy(...columns) {
        // 549: from() has to be called before orderBy() or groupBy().
        this.checkFrom(ErrorCode.FROM_AFTER_ORDER_GROUPBY);
        if (this.query.groupBy) {
            // 530: groupBy() has already been called.
            throw new Exception(ErrorCode.DUPLICATE_GROUPBY);
        }
        if (this.query.groupBy === undefined) {
            this.query.groupBy = [];
        }
        this.query.groupBy.push(...columns);
        return this;
    }
    // Checks that usage of lf.fn.distinct() is correct. Specifically if an
    // lf.fn.distinct() column is requested, then it can't be combined with any
    // other column.
    checkDistinctColumn() {
        const distinctColumns = this.query.columns.filter((column) => column instanceof AggregatedColumn
            && column.aggregatorType === FnType.DISTINCT);
        const isValidCombination = distinctColumns.length === 0
            || distinctColumns.length === 1 && this.query.columns.length === 1;
        if (!isValidCombination) {
            // 524: Invalid usage of lf.fn.distinct().
            throw new Exception(ErrorCode.INVALID_DISTINCT);
        }
    }
    // Checks that the combination of projection list is valid.
    // Specifically:
    // 1) If GROUP_BY is specified: grouped columns must be indexable.
    // 2) If GROUP_BY is not specified: Aggregate and non-aggregated columns can't
    //    be mixed (result does not make sense).
    checkProjectionList() {
        this.query.groupBy ? this.checkGroupByColumns() : this.checkProjectionListNotMixed();
    }
    // Checks that grouped columns are indexable.
    checkGroupByColumns() {
        const isInvalid = this.query.groupBy.some((column) => {
            const type = column.getType();
            return type === Type.OBJECT || type === Type.ARRAY_BUFFER;
        });
        if (isInvalid) {
            // 525: Invalid projection list or groupBy columns.
            throw new Exception(ErrorCode.INVALID_GROUPBY);
        }
    }
    // Checks that the projection list contains either only non-aggregated
    // columns, or only aggregated columns. See checkProjectionList_ for details.
    checkProjectionListNotMixed() {
        const aggregatedColumnsExist = this.query.columns.some((column) => column instanceof AggregatedColumn);
        const nonAggregatedColumnsExist = this.query.columns.some((column) => !(column instanceof AggregatedColumn)) || this.query.columns.length === 0;
        if (aggregatedColumnsExist && nonAggregatedColumnsExist) {
            // 526: Invalid projection list: mixing aggregated with non-aggregated
            throw new Exception(ErrorCode.INVALID_PROJECTION);
        }
    }
    // Checks that the specified aggregations are valid, in terms of aggregation
    // type and column type.
    checkAggregations() {
        this.query.columns.forEach((column) => {
            const isValidAggregation = !(column instanceof AggregatedColumn)
                || this.isAggregationValid(column.aggregatorType, column.getType());
            if (!isValidAggregation) {
                // 527: Invalid aggregation detected: {0}.
                throw new Exception(ErrorCode.INVALID_AGGREGATION, column.getNormalizedName());
            }
        }, this);
    }
    // Checks if from() has already called.
    checkFrom(code) {
        if (this.query.from === undefined || this.query.from === null) {
            throw new Exception(code);
        }
    }
    // Augments the where clause by AND with the given predicate.
    augmentWhereClause(predicate) {
        if (this.query.where) {
            const newPredicate = op.and(predicate, this.query.where);
            this.query.where = newPredicate;
        }
        else {
            this.query.where = predicate;
        }
    }
    // Checks whether the user specified aggregations are valid.
    isAggregationValid(aggregatorType, columnType) {
        switch (aggregatorType) {
            case FnType.COUNT:
            case FnType.DISTINCT:
                return true;
            case FnType.AVG:
            case FnType.GEOMEAN:
            case FnType.STDDEV:
            case FnType.SUM:
                return columnType === Type.NUMBER || columnType === Type.INTEGER;
            case FnType.MAX:
            case FnType.MIN:
                return (columnType === Type.NUMBER
                    || columnType === Type.INTEGER
                    || columnType === Type.STRING
                    || columnType === Type.DATE_TIME);
            // NOT REACHED
        }
        return false;
    }
}
class RewritePass {
}
class LogicalQueryPlanNode extends TreeNode {
    constructor() {
        super();
    }
}
class SelectNode extends LogicalQueryPlanNode {
    constructor(predicate) {
        super();
        this.predicate = predicate;
    }
    toString() {
        return `select(${this.predicate.toString()})`;
    }
}
class AndPredicatePass extends RewritePass {
    constructor() {
        super();
    }
    rewrite(rootNode, context) {
        this.rootNode = rootNode;
        this.traverse(this.rootNode);
        return this.rootNode;
    }
    // Traverses the subtree that starts at the given node and rewrites it such
    // that all AND predicates are broken down to separate SelectNode instances.
    traverse(rootNode) {
        if (rootNode instanceof SelectNode) {
            assert(rootNode.getChildCount() === 1, "SelectNode must have exactly one child.");
            const predicates = this.breakAndPredicate(rootNode.predicate);
            const newNodes = this.createSelectNodeChain(predicates);
            TreeHelper.replaceNodeWithChain(rootNode, newNodes[0], newNodes[1]);
            if (rootNode === this.rootNode) {
                this.rootNode = newNodes[0];
            }
            rootNode = newNodes[0];
        }
        rootNode.getChildren().forEach((child) => {
            this.traverse(child);
        });
    }
    // Recursively breaks down an AND predicate to its components.
    // OR predicates are unaffected, as well as other types of predicates
    // (value/join).
    // Example: (a0 AND (a1 AND a2)) AND (b OR c) becomes
    //           a0 AND a1 AND a2 AND (b OR c) -> [a0, a1, a2, (b OR c)]
    breakAndPredicate(predicate) {
        if (predicate.getChildCount() === 0) {
            return [predicate];
        }
        const combinedPredicate = predicate;
        if (combinedPredicate.operator !== Operator.AND) {
            return [predicate];
        }
        const predicates = combinedPredicate
            .getChildren()
            .slice()
            .map((childPredicate) => {
            combinedPredicate.removeChild(childPredicate);
            return this.breakAndPredicate(childPredicate);
        });
        return ArrayHelper.flatten(predicates);
    }
    createSelectNodeChain(predicates) {
        let parentNode = null;
        let lastNode = null;
        predicates.map((predicate, index) => {
            const node = new SelectNode(predicate);
            if (index === 0) {
                parentNode = node;
            }
            else {
                lastNode.addChild(node);
            }
            lastNode = node;
        }, this);
        return [
            parentNode,
            lastNode
        ];
    }
}
class CrossProductNode extends LogicalQueryPlanNode {
    constructor() {
        super();
    }
    toString() {
        return "cross_product";
    }
}
class CrossProductPass extends RewritePass {
    constructor() {
        super();
    }
    rewrite(rootNode, queryContext) {
        if (queryContext.from.length < 3) {
            return rootNode;
        }
        this.rootNode = rootNode;
        this.traverse(this.rootNode);
        return this.rootNode;
    }
    traverse(rootNode) {
        // If rootNode is a CrossProduct and has more than 2 children, break it down.
        // TODO(dpapad): This needs optimization, since the order chosen here
        // affects whether subsequent steps will be able to convert the
        // cross-product to a join.
        if (rootNode instanceof CrossProductNode) {
            while (rootNode.getChildCount() > 2) {
                const crossProduct = new CrossProductNode();
                for (let i = 0; i < 2; i++) {
                    const child = rootNode.removeChildAt(0);
                    crossProduct.addChild(child);
                }
                rootNode.addChildAt(crossProduct, 0);
            }
        }
        rootNode.getChildren().forEach((child) => {
            this.traverse(child);
        });
    }
}
// TODO(arthurhsu): this abstract base class is not necessary. Refactor to
// remove and simplify code structure.
class BaseLogicalPlanGenerator {
    constructor(query) {
        this.query = query;
        this.rootNode = null;
    }
    generate() {
        if (this.rootNode === null) {
            this.rootNode = this.generateInternal();
        }
        return this.rootNode;
    }
}
// Rewrites the logical query plan such that the resulting logical query plan is
// faster to execute than the original "naive" plan.
class LogicalPlanRewriter {
    constructor(rootNode, queryContext, rewritePasses) {
        this.rootNode = rootNode;
        this.queryContext = queryContext;
        this.rewritePasses = rewritePasses;
    }
    generate() {
        this.rewritePasses.forEach((rewritePass) => {
            this.rootNode = rewritePass.rewrite(this.rootNode, this.queryContext);
        }, this);
        return this.rootNode;
    }
}
class TableAccessNode extends LogicalQueryPlanNode {
    constructor(table) {
        super();
        this.table = table;
    }
    toString() {
        const table = this.table;
        const postfix = table.getAlias() ? ` as ${table.getAlias()}` : "";
        return `table_access(${this.table.getName()}${postfix})`;
    }
}
class JoinNode extends LogicalQueryPlanNode {
    constructor(predicate, isOuterJoin) {
        super();
        this.predicate = predicate;
        this.isOuterJoin = isOuterJoin;
    }
    toString() {
        return (`join(type: ${this.isOuterJoin ? "outer" : "inner"}, `
            + `${this.predicate.toString()})`);
    }
}
class ImplicitJoinsPass extends RewritePass {
    constructor() {
        super();
    }
    rewrite(rootNode, context) {
        const queryContext = context;
        if (queryContext.from.length < 2) {
            return rootNode;
        }
        this.rootNode = rootNode;
        this.traverse(this.rootNode, queryContext);
        return this.rootNode;
    }
    traverse(rootNode, queryContext) {
        if (rootNode instanceof SelectNode
            && rootNode.predicate instanceof JoinPredicate) {
            assert(rootNode.getChildCount() === 1, "SelectNode must have exactly one child.");
            const predicateId = rootNode.predicate.getId();
            const child = rootNode.getChildAt(0);
            if (child instanceof CrossProductNode) {
                const isOuterJoin = queryContext.outerJoinPredicates
                    && queryContext.outerJoinPredicates.has(predicateId);
                const joinNode = new JoinNode(rootNode.predicate, isOuterJoin);
                TreeHelper.replaceChainWithNode(rootNode, child, joinNode);
                if (rootNode === this.rootNode) {
                    this.rootNode = joinNode;
                }
                rootNode = joinNode;
            }
        }
        rootNode.getChildren().forEach((child) => {
            this.traverse(child, queryContext);
        });
    }
}
class LogicalQueryPlan {
    constructor(rootNode, scope) {
        this.rootNode = rootNode;
        this.scope = scope;
    }
    getRoot() {
        return this.rootNode;
    }
    getScope() {
        return this.scope;
    }
}
class PushDownSelectionsPass extends RewritePass {
    constructor() {
        super();
        this.alreadyPushedDown = new Set();
    }
    rewrite(rootNode, context) {
        const queryContext = context;
        if (queryContext.where === undefined || queryContext.where === null) {
            // No predicates exist.
            return rootNode;
        }
        this.clear();
        this.rootNode = rootNode;
        this.traverse(this.rootNode, queryContext);
        this.clear();
        return this.rootNode;
    }
    // Clears any state in this rewrite pass, such that it can be re-used for
    // rewriting multiple trees.
    clear() {
        this.alreadyPushedDown.clear();
    }
    traverse(rootNode, queryContext) {
        const processChildren = (node) => {
            node.getChildren().forEach(processNodeRec);
        };
        const processNodeRec = (node) => {
            if (this.alreadyPushedDown.has(node)) {
                return;
            }
            if (!this.isCandidateNode(node)) {
                processChildren(node);
                return;
            }
            const selectNode = node;
            const selectNodeTables = selectNode.predicate.getTables();
            const shouldPushDownFn = (child) => this.doesReferToTables(child, selectNodeTables);
            const newRoot = this.pushDownNodeRec(queryContext, selectNode, shouldPushDownFn);
            this.alreadyPushedDown.add(selectNode);
            if (newRoot !== selectNode) {
                if (newRoot.getParent() === null) {
                    this.rootNode = newRoot;
                }
                processNodeRec(newRoot);
            }
            processChildren(selectNode);
        };
        processNodeRec(rootNode);
    }
    // Recursively pushes down a SelectNode until it can't be pushed any further
    // down. |shouldPushDown| is a function to be called for each child to
    // determine whether the node should be pushed down one level.
    // Returns the new root of the subtree that itself could not be pushed further
    // down.
    pushDownNodeRec(queryContext, node, shouldPushDownFn) {
        let newRoot = node;
        if (this.shouldSwapWithChild(queryContext, node)) {
            newRoot = TreeHelper.swapNodeWithChild(node);
            this.pushDownNodeRec(queryContext, node, shouldPushDownFn);
        }
        else if (this.shouldPushBelowChild(node)) {
            const newNodes = [];
            const cloneFn = (n) => {
                const newNode = new SelectNode(n.predicate);
                newNodes.push(newNode);
                return newNode;
            };
            newRoot = TreeHelper.pushNodeBelowChild(node, shouldPushDownFn, cloneFn);
            // Recursively pushing down the nodes that were just added to the tree as
            // a result of pushing down "node", if any.
            newNodes.forEach((newNode) => this.pushDownNodeRec(queryContext, newNode, shouldPushDownFn));
        }
        return newRoot;
    }
    // Whether the subtree that starts at root refers to all tables in the given
    // list.
    doesReferToTables(root, tables) {
        // Finding all tables that are involved in the subtree starting at the given
        // root.
        const referredTables = new Set();
        TreeHelper.getLeafNodes(root).forEach((tableAccessNode) => referredTables.add(tableAccessNode.table));
        if (root instanceof TableAccessNode) {
            referredTables.add(root.table);
        }
        return isSubset(referredTables, tables);
    }
    // Whether the given node is a candidate for being pushed down the tree.
    isCandidateNode(node) {
        return node instanceof SelectNode;
    }
    // Whether an attempt should be made to push the given node below its only
    // child.
    shouldPushBelowChild(node) {
        const child = node.getChildAt(0);
        return child instanceof CrossProductNode || child instanceof JoinNode;
    }
    // Whether the given node should be swapped with its only child.
    shouldSwapWithChild(queryContext, node) {
        const child = node.getChildAt(0);
        if (!(child instanceof SelectNode)) {
            return false;
        }
        if (queryContext.outerJoinPredicates === undefined
            || queryContext.outerJoinPredicates === null) {
            return true;
        }
        const nodeIsJoin = node.predicate instanceof JoinPredicate;
        const childIsOuterJoin = queryContext.outerJoinPredicates.has(child.predicate.getId());
        // If the node corresponds to a join predicate (outer or inner), allow it to
        // be pushed below any other SelectNode. If the node does not correspond to
        // a join predicate don't allow it to be pushed below an outer join, because
        // it needs to be applied after the outer join is calculated.
        return nodeIsJoin || !childIsOuterJoin;
    }
}
class AggregationNode extends LogicalQueryPlanNode {
    constructor(columns) {
        super();
        this.columns = columns;
    }
    toString() {
        return `aggregation(${this.columns.toString()})`;
    }
}
class GroupByNode extends LogicalQueryPlanNode {
    constructor(columns) {
        super();
        this.columns = columns;
    }
    toString() {
        return `group_by(${this.columns.toString()})`;
    }
}
class LimitNode extends LogicalQueryPlanNode {
    constructor(limit) {
        super();
        this.limit = limit;
    }
    toString() {
        return `limit(${this.limit})`;
    }
}
class OrderByNode extends LogicalQueryPlanNode {
    constructor(orderBy) {
        super();
        this.orderBy = orderBy;
    }
    toString() {
        return `order_by(${SelectContext.orderByToString(this.orderBy)})`;
    }
}
class ProjectNode extends LogicalQueryPlanNode {
    constructor(columns, groupByColumns) {
        super();
        this.columns = columns;
        this.groupByColumns = groupByColumns;
    }
    toString() {
        const columns = this.groupByColumns ? this.groupByColumns.map((col) => col.getNormalizedName()).join(", ") : "";
        const postfix = columns.length ? `, groupBy(${columns})` : "";
        return `project(${this.columns.toString()}${postfix})`;
    }
}
class SkipNode extends LogicalQueryPlanNode {
    constructor(skip) {
        super();
        this.skip = skip;
    }
    toString() {
        return `skip(${this.skip})`;
    }
}
class SelectLogicalPlanGenerator extends BaseLogicalPlanGenerator {
    constructor(query, rewritePasses) {
        super(query);
        this.rewritePasses = rewritePasses;
        this.tableAccessNodes = null;
        this.crossProductNode = null;
        this.selectNode = null;
        this.groupByNode = null;
        this.aggregationNode = null;
        this.orderByNode = null;
        this.skipNode = null;
        this.limitNode = null;
        this.projectNode = null;
    }
    generateInternal() {
        this.generateNodes();
        const rootNode = this.connectNodes();
        // Optimizing the "naive" logical plan.
        const planRewriter = new LogicalPlanRewriter(rootNode, this.query, this.rewritePasses);
        return planRewriter.generate();
    }
    // Generates all the nodes that will make up the logical plan tree. After
    // this function returns all nodes have been created, but they are not yet
    // connected to each other.
    generateNodes() {
        this.generateTableAccessNodes();
        this.generateCrossProductNode();
        this.generateSelectNode();
        this.generateOrderByNode();
        this.generateSkipNode();
        this.generateLimitNode();
        this.generateGroupByNode();
        this.generateAggregationNode();
        this.generateProjectNode();
    }
    // Connects the nodes together such that the logical plan tree is formed.
    connectNodes() {
        const parentOrder = [
            this.limitNode,
            this.skipNode,
            this.projectNode,
            this.orderByNode,
            this.aggregationNode,
            this.groupByNode,
            this.selectNode,
            this.crossProductNode
        ];
        let lastExistingParentIndex = -1;
        let rootNode = null;
        for (let i = 0; i < parentOrder.length; i++) {
            const node = parentOrder[i];
            if (node !== null) {
                if (rootNode === null) {
                    rootNode = node;
                }
                else {
                    parentOrder[lastExistingParentIndex].addChild(node);
                }
                lastExistingParentIndex = i;
            }
        }
        this.tableAccessNodes.forEach((tableAccessNode) => {
            parentOrder[lastExistingParentIndex].addChild(tableAccessNode);
        });
        return rootNode;
    }
    generateTableAccessNodes() {
        this.tableAccessNodes = this.query.from.map((table) => new TableAccessNode(table));
    }
    generateCrossProductNode() {
        if (this.query.from.length >= 2) {
            this.crossProductNode = new CrossProductNode();
        }
    }
    generateSelectNode() {
        if (this.query.where) {
            this.selectNode = new SelectNode(this.query.where.copy());
        }
    }
    generateOrderByNode() {
        if (this.query.orderBy) {
            this.orderByNode = new OrderByNode(this.query.orderBy);
        }
    }
    generateSkipNode() {
        if (this.query.skip && this.query.skip > 0 || this.query.skipBinder) {
            this.skipNode = new SkipNode(this.query.skip);
        }
    }
    generateLimitNode() {
        if (this.query.limit !== undefined && this.query.limit !== null) {
            this.limitNode = new LimitNode(this.query.limit);
        }
    }
    generateGroupByNode() {
        if (this.query.groupBy) {
            this.groupByNode = new GroupByNode(this.query.groupBy);
        }
    }
    generateAggregationNode() {
        const aggregatedColumns = this.query.columns.filter((column) => {
            return column instanceof AggregatedColumn;
        });
        if (this.query.orderBy) {
            this.query.orderBy.forEach((orderBy) => {
                if (orderBy.column instanceof AggregatedColumn) {
                    aggregatedColumns.push(orderBy.column);
                }
            });
        }
        if (aggregatedColumns.length > 0) {
            this.aggregationNode = new AggregationNode(aggregatedColumns);
        }
    }
    generateProjectNode() {
        this.projectNode = new ProjectNode(this.query.columns || [], this.query.groupBy || null);
    }
}
// A factory used to create a logical query plan corresponding to a given query.
class LogicalPlanFactory {
    constructor() {
        this.selectOptimizationPasses = [
            new AndPredicatePass(),
            new CrossProductPass(),
            new PushDownSelectionsPass(),
            new ImplicitJoinsPass()
        ];
        this.deleteOptimizationPasses = [new AndPredicatePass()];
    }
    create(query) {
        let generator = null;
        if (query instanceof SelectContext) {
            generator = new SelectLogicalPlanGenerator(query, this.selectOptimizationPasses);
        }
        else {
            // 513: Unknown query context.
            throw new Exception(ErrorCode.UNKNOWN_QUERY_CONTEXT);
        }
        const rootNode = generator.generate();
        return new LogicalQueryPlan(rootNode, query.getScope());
    }
}
// Pseudo table used for initializing pseudo columns.
class UnknownTable {
    constructor() {
        this._alias = null;
    }
    getName() {
        return "#UnknownTable";
    }
    getColumns() {
        return [];
    }
    getIndices() {
        return [];
    }
    persistentIndex() {
        return false;
    }
    getAlias() {
        return this._alias;
    }
    getEffectiveName() {
        return this._alias || this.getName();
    }
    getRowIdIndexName() {
        return "#UnknownTable.#";
    }
    createRow(value) {
        throw new Exception(ErrorCode.NOT_SUPPORTED);
    }
    deserializeRow(dbRecord) {
        throw new Exception(ErrorCode.NOT_SUPPORTED);
    }
    as(alias) {
        this._alias = alias;
        return this;
    }
    col(name) {
        return null;
    }
}
//  A dummy Column implementation to be used as a substitute for '*',
// for example in COUNT(*).
class StarColumn extends NonPredicateProvider {
    constructor(alias) {
        super();
        this.alias = alias || null;
        this.table = new UnknownTable();
    }
    getName() {
        return "*";
    }
    getNormalizedName() {
        return this.getName();
    }
    toString() {
        return this.getNormalizedName();
    }
    getTable() {
        // NOTE: The table here does not have a useful meaning, since the StarColumn
        // represents all columns that are available, which could be the result of a
        // join, therefore a dummy Table instance is used.
        return this.table;
    }
    getType() {
        // NOTE: The type here does not have a useful meaning, since the notion of a
        // type does not apply to a collection of all columns (which is what this
        // class represents).
        return Type.NUMBER;
    }
    getAlias() {
        return this.alias;
    }
    getIndices() {
        return [];
    }
    getIndex() {
        return null;
    }
    isNullable() {
        return false;
    }
    isUnique() {
        return false;
    }
    as(alias) {
        const clone = new StarColumn(alias);
        clone.table = this.table;
        return clone;
    }
}
class AggregationCalculator {
    constructor(relation, columns) {
        this.relation = relation;
        this.columns = columns;
    }
    // Calculates all requested aggregations. Results are stored within
    // this.relation.
    calculate() {
        this.columns.forEach((column) => {
            const reverseColumnChain = column.getColumnChain().reverse();
            for (let i = 1; i < reverseColumnChain.length; i++) {
                const currentColumn = reverseColumnChain[i];
                const leafColumn = currentColumn.getColumnChain().slice(-1)[0];
                const inputRelation = this.getInputRelationFor(currentColumn);
                // Return early if the aggregation result has already been calculated.
                if (inputRelation.hasAggregationResult(currentColumn)) {
                    return;
                }
                const result = this.evalAggregation(currentColumn.aggregatorType, inputRelation, leafColumn);
                this.relation.setAggregationResult(currentColumn, result);
            }
        }, this);
    }
    // Returns the relation that should be used as input for calculating the
    // given aggregated column.
    getInputRelationFor(column) {
        return column.child instanceof AggregatedColumn ? this.relation.getAggregationResult(column.child) : this.relation;
    }
    evalAggregation(aggregatorType, relation, column) {
        let result = null;
        switch (aggregatorType) {
            case FnType.MIN:
                result = this.reduce(relation, column, (s, v) => {
                    const soFar = s;
                    const value = v;
                    return value < soFar ? value : soFar;
                });
                break;
            case FnType.MAX:
                result = this.reduce(relation, column, (s, v) => {
                    const soFar = s;
                    const value = v;
                    return value > soFar ? value : soFar;
                });
                break;
            case FnType.DISTINCT:
                result = this.distinct(relation, column);
                break;
            case FnType.COUNT:
                result = this.count(relation, column);
                break;
            case FnType.SUM:
                result = this.sum(relation, column);
                break;
            case FnType.AVG: {
                const count = this.count(relation, column);
                if (count > 0) {
                    result = this.sum(relation, column) / count;
                }
                break;
            }
            case FnType.GEOMEAN:
                result = this.geomean(relation, column);
                break;
            default:
                // Must be case of FnType.STDDEV.
                result = this.stddev(relation, column);
                break;
        }
        return result;
    }
    // Reduces the input relation to a single value. Null values are ignored.
    reduce(relation, column, reduceFn) {
        return relation.entries.reduce((soFar, entry) => {
            const value = entry.getField(column);
            if (value === null) {
                return soFar;
            }
            return soFar === null ? value : reduceFn(soFar, value);
        }, null);
    }
    // Calculates the count of the given column for the given relation.
    // COUNT(*) returns count of all rows but COUNT(column) ignores nulls
    // in that column.
    count(relation, column) {
        if (column instanceof StarColumn) {
            return relation.entries.length;
        }
        return relation.entries.reduce((soFar, entry) => {
            return soFar + (entry.getField(column) === null ? 0 : 1);
        }, 0);
    }
    // Calculates the sum of the given column for the given relation.
    // If all rows have only value null for that column, then null is returned.
    // If the table is empty, null is returned.
    sum(relation, column) {
        return this.reduce(relation, column, (s, v) => {
            const soFar = s;
            const value = v;
            return value + soFar;
        });
    }
    // Calculates the standard deviation of the given column for the given
    // relation. If all rows have only value null for that column, then null is
    // returned. If the table is empty, null is returned.
    stddev(relation, column) {
        const values = [];
        relation.entries.forEach((entry) => {
            const value = entry.getField(column);
            if (value !== null) {
                values.push(value);
            }
        });
        return values.length === 0 ? null : MathHelper.standardDeviation.apply(null, values);
    }
    // Calculates the geometrical mean of the given column for the given relation.
    // Zero values are ignored. If all values given are zero, or if the input
    // relation is empty, null is returned.
    geomean(relation, column) {
        let nonZeroEntriesCount = 0;
        const reduced = relation.entries.reduce((soFar, entry) => {
            const value = entry.getField(column);
            if (value !== null && value !== 0) {
                nonZeroEntriesCount++;
                return soFar + Math.log(value);
            }
            else {
                return soFar;
            }
        }, 0);
        return nonZeroEntriesCount === 0 ? null : Math.E ** (reduced / nonZeroEntriesCount);
    }
    // Keeps only distinct entries with regards to the given column.
    distinct(relation, column) {
        const distinctMap = new Map();
        relation.entries.forEach((entry) => {
            const value = entry.getField(column);
            distinctMap.set(value, entry);
        });
        return new Relation(Array.from(distinctMap.values()), relation.getTables());
    }
}
class PhysicalQueryPlanNode extends TreeNode {
    constructor(numRelations, execType) {
        super();
        this.numRelations = numRelations;
        this.execType = execType;
    }
    exec(journal, context) {
        switch (this.execType) {
            case ExecType.FIRST_CHILD:
                return this.execFirstChild(journal, context);
            case ExecType.ALL:
                return this.execAllChildren(journal, context);
            default:
                // NO_CHILD
                return this.execNoChild(journal, context);
        }
    }
    toString() {
        return "dummy_node";
    }
    // Returns a string representation of this node taking into account the given
    // context.
    toContextString(context) {
        return this.toString();
    }
    assertInput(relations) {
        assert(this.numRelations === PhysicalQueryPlanNode.ANY
            || relations.length === this.numRelations);
    }
    execNoChild(journal, context) {
        return new Promise((resolve) => {
            resolve(this.execInternal([], journal, context));
        });
    }
    execFirstChild(journal, context) {
        return this.getChildAt(0)
            .exec(journal, context)
            .then((results) => {
            this.assertInput(results);
            return this.execInternal(results, journal, context);
        });
    }
    execAllChildren(journal, context) {
        const promises = this.getChildren().map((child) => {
            return child.exec(journal, context);
        });
        return Promise.all(promises).then((results) => {
            const relations = [];
            results.forEach((result) => {
                result.forEach((res) => relations.push(res));
            });
            this.assertInput(relations);
            return this.execInternal(relations, journal, context);
        });
    }
}
PhysicalQueryPlanNode.ANY = -1;
class AggregationStep extends PhysicalQueryPlanNode {
    constructor(aggregatedColumns) {
        super(PhysicalQueryPlanNode.ANY, ExecType.FIRST_CHILD);
        this.aggregatedColumns = aggregatedColumns;
    }
    toString() {
        const columnNames = this.aggregatedColumns.map((column) => column.getNormalizedName());
        return `aggregation(${columnNames.toString()})`;
    }
    execInternal(relations, journal, context) {
        relations.forEach((relation) => {
            const calculator = new AggregationCalculator(relation, this.aggregatedColumns);
            calculator.calculate();
        }, this);
        return relations;
    }
}
class CrossProductStep extends PhysicalQueryPlanNode {
    constructor() {
        super(2, ExecType.ALL);
    }
    toString() {
        return "cross_product";
    }
    execInternal(relations, journal, context) {
        return this.crossProduct(relations[0], relations[1]);
    }
    // Calculates the cross product of two relations.
    crossProduct(leftRelation, rightRelation) {
        const combinedEntries = [];
        const leftRelationTableNames = leftRelation.getTables();
        const rightRelationTableNames = rightRelation.getTables();
        leftRelation.entries.forEach((le) => {
            rightRelation.entries.forEach((re) => {
                const combinedEntry = RelationEntry.combineEntries(le, leftRelationTableNames, re, rightRelationTableNames);
                combinedEntries.push(combinedEntry);
            });
        });
        const srcTables = leftRelation
            .getTables()
            .concat(rightRelation.getTables());
        return [new Relation(combinedEntries, srcTables)];
    }
}
// Keep lower case class name for compatibility with Lovefield API.
class fn {
    static avg(col) {
        return new AggregatedColumn(col, FnType.AVG);
    }
    static count(column) {
        const col = column || new StarColumn();
        return new AggregatedColumn(col, FnType.COUNT);
    }
    static distinct(col) {
        return new AggregatedColumn(col, FnType.DISTINCT);
    }
    static max(col) {
        return new AggregatedColumn(col, FnType.MAX);
    }
    static min(col) {
        return new AggregatedColumn(col, FnType.MIN);
    }
    static stddev(col) {
        return new AggregatedColumn(col, FnType.STDDEV);
    }
    static sum(col) {
        return new AggregatedColumn(col, FnType.SUM);
    }
    static geomean(col) {
        return new AggregatedColumn(col, FnType.GEOMEAN);
    }
}
class GetRowCountStep extends PhysicalQueryPlanNode {
    constructor(indexStore, table) {
        super(0, ExecType.NO_CHILD);
        this.indexStore = indexStore;
        this.table = table;
    }
    toString() {
        return `get_row_count(${this.table.getName()})`;
    }
    execInternal(relations, journal, context) {
        const rowIdIndex = this.indexStore.get(this.table.getRowIdIndexName());
        const relation = new Relation([], [this.table.getName()]);
        relation.setAggregationResult(fn.count(), rowIdIndex.stats().totalRows);
        return [relation];
    }
}
class TableAccessFullStep extends PhysicalQueryPlanNode {
    constructor(indexStore, cache, table) {
        super(0, ExecType.NO_CHILD);
        this.indexStore = indexStore;
        this.cache = cache;
        this.table = table;
    }
    toString() {
        let postfix = "";
        const table = this.table;
        if (table.getAlias()) {
            postfix = ` as ${table.getAlias()}`;
        }
        return `table_access(${this.table.getName()}${postfix})`;
    }
    execInternal(relations, journal, context) {
        const table = this.table;
        const rowIds = this.indexStore.get(table.getRowIdIndexName()).getRange();
        return [
            Relation.fromRows(this.cache.getMany(rowIds), [
                table.getEffectiveName()
            ])
        ];
    }
}
// An optimization pass responsible for optimizing SELECT COUNT(*) queries,
// where no LIMIT, SKIP, WHERE or GROUP_BY appears.
class GetRowCountPass extends RewritePass {
    constructor(indexStore) {
        super();
        this.indexStore = indexStore;
    }
    rewrite(rootNode, queryContext) {
        this.rootNode = rootNode;
        if (!this.canOptimize(queryContext)) {
            return rootNode;
        }
        const tableAccessFullStep = TreeHelper.find(rootNode, (node) => node instanceof TableAccessFullStep)[0];
        const getRowCountStep = new GetRowCountStep(this.indexStore, tableAccessFullStep.table);
        TreeHelper.replaceNodeWithChain(tableAccessFullStep, getRowCountStep, getRowCountStep);
        return this.rootNode;
    }
    canOptimize(queryContext) {
        const isDefAndNotNull = (v) => v !== null && v !== undefined;
        const isCandidate = queryContext.columns.length === 1
            && queryContext.from.length === 1
            && !isDefAndNotNull(queryContext.where)
            && !isDefAndNotNull(queryContext.limit)
            && !isDefAndNotNull(queryContext.skip)
            && !isDefAndNotNull(queryContext.groupBy);
        if (isCandidate) {
            const column = queryContext.columns[0];
            return (column instanceof AggregatedColumn
                && column.aggregatorType === FnType.COUNT
                && column.child instanceof StarColumn);
        }
        return false;
    }
}
class GroupByStep extends PhysicalQueryPlanNode {
    constructor(groupByColumns) {
        super(1, ExecType.FIRST_CHILD);
        this.groupByColumns = groupByColumns;
    }
    toString() {
        const columnNames = this.groupByColumns.map((column) => column.getNormalizedName());
        return `groupBy(${columnNames.toString()})`;
    }
    execInternal(relations, journal, ctx) {
        return this.calculateGroupedRelations(relations[0]);
    }
    // Breaks down a single relation to multiple relations by grouping rows based
    // on the specified groupBy columns.
    calculateGroupedRelations(relation) {
        const groupMap = new MapSet();
        const getKey = (entry) => {
            const keys = this.groupByColumns.map((column) => entry.getField(column));
            return keys.join(",");
        };
        relation.entries.forEach((entry) => groupMap.set(getKey(entry), entry));
        return groupMap.keys().map((key) => {
            return new Relation(groupMap.get(key), relation.getTables());
        });
    }
}
var JoinAlgorithm;
(function (JoinAlgorithm) {
    JoinAlgorithm["HASH"] = "hash";
    JoinAlgorithm["INDEX_NESTED_LOOP"] = "index_nested_loop";
    JoinAlgorithm["NESTED_LOOP"] = "nested_loop";
})(JoinAlgorithm || (JoinAlgorithm = {}));
class JoinStep extends PhysicalQueryPlanNode {
    constructor(indexStore, cache, predicate, isOuterJoin) {
        super(2, ExecType.ALL);
        this.indexStore = indexStore;
        this.cache = cache;
        this.predicate = predicate;
        this.isOuterJoin = isOuterJoin;
        this.algorithm = this.predicate.evaluatorType === EvalType.EQ ? JoinAlgorithm.HASH : JoinAlgorithm.NESTED_LOOP;
        this.indexJoinInfo = null;
    }
    toString() {
        return (`join(type: ${this.isOuterJoin ? "outer" : "inner"}, `
            + `impl: ${this.algorithm}, ${this.predicate.toString()})`);
    }
    execInternal(relations, journal, context) {
        switch (this.algorithm) {
            case JoinAlgorithm.HASH:
                return [
                    this.predicate.evalRelationsHashJoin(relations[0], relations[1], this.isOuterJoin)
                ];
            case JoinAlgorithm.INDEX_NESTED_LOOP:
                return [
                    this.predicate.evalRelationsIndexNestedLoopJoin(relations[0], relations[1], this.indexJoinInfo, this.cache)
                ];
            default:
                // JoinAlgorithm.NESTED_LOOP
                return [
                    this.predicate.evalRelationsNestedLoopJoin(relations[0], relations[1], this.isOuterJoin)
                ];
        }
    }
    // Indicates that this JoinStep should be executed as an INDEX_NESTED_LOOP
    // join. |column| is the column whose index should be queried.
    markAsIndexJoin(column) {
        this.algorithm = JoinAlgorithm.INDEX_NESTED_LOOP;
        const index = this.indexStore.get(column.getIndex().getNormalizedName());
        this.indexJoinInfo = {
            "index": index,
            "indexedColumn": column,
            "nonIndexedColumn": column === this.predicate.leftColumn ? this.predicate.rightColumn : this.predicate.leftColumn
        };
    }
}
// A dummy execution step that performs no actual work.
class NoOpStep extends PhysicalQueryPlanNode {
    constructor(relations) {
        super(PhysicalQueryPlanNode.ANY, ExecType.NO_CHILD);
        this.relations = relations;
    }
    toString() {
        return `no_op_step(${this.relations[0].getTables().join(",")})`;
    }
    execInternal(relations, journal, context) {
        return this.relations;
    }
}
// An optimization pass responsible for identifying JoinSteps that can be
// calculated as index nested loop joins. It transforms the tree by specifying
// the algorithm to use in such JoinSteps and also by eliminating
// TableAccessFullStep corresponding to the side of the join where the index
// will be used.
class IndexJoinPass extends RewritePass {
    constructor() {
        super();
    }
    rewrite(rootNode, queryContext) {
        this.rootNode = rootNode;
        if (!this.canOptimize(queryContext)) {
            return rootNode;
        }
        const joinSteps = TreeHelper.find(rootNode, (node) => node instanceof JoinStep);
        joinSteps.forEach(this.processJoinStep, this);
        return this.rootNode;
    }
    canOptimize(queryContext) {
        return queryContext.from.length > 1;
    }
    // Examines the given join step and decides whether it should be executed as
    // an index-join.
    processJoinStep(joinStep) {
        // Currently ONLY inner EQ join can be calculated using index join.
        if (joinStep.predicate.evaluatorType !== EvalType.EQ
            || joinStep.isOuterJoin) {
            return;
        }
        // Finds which of the two joined columns corresponds to the given table.
        const getColumnForTable = (table) => {
            return table.getEffectiveName() === joinStep.predicate.rightColumn.getTable().getEffectiveName() ? joinStep.predicate.rightColumn : joinStep.predicate.leftColumn;
        };
        // Extracts the candidate indexed column for the given execution step node.
        const getCandidate = (executionStep) => {
            // In order to use and index for implementing a join, the entire relation
            // must be fed to the JoinStep, otherwise the index can't be used.
            if (!(executionStep instanceof TableAccessFullStep)) {
                return null;
            }
            const candidateColumn = getColumnForTable(executionStep.table);
            return candidateColumn.getIndex() === null ? null : candidateColumn;
        };
        const leftCandidate = getCandidate(joinStep.getChildAt(0));
        const rightCandidate = getCandidate(joinStep.getChildAt(1));
        if (leftCandidate === null && rightCandidate === null) {
            // None of the two involved columns can be used for an index join.
            return;
        }
        // TODO(dpapad): If both columns can be used, currently the right column is
        // preferred. A smarter decision is to use the column corresponding to the
        // bigger incoming relation, such that index accesses are minimized. Use
        // index stats to figure out the size of each relation.
        const chosenColumn = rightCandidate !== null ? rightCandidate : leftCandidate;
        joinStep.markAsIndexJoin(chosenColumn);
        const dummyRelation = new Relation([], [chosenColumn.getTable().getEffectiveName()]);
        joinStep.replaceChildAt(new NoOpStep([dummyRelation]), chosenColumn === leftCandidate ? 0 : 1);
    }
}
class BoundedKeyRangeCalculator {
    // |this.predicateMap| is a map where a key is the name of an indexed column
    // and the values are predicates IDs that correspond to that column. The IDs
    // are used to grab the actual predicates from the given query context, such
    // that this calculator can be re-used with different query contexts.
    constructor(indexSchema, predicateMap) {
        this.indexSchema = indexSchema;
        this.predicateMap = predicateMap;
        this.lastQueryContext = null;
        this.combinations = null;
    }
    getKeyRangeCombinations(queryContext) {
        if (this.lastQueryContext === queryContext) {
            return this.combinations;
        }
        const keyRangeMap = this.calculateKeyRangeMap(queryContext);
        this.fillMissingKeyRanges(keyRangeMap);
        // If this IndexRangeCandidate refers to a single column index there is no
        // need to perform cartesian product, since there is only one dimension.
        this.combinations = this.indexSchema.columns.length === 1 ? Array.from(keyRangeMap.values())[0].getValues() : this.calculateCartesianProduct(this.getSortedKeyRangeSets(keyRangeMap));
        this.lastQueryContext = queryContext;
        return this.combinations;
    }
    // Builds a map where a key is an indexed column name and the value is
    // the SingleKeyRangeSet, created by considering all provided predicates.
    calculateKeyRangeMap(queryContext) {
        const keyRangeMap = new Map();
        Array.from(this.predicateMap.keys()).forEach((columnName) => {
            const predicateIds = this.predicateMap.get(columnName);
            const predicates = predicateIds.map((predicateId) => {
                return queryContext.getPredicate(predicateId);
            }, this);
            let keyRangeSetSoFar = new SingleKeyRangeSet([SingleKeyRange.all()]);
            predicates.forEach((predicate) => {
                keyRangeSetSoFar = SingleKeyRangeSet.intersect(keyRangeSetSoFar, predicate.toKeyRange());
            });
            keyRangeMap.set(columnName, keyRangeSetSoFar);
        }, this);
        return keyRangeMap;
    }
    // Traverses the indexed columns in reverse order and fills in an "all"
    // SingleKeyRangeSet where possible in the provided map.
    // Example1: Assume that the indexed columns are ['A', 'B', 'C'] and A is
    // already bound, but B and C are unbound. Key ranges for B and C will be
    // filled in with an "all" key range.
    // Example2: Assume that the indexed columns are ['A', 'B', 'C', 'D'] and A, C
    // are already bound, but B and D are unbound. Key ranges only for D will be
    // filled in. In practice such a case will have already been rejected by
    // IndexRangeCandidate#isUsable and should never occur here.
    fillMissingKeyRanges(keyRangeMap) {
        const getAllKeyRange = () => new SingleKeyRangeSet([SingleKeyRange.all()]);
        for (let i = this.indexSchema.columns.length - 1; i >= 0; i--) {
            const column = this.indexSchema.columns[i];
            const keyRangeSet = keyRangeMap.get(column.schema.getName()) || null;
            if (keyRangeSet !== null) {
                break;
            }
            keyRangeMap.set(column.schema.getName(), getAllKeyRange());
        }
    }
    // Sorts the key range sets corresponding to this index's columns according to
    // the column order of the index schema.
    getSortedKeyRangeSets(keyRangeMap) {
        const sortHelper = new Map();
        let priority = 0;
        this.indexSchema.columns.forEach((column) => {
            sortHelper.set(column.schema.getName(), priority);
            priority++;
        });
        const sortedColumnNames = Array.from(keyRangeMap.keys()).sort((a, b) => (sortHelper.get(a) || 0) - (sortHelper.get(b) || 0));
        return sortedColumnNames.map((columnName) => keyRangeMap.get(columnName));
    }
    // Finds the cartesian product of a collection of SingleKeyRangeSets.
    // |keyRangeSets| is a SingleKeyRangeSet at position i in the input array
    // corresponds to all possible values for the ith dimension in the
    // N-dimensional space (where N is the number of columns in the cross-column
    // index).
    // Returns the cross-column key range combinations.
    calculateCartesianProduct(keyRangeSets) {
        assert(keyRangeSets.length > 1, "Should only be called for cross-column indices.");
        const keyRangeSetsAsArrays = keyRangeSets.map((keyRangeSet) => keyRangeSet.getValues());
        return ArrayHelper.product(keyRangeSetsAsArrays);
    }
}
class IndexRangeCandidate {
    constructor(indexStore, indexSchema) {
        this.indexStore = indexStore;
        this.indexSchema = indexSchema;
        this.indexedColumnNames = new Set(this.indexSchema.columns.map((col) => col.schema.getName()));
        this.predicateMap = null;
        this.keyRangeCalculator = null;
    }
    // The predicates that were consumed by this candidate.
    getPredicateIds() {
        return this.predicateMap ? this.predicateMap.values() : [];
    }
    getKeyRangeCalculator() {
        assert(this.predicateMap !== null);
        if (this.keyRangeCalculator === null) {
            this.keyRangeCalculator = new BoundedKeyRangeCalculator(this.indexSchema, this.predicateMap);
        }
        return this.keyRangeCalculator;
    }
    // Finds which predicates are related to the index schema corresponding to
    // this IndexRangeCandidate.
    consumePredicates(predicates) {
        predicates.forEach((predicate) => {
            // If predicate is a ValuePredicate there in only one referred column. If
            // predicate is an OR CombinedPredicate, then it must be referring to a
            // single column (enforced by isKeyRangeCompatible()).
            const columnName = predicate.getColumns()[0].getName();
            if (this.indexedColumnNames.has(columnName)) {
                if (this.predicateMap === null) {
                    this.predicateMap = new MapSet();
                }
                this.predicateMap.set(columnName, predicate.getId());
            }
        }, this);
    }
    // Whether this candidate can actually be used for an IndexRangeScanStep
    // optimization. Sometimes after building the candidate it turns out that it
    // cannot be used. For example consider a cross column index on columns
    // ['A', 'B'] and a query that only binds the key range of the 2nd
    // dimension B.
    isUsable() {
        if (this.predicateMap === null) {
            // If the map was never initialized, it means that no predicate matched
            // this index schema columns.
            return false;
        }
        let unboundColumnFound = false;
        let isUsable = true;
        this.indexSchema.columns.every((column) => {
            const isBound = this.predicateMap.has(column.schema.getName());
            if (unboundColumnFound && isBound) {
                isUsable = false;
                return false;
            }
            if (!isBound) {
                unboundColumnFound = true;
            }
            return true;
        }, this);
        return isUsable;
    }
    calculateCost(queryContext) {
        const combinations = this.getKeyRangeCalculator().getKeyRangeCombinations(queryContext);
        const indexData = this.indexStore.get(this.indexSchema.getNormalizedName());
        return combinations.reduce((costSoFar, combination) => {
            return costSoFar + indexData.cost(combination);
        }, 0);
    }
}
// The maximum percent of
// 1) values an EvalType.IN predicate can have or
// 2) children an OR CombinedPredicate can have
// to still be considered for leveraging an index, with respect to the total
// number of rows in the table.
// For each one of the values/children an index query will be performed, so the
// trade-off here is that too many index queries can be slower than simply doing
// a full table scan. This constant has been determined by trial and error.
const INDEX_QUERY_THRESHOLD_PERCENT = 0.02;
class IndexCostEstimator {
    constructor(indexStore, tableSchema) {
        this.indexStore = indexStore;
        this.tableSchema = tableSchema;
    }
    chooseIndexFor(queryContext, predicates) {
        const candidatePredicates = predicates.filter(this.isCandidate, this);
        if (candidatePredicates.length === 0) {
            return null;
        }
        const indexRangeCandidates = this.generateIndexRangeCandidates(candidatePredicates);
        if (indexRangeCandidates.length === 0) {
            return null;
        }
        // If there is only one candidate there is no need to evaluate the cost.
        if (indexRangeCandidates.length === 1) {
            return indexRangeCandidates[0];
        }
        let minCost = Number.MAX_VALUE;
        return indexRangeCandidates.reduce((prev, curr) => {
            const cost = curr.calculateCost(queryContext);
            if (cost < minCost) {
                minCost = cost;
                return curr;
            }
            return prev;
        }, null);
    }
    // Returns the number of Index#getRange queries that can be performed faster
    // than scanning the entire table instead.
    getIndexQueryThreshold() {
        const rowIdIndex = this.indexStore.get(this.tableSchema.getRowIdIndexName());
        return Math.floor(rowIdIndex.stats().totalRows * INDEX_QUERY_THRESHOLD_PERCENT);
    }
    generateIndexRangeCandidates(predicates) {
        const indexSchemas = this.tableSchema.getIndices();
        return indexSchemas
            .map((indexSchema) => {
            const indexRangeCandidate = new IndexRangeCandidate(this.indexStore, indexSchema);
            indexRangeCandidate.consumePredicates(predicates);
            return indexRangeCandidate;
        }, this)
            .filter((indexRangeCandidate) => indexRangeCandidate.isUsable());
    }
    isCandidate(predicate) {
        if (predicate instanceof ValuePredicate) {
            return this.isCandidateValuePredicate(predicate);
        }
        else if (predicate instanceof CombinedPredicate) {
            return this.isCandidateCombinedPredicate(predicate);
        }
        else {
            return false;
        }
    }
    isCandidateCombinedPredicate(predicate) {
        if (!predicate.isKeyRangeCompatible()) {
            return false;
        }
        const predicateColumn = predicate.getChildAt(0).column;
        if (predicateColumn.getTable() !== this.tableSchema) {
            return false;
        }
        return predicate.getChildCount() <= this.getIndexQueryThreshold();
    }
    isCandidateValuePredicate(predicate) {
        if (!predicate.isKeyRangeCompatible()
            || predicate.column.getTable() !== this.tableSchema) {
            return false;
        }
        if (predicate.evaluatorType === EvalType.IN
            && predicate.peek().length > this.getIndexQueryThreshold()) {
            return false;
        }
        return true;
    }
}
class IndexRangeScanStep extends PhysicalQueryPlanNode {
    // |reverseOrder|: return the results in reverse index order.
    constructor(indexStore, index, keyRangeCalculator, reverseOrder) {
        super(0, ExecType.NO_CHILD);
        this.indexStore = indexStore;
        this.index = index;
        this.keyRangeCalculator = keyRangeCalculator;
        this.reverseOrder = reverseOrder;
        this.useLimit = false;
        this.useSkip = false;
    }
    toString() {
        return (`index_range_scan(${this.index.getNormalizedName()}, ?, `
            + (this.reverseOrder ? "reverse" : "natural")
            + (this.useLimit ? ", limit:?" : "")
            + (this.useSkip ? ", skip:?" : "")
            + ")");
    }
    toContextString(context) {
        let results = this.toString();
        const keyRanges = this.keyRangeCalculator.getKeyRangeCombinations(context);
        results = results.replace("?", keyRanges.toString());
        if (this.useLimit) {
            results = results.replace("?", context.limit.toString());
        }
        if (this.useSkip) {
            results = results.replace("?", context.skip.toString());
        }
        return results;
    }
    execInternal(relations, journal, ctx) {
        const context = ctx;
        const keyRanges = this.keyRangeCalculator.getKeyRangeCombinations(context);
        const index = this.indexStore.get(this.index.getNormalizedName());
        let rowIds;
        if (keyRanges.length === 1
            && keyRanges[0] instanceof SingleKeyRange
            && keyRanges[0].isOnly()) {
            rowIds = IndexHelper.slice(index.get(keyRanges[0].from), false, // Single key will never reverse order.
            this.useLimit ? context.limit : undefined, this.useSkip ? context.skip : undefined);
        }
        else {
            rowIds = index.getRange(keyRanges, this.reverseOrder, this.useLimit ? context.limit : undefined, this.useSkip ? context.skip : undefined);
        }
        const rows = rowIds.map((rowId) => new Row(rowId, {}));
        return [Relation.fromRows(rows, [this.index.tableName])];
    }
}
class SelectStep extends PhysicalQueryPlanNode {
    constructor(predicateId) {
        super(1, ExecType.FIRST_CHILD);
        this.predicateId = predicateId;
    }
    toString() {
        return "select(?)";
    }
    toContextString(context) {
        const predicate = context.getPredicate(this.predicateId);
        return this.toString().replace("?", predicate.toString());
    }
    execInternal(relations, journal, context) {
        // context must be provided for SelectStep.
        const predicate = context.getPredicate(this.predicateId);
        return [predicate.eval(relations[0])];
    }
}
class TableAccessByRowIdStep extends PhysicalQueryPlanNode {
    constructor(cache, table) {
        super(1, ExecType.FIRST_CHILD);
        this.cache = cache;
        this.table = table;
    }
    toString() {
        return `table_access_by_row_id(${this.table.getName()})`;
    }
    execInternal(relations, journal, ctx) {
        return [
            Relation.fromRows(this.cache.getMany(relations[0].getRowIds()), [
                this.table.getEffectiveName()
            ])
        ];
    }
}
//  An optimization pass that detects if there are any indices that can be used
// in order to avoid full table scan.
class IndexRangeScanPass extends RewritePass {
    constructor(indexStore, cache) {
        super();
        this.indexStore = indexStore;
        this.cache = cache;
    }
    rewrite(rootNode, queryContext) {
        this.rootNode = rootNode;
        const tableAccessFullSteps = TreeHelper.find(rootNode, (node) => node instanceof TableAccessFullStep);
        tableAccessFullSteps.forEach((tableAccessFullStep) => {
            const selectStepsCandidates = this.findSelectSteps(tableAccessFullStep);
            if (selectStepsCandidates.length === 0) {
                return;
            }
            const costEstimator = new IndexCostEstimator(this.indexStore, tableAccessFullStep.table);
            const indexRangeCandidate = costEstimator.chooseIndexFor(queryContext, selectStepsCandidates.map((c) => queryContext.getPredicate(c.predicateId)));
            if (indexRangeCandidate === null) {
                // No SelectStep could be optimized for this table.
                return;
            }
            // Creating a temporary mapping from Predicate to SelectStep, such that
            // the predicates that can be replaced by an index-range scan can be
            // mapped back to SelectStep nodes.
            const predicateToSelectStepMap = new Map();
            selectStepsCandidates.forEach((selectStep) => {
                predicateToSelectStepMap.set(selectStep.predicateId, selectStep);
            }, this);
            this.rootNode = this.replaceWithIndexRangeScanStep(indexRangeCandidate, predicateToSelectStepMap, tableAccessFullStep);
        }, this);
        return this.rootNode;
    }
    // Finds all the SelectStep instances that exist in the tree above the given
    // node and are eligible for optimization.
    findSelectSteps(startNode) {
        const selectSteps = [];
        let node = startNode.getParent();
        while (node) {
            if (node instanceof SelectStep) {
                selectSteps.push(node);
            }
            else if (node instanceof JoinStep) {
                // Stop searching if a join node is traversed.
                break;
            }
            node = node.getParent();
        }
        return selectSteps;
    }
    // Replaces all the SelectSteps that can be calculated by using the chosen
    // index with two new steps an IndexRangeScanStep and a
    // TableAccessByRowIdStep.
    replaceWithIndexRangeScanStep(indexRangeCandidate, predicateToSelectStepMap, tableAccessFullStep) {
        const predicateIds = indexRangeCandidate.getPredicateIds();
        const selectSteps = predicateIds.map((predicateId) => {
            return predicateToSelectStepMap.get(predicateId);
        });
        selectSteps.forEach(TreeHelper.removeNode);
        const indexRangeScanStep = new IndexRangeScanStep(this.indexStore, indexRangeCandidate.indexSchema, indexRangeCandidate.getKeyRangeCalculator(), false /* reverseOrder */);
        const tableAccessByRowIdStep = new TableAccessByRowIdStep(this.cache, tableAccessFullStep.table);
        tableAccessByRowIdStep.addChild(indexRangeScanStep);
        TreeHelper.replaceNodeWithChain(tableAccessFullStep, tableAccessByRowIdStep, indexRangeScanStep);
        return indexRangeScanStep.getRoot();
    }
}
class LimitStep extends PhysicalQueryPlanNode {
    constructor() {
        super(1, ExecType.FIRST_CHILD);
    }
    toString() {
        return "limit(?)";
    }
    toContextString(context) {
        return this.toString().replace("?", context.limit.toString());
    }
    execInternal(relations, journal, context) {
        // opt_context must be provided for LimitStep.
        relations[0].entries.splice(context.limit);
        return relations;
    }
}
class OrderByStep extends PhysicalQueryPlanNode {
    constructor(orderBy) {
        super(PhysicalQueryPlanNode.ANY, ExecType.FIRST_CHILD);
        this.orderBy = orderBy;
    }
    toString() {
        return `order_by(${SelectContext.orderByToString(this.orderBy)})`;
    }
    execInternal(relations, journal, context) {
        if (relations.length === 1) {
            const distinctColumn = this.findDistinctColumn(relations[0]);
            // If such a column exists, sort the results of the lf.fn.distinct
            // aggregator instead, since this is what will be used in the returned
            // result.
            const relationToSort = distinctColumn === null ? relations[0] : relations[0].getAggregationResult(distinctColumn);
            relationToSort.entries.sort(this.entryComparatorFn.bind(this));
        }
        else {
            relations.sort(this.relationComparatorFn.bind(this));
        }
        return relations;
    }
    // Determines whether sorting is requested on a column that has been
    // aggregated with lf.fn.distinct (if any).
    findDistinctColumn(relation) {
        let distinctColumn = null;
        this.orderBy.every((entry) => {
            const tempDistinctColumn = fn.distinct(entry.column);
            if (relation.hasAggregationResult(tempDistinctColumn)) {
                distinctColumn = tempDistinctColumn;
                return false;
            }
            return true;
        }, this);
        return distinctColumn;
    }
    // Returns -1 if a should precede b, 1 if b should precede a, 0 if a and b
    // are determined to be equal.
    comparator(getLeftPayload, getRightPayload) {
        let order;
        let leftPayload = null;
        let rightPayload = null;
        let comparisonIndex = -1;
        do {
            comparisonIndex++;
            const column = this.orderBy[comparisonIndex].column;
            order = this.orderBy[comparisonIndex].order;
            leftPayload = getLeftPayload(column);
            rightPayload = getRightPayload(column);
        } while (leftPayload === rightPayload
            && comparisonIndex + 1 < this.orderBy.length);
        let result = leftPayload < rightPayload ? -1 : leftPayload > rightPayload ? 1 : 0;
        result = order === Order.ASC ? result : -result;
        return result;
    }
    entryComparatorFn(lhs, rhs) {
        // NOTE: Avoiding on purpose to create a getPayload(operand, column) method
        // here, and binding it once to lhs and once to rhs, because it turns out
        // that Function.bind() is significantly hurting performance (measured on
        // Chrome 40).
        return this.comparator((column) => lhs.getField(column), (column) => rhs.getField(column));
    }
    relationComparatorFn(lhs, rhs) {
        // NOTE: See NOTE in entryComparatorFn_ on why two separate functions are
        // passed in this.comparator_ instead of using one method and binding to lhs
        // and to rhs respectively.
        return this.comparator((column) => {
            // If relations are sorted based on a non-aggregated column, choose
            // the last entry of each relation as a representative row (same as
            // SQLite).
            return (column instanceof AggregatedColumn ? lhs.getAggregationResult(column) : lhs.entries[lhs.entries.length - 1].getField(column));
        }, (column) => {
            return (column instanceof AggregatedColumn ? rhs.getAggregationResult(column) : rhs.entries[rhs.entries.length - 1].getField(column));
        });
    }
}
class RelationTransformer {
    constructor(relation, columns) {
        this.relation = relation;
        this.columns = columns;
    }
    // Transforms a list of relations to a single relation. Each input relation is
    // transformed to a single entry on the final relation.
    // Note: Projection columns must include at least one aggregated column.
    // |relations|: The relations to be transformed.
    // |columns|: The columns to include in the transformed relation.
    static transformMany(relations, columns) {
        const entries = relations.map((relation) => {
            const relationTransformer = new RelationTransformer(relation, columns);
            const singleEntryRelation = relationTransformer.getTransformed();
            return singleEntryRelation.entries[0];
        });
        return new Relation(entries, relations[0].getTables());
    }
    // Calculates a transformed Relation based on the columns that are requested.
    // The type of the requested columns affect the output (non-aggregate only VS
    // aggregate and non-aggregate mixed up).
    getTransformed() {
        // Determine whether any aggregated columns have been requested.
        const aggregatedColumnsExist = this.columns.some((column) => column instanceof AggregatedColumn);
        return aggregatedColumnsExist ? this.handleAggregatedColumns() : this.handleNonAggregatedColumns();
    }
    // Generates the transformed relation for the case where the requested columns
    // include any aggregated columns.
    handleAggregatedColumns() {
        // If the only aggregator that was used was DISTINCT, return the relation
        // corresponding to it.
        if (this.columns.length === 1
            && this.columns[0].aggregatorType === FnType.DISTINCT) {
            const distinctRelation = this.relation.getAggregationResult(this.columns[0]);
            const newEntries = distinctRelation.entries.map((e) => {
                const newEntry = new RelationEntry(new Row(Row.DUMMY_ID, {}), this.relation.isPrefixApplied());
                newEntry.setField(this.columns[0], e.getField(this.columns[0].child));
                return newEntry;
            }, this);
            return new Relation(newEntries, []);
        }
        // Generate a new relation where there is only one entry, and within that
        // entry there is exactly one field per column.
        const entry = new RelationEntry(new Row(Row.DUMMY_ID, {}), this.relation.isPrefixApplied());
        this.columns.forEach((column) => {
            const value = column instanceof AggregatedColumn ? this.relation.getAggregationResult(column) : this.relation.entries[0].getField(column);
            entry.setField(column, value);
        }, this);
        return new Relation([entry], this.relation.getTables());
    }
    // Generates the transformed relation for the case where the requested columns
    // include only non-aggregated columns.
    handleNonAggregatedColumns() {
        // Generate a new relation where each entry includes only the specified
        // columns.
        const transformedEntries = new Array(this.relation.entries.length);
        const isPrefixApplied = this.relation.isPrefixApplied();
        this.relation.entries.forEach((entry, index) => {
            transformedEntries[index] = new RelationEntry(new Row(entry.row.id(), {}), isPrefixApplied);
            this.columns.forEach((column) => {
                transformedEntries[index].setField(column, entry.getField(column));
            }, this);
        }, this);
        return new Relation(transformedEntries, this.relation.getTables());
    }
}
class ProjectStep extends PhysicalQueryPlanNode {
    constructor(columns, groupByColumns) {
        super(PhysicalQueryPlanNode.ANY, ExecType.FIRST_CHILD);
        this.columns = columns;
        this.groupByColumns = groupByColumns;
    }
    toString() {
        let postfix = "";
        if (this.groupByColumns) {
            const groupBy = this.groupByColumns
                .map((col) => col.getNormalizedName())
                .join(", ");
            postfix = `, groupBy(${groupBy})`;
        }
        return `project(${this.columns.toString()}${postfix})`;
    }
    execInternal(relations, journal, context) {
        if (relations.length === 0) {
            return [Relation.createEmpty()];
        }
        else if (relations.length === 1) {
            return [this.execNonGroupByProjection(relations[0])];
        }
        else {
            return [this.execGroupByProjection(relations)];
        }
    }
    // Returns whether any aggregators (either columns or groupBy) have been
    // specified.
    hasAggregators() {
        const hasAggregators = this.columns.some((column) => {
            return column instanceof AggregatedColumn;
        });
        return hasAggregators || this.groupByColumns !== null;
    }
    // Calculates the final relation for the case where GROUP_BY exists.
    execGroupByProjection(relations) {
        return RelationTransformer.transformMany(relations, this.columns);
    }
    // Calculates the final relation for the case where no GROUP_BY exists.
    execNonGroupByProjection(relation) {
        if (this.columns.length === 0) {
            return relation;
        }
        const relationTransformer = new RelationTransformer(relation, this.columns);
        return relationTransformer.getTransformed();
    }
}
class SkipStep extends PhysicalQueryPlanNode {
    constructor() {
        super(1, ExecType.FIRST_CHILD);
    }
    toString() {
        return "skip(?)";
    }
    toContextString(context) {
        return this.toString().replace("?", context.skip.toString());
    }
    execInternal(relations, journal, context) {
        return [
            new Relation(relations[0].entries.slice(context.skip), relations[0].getTables())
        ];
    }
}
class LimitSkipByIndexPass extends RewritePass {
    constructor() {
        super();
    }
    rewrite(rootNode, queryContext) {
        if (queryContext.limit === undefined && queryContext.skip === undefined) {
            // No LIMIT or SKIP exists.
            return rootNode;
        }
        const indexRangeScanStep = this.findIndexRangeScanStep(rootNode);
        if (indexRangeScanStep === null) {
            // No IndexRangeScanStep that can be leveraged was found.
            return rootNode;
        }
        const nodes = TreeHelper.find(rootNode, (node) => node instanceof LimitStep || node instanceof SkipStep);
        nodes.forEach((node) => {
            this.mergeToIndexRangeScanStep(node, indexRangeScanStep);
        }, this);
        return indexRangeScanStep.getRoot();
    }
    // Merges a LimitStep or SkipStep to the given IndexRangeScanStep.
    mergeToIndexRangeScanStep(node, indexRangeScanStep) {
        if (node instanceof LimitStep) {
            indexRangeScanStep.useLimit = true;
        }
        else {
            indexRangeScanStep.useSkip = true;
        }
        return TreeHelper.removeNode(node).parent;
    }
    // Finds any existing IndexRangeScanStep that can be leveraged to limit and
    // skip results.
    findIndexRangeScanStep(rootNode) {
        const filterFn = (node) => {
            return node instanceof IndexRangeScanStep;
        };
        // LIMIT and SKIP needs to be executed after
        //  - projections that include either groupBy or aggregators,
        //  - joins/cross-products,
        //  - selections,
        //  - sorting
        // have been calculated. Therefore if such nodes exist this optimization can
        // not be applied.
        const stopFn = (node) => {
            const hasAggregators = node instanceof ProjectStep && node.hasAggregators();
            return (hasAggregators
                || node instanceof OrderByStep
                || node.getChildCount() !== 1
                || node instanceof SelectStep);
        };
        const indexRangeScanSteps = TreeHelper.find(rootNode, filterFn, stopFn);
        return indexRangeScanSteps.length > 0 ? indexRangeScanSteps[0] : null;
    }
}
class MultiIndexRangeScanStep extends PhysicalQueryPlanNode {
    constructor() {
        super(PhysicalQueryPlanNode.ANY, ExecType.ALL);
    }
    toString() {
        return "multi_index_range_scan()";
    }
    execInternal(relations, journal, ctx) {
        // Calculate a new Relation that includes the union of the entries of all
        // relations. All child relations must be including rows from the same
        // table.
        const entriesUnion = new Map();
        relations.forEach((relation) => {
            relation.entries.forEach((entry) => {
                entriesUnion.set(entry.row.id(), entry);
            });
        });
        const entries = Array.from(entriesUnion.values());
        return [new Relation(entries, relations[0].getTables())];
    }
}
// An optimization pass that detects if there are any OR predicates that
// 1) Refer to a single table.
// 2) Refer to multiple columns.
// 3) All referred columns  are indexed.
//
// If such predicates are found the tree is transformed to leverage indices.
// OR predicates that refer to a single column are already optimized by the
// previous optimization pass IndexRangeScanPass.
class MultiColumnOrPass extends RewritePass {
    constructor(indexStore, cache) {
        super();
        this.indexStore = indexStore;
        this.cache = cache;
    }
    rewrite(rootNode, queryContext) {
        this.rootNode = rootNode;
        const orSelectSteps = this.findOrPredicates(queryContext);
        if (orSelectSteps.length === 0) {
            // No OR predicates exist, this optimization does not apply.
            return this.rootNode;
        }
        // In the presence of multiple candidate OR predicates currently the first
        // one that can leverage indices is chosen.
        // TODO(dpapad): Compare the index range scan cost for each of the
        // predicates and select the fastest one.
        let indexRangeCandidates = null;
        let orSelectStep = null;
        let i = 0;
        do {
            orSelectStep = orSelectSteps[i++];
            indexRangeCandidates = this.findIndexRangeCandidates(orSelectStep, queryContext);
        } while (indexRangeCandidates === null && i < orSelectSteps.length);
        if (indexRangeCandidates === null) {
            return this.rootNode;
        }
        const tableAccessFullStep = this.findTableAccessFullStep(indexRangeCandidates[0].indexSchema.tableName);
        if (tableAccessFullStep === null) {
            // No TableAccessFullStep exists, an index is leveraged already, this
            // optimization does not apply.
            return this.rootNode;
        }
        this.rootNode = this.replaceWithIndexRangeScan(orSelectStep, tableAccessFullStep, indexRangeCandidates);
        return this.rootNode;
    }
    // Find SelectStep instances in the tree corresponding to OR predicates.
    findOrPredicates(queryContext) {
        const filterFn = (node) => {
            if (!(node instanceof SelectStep)) {
                return false;
            }
            const predicate = queryContext.getPredicate(node.predicateId);
            return (predicate instanceof CombinedPredicate
                && predicate.operator === Operator.OR);
        };
        return TreeHelper.find(this.rootNode, filterFn);
    }
    // Find the table access step corresponding to the given table, or null if
    // such a step does not exist.
    findTableAccessFullStep(tableName) {
        return (TreeHelper.find(this.rootNode, (node) => node instanceof TableAccessFullStep
            && node.table.getName() === tableName)[0] || null);
    }
    // Returns the IndexRangeCandidates corresponding to the given multi-column
    // OR predicate. Null is returned if no indices can be leveraged for the
    // given predicate.
    findIndexRangeCandidates(selectStep, queryContext) {
        const predicate = queryContext.getPredicate(selectStep.predicateId);
        const tables = predicate.getTables();
        if (tables.size !== 1) {
            // Predicates which refer to more than one table are not eligible for this
            // optimization.
            return null;
        }
        const tableSchema = Array.from(tables.values())[0];
        const indexCostEstimator = new IndexCostEstimator(this.indexStore, tableSchema);
        let indexRangeCandidates = null;
        const allIndexed = predicate.getChildren().every((childPredicate) => {
            const indexRangeCandidate = indexCostEstimator.chooseIndexFor(queryContext, [childPredicate]);
            if (indexRangeCandidate !== null) {
                indexRangeCandidates === null ? indexRangeCandidates = [indexRangeCandidate] : indexRangeCandidates.push(indexRangeCandidate);
            }
            return indexRangeCandidate !== null;
        });
        return allIndexed ? indexRangeCandidates : null;
    }
    // Replaces the given SelectStep with a MultiIndexRangeScanStep
    // (and children).
    replaceWithIndexRangeScan(selectStep, tableAccessFullStep, indexRangeCandidates) {
        const tableAccessByRowIdStep = new TableAccessByRowIdStep(this.cache, tableAccessFullStep.table);
        const multiIndexRangeScanStep = new MultiIndexRangeScanStep();
        tableAccessByRowIdStep.addChild(multiIndexRangeScanStep);
        indexRangeCandidates.forEach((candidate) => {
            const indexRangeScanStep = new IndexRangeScanStep(this.indexStore, candidate.indexSchema, candidate.getKeyRangeCalculator(), false /* reverseOrder */);
            multiIndexRangeScanStep.addChild(indexRangeScanStep);
        }, this);
        TreeHelper.removeNode(selectStep);
        TreeHelper.replaceNodeWithChain(tableAccessFullStep, tableAccessByRowIdStep, multiIndexRangeScanStep);
        return multiIndexRangeScanStep.getRoot();
    }
}
class UnboundedKeyRangeCalculator {
    constructor(indexSchema) {
        this.indexSchema = indexSchema;
    }
    getKeyRangeCombinations(queryContext) {
        return this.indexSchema.columns.length === 1 ? [SingleKeyRange.all()] : [this.indexSchema.columns.map(() => SingleKeyRange.all())];
    }
}
// The OrderByIndexPass is responsible for modifying a tree that has a
// OrderByStep node to an equivalent tree that leverages indices to perform
// sorting.
class OrderByIndexPass extends RewritePass {
    constructor(indexStore, cache) {
        super();
        this.indexStore = indexStore;
        this.cache = cache;
    }
    rewrite(rootNode, queryContext) {
        const orderByStep = this.findOrderByStep(rootNode, queryContext);
        if (orderByStep === null) {
            // No OrderByStep was found.
            return rootNode;
        }
        let newSubtreeRoot = this.applyTableAccessFullOptimization(orderByStep);
        if (newSubtreeRoot === orderByStep) {
            newSubtreeRoot = this.applyIndexRangeScanStepOptimization(orderByStep);
        }
        return newSubtreeRoot.getRoot();
    }
    // Attempts to replace the OrderByStep with a new IndexRangeScanStep.
    applyTableAccessFullOptimization(orderByStep) {
        let rootNode = orderByStep;
        const tableAccessFullStep = this.findTableAccessFullStep(orderByStep.getChildAt(0));
        if (tableAccessFullStep !== null) {
            const indexRangeCandidate = this.findIndexCandidateForOrderBy(tableAccessFullStep.table, orderByStep.orderBy);
            if (indexRangeCandidate === null) {
                // Could not find an index schema that can be leveraged.
                return rootNode;
            }
            const indexRangeScanStep = new IndexRangeScanStep(this.indexStore, indexRangeCandidate.indexSchema, new UnboundedKeyRangeCalculator(indexRangeCandidate.indexSchema), indexRangeCandidate.isReverse);
            const tableAccessByRowIdStep = new TableAccessByRowIdStep(this.cache, tableAccessFullStep.table);
            tableAccessByRowIdStep.addChild(indexRangeScanStep);
            TreeHelper.removeNode(orderByStep);
            rootNode = TreeHelper.replaceNodeWithChain(tableAccessFullStep, tableAccessByRowIdStep, indexRangeScanStep);
        }
        return rootNode;
    }
    // Attempts to replace the OrderByStep with an existing IndexRangeScanStep.
    applyIndexRangeScanStepOptimization(orderByStep) {
        let rootNode = orderByStep;
        const indexRangeScanStep = this.findIndexRangeScanStep(orderByStep.getChildAt(0));
        if (indexRangeScanStep !== null) {
            const indexRangeCandidate = this.getIndexCandidateForIndexSchema(indexRangeScanStep.index, orderByStep.orderBy);
            if (indexRangeCandidate === null) {
                return rootNode;
            }
            indexRangeScanStep.reverseOrder = indexRangeCandidate.isReverse;
            rootNode = TreeHelper.removeNode(orderByStep)
                .parent;
        }
        return rootNode;
    }
    // Finds any existing IndexRangeScanStep that can potentially be used to
    // produce the requested ordering instead of the OrderByStep.
    findIndexRangeScanStep(rootNode) {
        const filterFn = (node) => node instanceof IndexRangeScanStep;
        // CrossProductStep/JoinStep/MultiIndexRangeScanStep nodes have more than
        // one child, and mess up the ordering of results. Therefore if such nodes
        // exist this optimization can not be applied.
        const stopFn = (node) => node.getChildCount() !== 1;
        const indexRangeScanSteps = TreeHelper.find(rootNode, filterFn, stopFn);
        return indexRangeScanSteps.length > 0 ? indexRangeScanSteps[0] : null;
    }
    // Finds any existing TableAccessFullStep that can potentially be converted to
    // an IndexRangeScanStep instead of using an explicit OrderByStep.
    findTableAccessFullStep(rootNode) {
        const filterFn = (node) => node instanceof TableAccessFullStep;
        // CrossProductStep and JoinStep nodes have more than one child, and mess up
        // the ordering of results. Therefore if such nodes exist this optimization
        // can not be applied.
        const stopFn = (node) => node.getChildCount() !== 1;
        const tableAccessFullSteps = TreeHelper.find(rootNode, filterFn, stopFn);
        return tableAccessFullSteps.length > 0 ? tableAccessFullSteps[0] : null;
    }
    // Finds the OrderByStep if it exists in the tree.
    findOrderByStep(rootNode, queryContext) {
        if (queryContext.orderBy === undefined) {
            // No ORDER BY exists.
            return null;
        }
        return TreeHelper.find(rootNode, (node) => node instanceof OrderByStep)[0];
    }
    findIndexCandidateForOrderBy(tableSchema, orderBy) {
        let indexCandidate = null;
        const indexSchemas = tableSchema.getIndices();
        for (let i = 0; i < indexSchemas.length && indexCandidate === null; i++) {
            indexCandidate = this.getIndexCandidateForIndexSchema(indexSchemas[i], orderBy);
        }
        return indexCandidate;
    }
    // Determines whether the given index schema can be leveraged for producing
    // the ordering specified by the given orderBy.
    getIndexCandidateForIndexSchema(indexSchema, orderBy) {
        // First find an index schema which includes all columns to be sorted in the
        // same order.
        const columnsMatch = indexSchema.columns.length === orderBy.length
            && orderBy.every((singleOrderBy, j) => {
                const indexedColumn = indexSchema.columns[j];
                return (singleOrderBy.column.getName() === indexedColumn.schema.getName());
            });
        if (!columnsMatch) {
            return null;
        }
        // If columns match, determine whether the requested ordering within each
        // column matches the index, either in natural or reverse order.
        const isNaturalOrReverse = this.checkOrder(orderBy, indexSchema);
        if (!isNaturalOrReverse[0] && !isNaturalOrReverse[1]) {
            return null;
        }
        return {
            "indexSchema": indexSchema,
            "isReverse": isNaturalOrReverse[1]
        };
    }
    // Compares the order of each column in the orderBy and the indexSchema and
    // determines whether it is equal to the indexSchema 'natural' or 'reverse'
    // order.
    // Returns An array of 2 elements, where 1st element corresponds to isNatural
    // and 2nd to isReverse.
    checkOrder(orderBy, indexSchema) {
        // Converting orderBy orders to a bitmask.
        const ordersLeftBitmask = orderBy.reduce((soFar, columnOrderBy) => {
            return soFar << 1 | (columnOrderBy.order === Order.DESC ? 0 : 1);
        }, 0);
        // Converting indexSchema orders to a bitmask.
        const ordersRightBitmask = indexSchema.columns.reduce((soFar, indexedColumn) => {
            return soFar << 1 | (indexedColumn.order === Order.DESC ? 0 : 1);
        }, 0);
        const xorBitmask = ordersLeftBitmask ^ ordersRightBitmask;
        const isNatural = xorBitmask === 0;
        const isReverse = xorBitmask === 2 ** Math.max(orderBy.length, indexSchema.columns.length) - 1;
        return [isNatural, isReverse];
    }
}
// Rewrites the logical query plan such that the resulting physical query plan
// is faster to calculate than the original "naive" plan.
class PhysicalPlanRewriter {
    constructor(rootNode, queryContext, rewritePasses) {
        this.rootNode = rootNode;
        this.queryContext = queryContext;
        this.rewritePasses = rewritePasses;
    }
    // Rewrites the physical plan.
    generate() {
        this.rewritePasses.forEach((rewritePass) => {
            this.rootNode = rewritePass.rewrite(this.rootNode, this.queryContext);
        }, this);
        return this.rootNode;
    }
}
class PhysicalPlanFactory {
    //private readonly deleteOptimizationPasses: RewritePass<PhysicalQueryPlanNode>[];
    constructor(indexStore, cache) {
        this.indexStore = indexStore;
        this.cache = cache;
        this.selectOptimizationPasses = [
            new IndexJoinPass(),
            new IndexRangeScanPass(indexStore, cache),
            new MultiColumnOrPass(indexStore, cache),
            new OrderByIndexPass(indexStore, cache),
            new LimitSkipByIndexPass(),
            new GetRowCountPass(indexStore)
        ];
        //this.deleteOptimizationPasses = [new IndexRangeScanPass(global)];
    }
    create(logicalQueryPlan, queryContext) {
        const logicalQueryPlanRoot = logicalQueryPlan.getRoot();
        if (logicalQueryPlanRoot instanceof ProjectNode
            || logicalQueryPlanRoot instanceof LimitNode
            || logicalQueryPlanRoot instanceof SkipNode) {
            return this.createPlan(logicalQueryPlan, queryContext, this.selectOptimizationPasses);
        }
        // Should never get here since all cases are handled above.
        // 8: Unknown query plan node.
        throw new Exception(ErrorCode.UNKNOWN_PLAN_NODE);
    }
    createPlan(logicalPlan, queryContext, rewritePasses) {
        let rootStep = TreeHelper.map(logicalPlan.getRoot(), this.mapFn.bind(this));
        if (rewritePasses !== undefined && rewritePasses !== null) {
            const planRewriter = new PhysicalPlanRewriter(rootStep, queryContext, rewritePasses);
            rootStep = planRewriter.generate();
        }
        return new PhysicalQueryPlan(rootStep, logicalPlan.getScope());
    }
    // Maps each node of a logical execution plan to a corresponding physical
    // execution step.
    mapFn(node) {
        if (node instanceof ProjectNode) {
            return new ProjectStep(node.columns, node.groupByColumns);
        }
        else if (node instanceof GroupByNode) {
            return new GroupByStep(node.columns);
        }
        else if (node instanceof AggregationNode) {
            return new AggregationStep(node.columns);
        }
        else if (node instanceof OrderByNode) {
            return new OrderByStep(node.orderBy);
        }
        else if (node instanceof SkipNode) {
            return new SkipStep();
        }
        else if (node instanceof LimitNode) {
            return new LimitStep();
        }
        else if (node instanceof SelectNode) {
            return new SelectStep(node.predicate.getId());
        }
        else if (node instanceof CrossProductNode) {
            return new CrossProductStep();
        }
        else if (node instanceof JoinNode) {
            return new JoinStep(this.indexStore, this.cache, node.predicate, node.isOuterJoin);
        }
        else if (node instanceof TableAccessNode) {
            return new TableAccessFullStep(this.indexStore, this.cache, node.table);
        }
        // 514: Unknown node type.
        throw new Exception(ErrorCode.UNKNOWN_NODE_TYPE);
    }
}
class DefaultQueryEngine {
    constructor(indexStore, cache) {
        this.logicalPlanFactory = new LogicalPlanFactory();
        this.physicalPlanFactory = new PhysicalPlanFactory(indexStore, cache);
    }
    getPlan(query) {
        const logicalQueryPlan = this.logicalPlanFactory.create(query);
        return this.physicalPlanFactory.create(logicalQueryPlan, query);
    }
}
class ExportTask extends UniqueId {
    constructor(schema, indexStore, cache) {
        super();
        this.schema = schema;
        this.indexStore = indexStore;
        this.cache = cache;
        this.scope = new Set(this.schema.tables());
        this.resolver = new Resolver();
    }
    // Grabs contents from the cache and exports them as a plain object.
    execSync() {
        const tables = {};
        this.schema.tables().forEach((table) => {
            const rowIds = this.indexStore.get(table.getRowIdIndexName()).getRange();
            const payloads = this.cache
                .getMany(rowIds)
                .map((row) => row.payload());
            tables[table.getName()] = payloads;
        });
        return {
            "name": this.schema.name(),
            "tables": tables
        };
    }
    exec() {
        const results = this.execSync();
        const entry = new RelationEntry(new Row(Row.DUMMY_ID, results), true);
        return Promise.resolve([new Relation([entry], [])]);
    }
    getType() {
        return TransactionType.READ_ONLY;
    }
    getScope() {
        return this.scope;
    }
    getResolver() {
        return this.resolver;
    }
    getId() {
        return this.getUniqueNumber();
    }
    getPriority() {
        return TaskPriority.EXPORT_TASK;
    }
}
class LockTableEntry {
    constructor() {
        this.exclusiveLock = null;
        this.reservedReadWriteLock = null;
        this.reservedReadOnlyLocks = null;
        this.sharedLocks = null;
    }
    releaseLock(taskId) {
        if (this.exclusiveLock === taskId) {
            this.exclusiveLock = null;
        }
        if (this.reservedReadWriteLock === taskId) {
            this.reservedReadWriteLock = null;
        }
        if (this.reservedReadOnlyLocks) {
            this.reservedReadOnlyLocks.delete(taskId);
        }
        if (this.sharedLocks) {
            this.sharedLocks.delete(taskId);
        }
    }
    canAcquireLock(taskId, lockType) {
        const noReservedReadOnlyLocksExist = this.reservedReadOnlyLocks === null
            || this.reservedReadOnlyLocks.size === 0;
        if (lockType === LockType.EXCLUSIVE) {
            const noSharedLocksExist = this.sharedLocks === null || this.sharedLocks.size === 0;
            return (noSharedLocksExist
                && noReservedReadOnlyLocksExist
                && this.exclusiveLock === null
                && this.reservedReadWriteLock !== null
                && this.reservedReadWriteLock === taskId);
        }
        else if (lockType === LockType.SHARED) {
            return (this.exclusiveLock === null
                && this.reservedReadWriteLock === null
                && this.reservedReadOnlyLocks !== null
                && this.reservedReadOnlyLocks.has(taskId));
        }
        else if (lockType === LockType.RESERVED_READ_ONLY) {
            return this.reservedReadWriteLock === null;
        }
        else {
            // case of lockType == lf.proc.LockType.RESERVED_READ_WRITE
            return (noReservedReadOnlyLocksExist
                && (this.reservedReadWriteLock === null
                    || this.reservedReadWriteLock === taskId));
        }
    }
    grantLock(taskId, lockType) {
        if (lockType === LockType.EXCLUSIVE) {
            // TODO(dpapad): Assert that reserved lock was held by this taskId.
            this.reservedReadWriteLock = null;
            this.exclusiveLock = taskId;
        }
        else if (lockType === LockType.SHARED) {
            // TODO(dpapad): Assert that no other locked is held by this taskId and
            // that no reserved/exclusive locks exist.
            if (this.sharedLocks === null) {
                this.sharedLocks = new Set();
            }
            this.sharedLocks.add(taskId);
            if (this.reservedReadOnlyLocks === null) {
                this.reservedReadOnlyLocks = new Set();
            }
            this.reservedReadOnlyLocks.delete(taskId);
        }
        else if (lockType === LockType.RESERVED_READ_ONLY) {
            if (this.reservedReadOnlyLocks === null) {
                this.reservedReadOnlyLocks = new Set();
            }
            this.reservedReadOnlyLocks.add(taskId);
        }
        else if (lockType === LockType.RESERVED_READ_WRITE) {
            // TODO(dpapad): Any other assertions here?
            this.reservedReadWriteLock = taskId;
        }
    }
}
// LockManager is responsible for granting locks to tasks. Each lock corresponds
// to a database table.
//
// Four types of locks exist in order to implement a two-phase locking
// algorithm.
// 1) RESERVED_READ_ONLY: Multiple such locks can be granted. It prevents any
//    RESERVED_READ_WRITE and EXCLUSIVE locks from being granted. It needs to be
//    acquired by any task that wants to eventually escalate it to a SHARED
//    lock.
// 2) SHARED: Multiple shared locks can be granted (meant to be used by
//    READ_ONLY tasks). Such tasks must be already holding a RESERVED_READ_ONLY
//    lock.
// 3) RESERVED_READ_WRITE: Granted to a single READ_WRITE task. It prevents
//    further SHARED, RESERVED_READ_ONLY and RESERVED_READ_WRITE locks to be
//    granted, but the underlying table should not be modified yet, until the
//    lock is escalated to an EXCLUSIVE lock.
// 4) EXCLUSIVE: Granted to a single READ_WRITE task. That task must already be
//    holding a RESERVED_READ_WRITE lock. It prevents further SHARED or
//    EXCLUSIVE locks to be granted. It is OK to modify a table while holding
//    such a lock.
class LockManager {
    constructor() {
        this.lockTable = new Map();
    }
    // Returns whether the requested lock was acquired.
    requestLock(taskId, dataItems, lockType) {
        const canAcquireLock = this.canAcquireLock(taskId, dataItems, lockType);
        if (canAcquireLock) {
            this.grantLock(taskId, dataItems, lockType);
        }
        return canAcquireLock;
    }
    releaseLock(taskId, dataItems) {
        dataItems.forEach((dataItem) => {
            this.getEntry(dataItem).releaseLock(taskId);
        });
    }
    // Removes any reserved locks for the given data items. This is needed in
    // order to prioritize a taskId higher than a taskId that already holds a
    // reserved lock.
    clearReservedLocks(dataItems) {
        dataItems.forEach((dataItem) => this.getEntry(dataItem).reservedReadWriteLock = null);
    }
    getEntry(dataItem) {
        let lockTableEntry = this.lockTable.get(dataItem.getName()) || null;
        if (lockTableEntry === null) {
            lockTableEntry = new LockTableEntry();
            this.lockTable.set(dataItem.getName(), lockTableEntry);
        }
        return lockTableEntry;
    }
    grantLock(taskId, dataItems, lockType) {
        dataItems.forEach((dataItem) => {
            this.getEntry(dataItem).grantLock(taskId, lockType);
        });
    }
    canAcquireLock(taskId, dataItems, lockType) {
        let canAcquireLock = true;
        dataItems.forEach((dataItem) => {
            if (canAcquireLock) {
                const lockTableEntry = this.getEntry(dataItem);
                canAcquireLock = lockTableEntry.canAcquireLock(taskId, lockType);
            }
        }, this);
        return canAcquireLock;
    }
}
class TaskQueue {
    constructor() {
        this.queue = [];
    }
    // Inserts a task to the queue.
    insert(task) {
        ArrayHelper.binaryInsert(this.queue, task, (t1, t2) => {
            const priorityDiff = t1.getPriority() - t2.getPriority();
            return priorityDiff === 0 ? t1.getId() - t2.getId() : priorityDiff;
        });
    }
    // Returns a shallow copy of this queue.
    getValues() {
        return this.queue.slice();
    }
    // Removes the given task from the queue. Returns true if the task were
    // removed, false if the task were not found.
    remove(task) {
        const i = this.queue.indexOf(task);
        if (i >= 0) {
            this.queue.splice(i, 1);
        }
        return i >= 0;
    }
}
// Query/Transaction runner which actually runs the query in a transaction
// (either implicit or explicit) on the back store.
class Runner {
    constructor() {
        this.queue = new TaskQueue();
        this.lockManager = new LockManager();
    }
    // Schedules a task for this runner.
    scheduleTask(task) {
        if (task.getPriority() < TaskPriority.USER_QUERY_TASK
            || task.getPriority() < TaskPriority.TRANSACTION_TASK) {
            // Any priority that is higher than USER_QUERY_TASK or TRANSACTION_TASK is
            // considered a "high" priority task and all held reserved locks should be
            // cleared to allow it to execute.
            this.lockManager.clearReservedLocks(task.getScope());
        }
        this.queue.insert(task);
        this.consumePending();
        return task.getResolver().promise;
    }
    // Examines the queue and executes as many tasks as possible taking into
    // account the scope of each task and the currently occupied scopes.
    consumePending() {
        const queue = this.queue.getValues();
        queue.forEach((task) => {
            // Note: Iterating on a shallow copy of this.queue_, because this.queue_
            // will be modified during iteration and therefore iterating on
            // this.queue_ would not guarantee that every task in the queue will be
            // traversed.
            let acquiredLock = false;
            if (task.getType() === TransactionType.READ_ONLY) {
                acquiredLock = this.requestTwoPhaseLock(task, LockType.RESERVED_READ_ONLY, LockType.SHARED);
            }
            else {
                acquiredLock = this.requestTwoPhaseLock(task, LockType.RESERVED_READ_WRITE, LockType.EXCLUSIVE);
            }
            if (acquiredLock) {
                // Removing task from the task queue and executing it.
                this.queue.remove(task);
                this.execTask(task);
            }
        });
    }
    // Performs a two-phase lock acquisition. The 1st lock is requested first. If
    // it is granted, the 2nd lock is requested. Returns false if the 2nd lock was
    // not granted or both 1st and 2nd were not granted.
    requestTwoPhaseLock(task, lockType1, lockType2) {
        let acquiredLock = false;
        const acquiredFirstLock = this.lockManager.requestLock(task.getId(), task.getScope(), lockType1);
        if (acquiredFirstLock) {
            // Escalating the first lock to the second lock.
            acquiredLock = this.lockManager.requestLock(task.getId(), task.getScope(), lockType2);
        }
        return acquiredLock;
    }
    // Executes a QueryTask. Callers of this method should have already acquired a
    // lock according to the task that is about to be executed.
    execTask(task) {
        task
            .exec()
            .then(this.onTaskSuccess.bind(this, task), this.onTaskError.bind(this, task));
    }
    // Executes when a task finished successfully.
    onTaskSuccess(task, results) {
        this.lockManager.releaseLock(task.getId(), task.getScope());
        task.getResolver().resolve(results);
        this.consumePending();
    }
    // Executes when a task finished with an error.
    onTaskError(task, error) {
        this.lockManager.releaseLock(task.getId(), task.getScope());
        task.getResolver().reject(error);
        this.consumePending();
    }
}
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
class StateTransition {
    constructor() {
        this.map = new MapSet();
        const TS = TransactionState;
        this.map.set(TS.CREATED, TS.ACQUIRING_SCOPE);
        this.map.set(TS.CREATED, TS.EXECUTING_AND_COMMITTING);
        this.map.set(TS.ACQUIRING_SCOPE, TS.ACQUIRED_SCOPE);
        this.map.set(TS.ACQUIRED_SCOPE, TS.EXECUTING_QUERY);
        this.map.set(TS.ACQUIRED_SCOPE, TS.COMMITTING);
        this.map.set(TS.ACQUIRED_SCOPE, TS.ROLLING_BACK);
        this.map.set(TS.EXECUTING_QUERY, TS.ACQUIRED_SCOPE);
        this.map.set(TS.EXECUTING_QUERY, TS.FINALIZED);
        this.map.set(TS.EXECUTING_AND_COMMITTING, TS.FINALIZED);
        this.map.set(TS.COMMITTING, TS.FINALIZED);
        this.map.set(TS.ROLLING_BACK, TS.FINALIZED);
    }
    static get() {
        if (!StateTransition.instance) {
            StateTransition.instance = new StateTransition();
        }
        return StateTransition.instance;
    }
    get(current) {
        return this.map.getSet(current);
    }
}
// A TransactionTask is used when the user explicitly starts a transaction and
// can execute queries within this transaction at will. A TransactionTask is
// posted to the Runner to ensure that all required locks have been acquired
// before any queries are executed. Any queries that are performed as part of a
// TransactionTask will not be visible to lf.proc.Runner at all (no
// corresponding QueryTask will be posted). Once the transaction is finalized,
// it will appear to the lf.proc.Runner that this task finished and all locks
// will be released, exactly as is done for any type of Task.
class TransactionTask extends UniqueId {
    constructor(backStore, runner, schema, cache, indexStore, scope) {
        super();
        this.backStore = backStore;
        this.runner = runner;
        this.schema = schema;
        this.cache = cache;
        this.indexStore = indexStore;
        this.scope = new Set(scope);
        this.journal = new Journal(this.schema, this.cache, this.indexStore, this.scope);
        this.resolver = new Resolver();
        this.execResolver = new Resolver();
        this.acquireScopeResolver = new Resolver();
    }
    exec() {
        this.acquireScopeResolver.resolve();
        return this.execResolver.promise;
    }
    getType() {
        return TransactionType.READ_WRITE;
    }
    getScope() {
        return this.scope;
    }
    getResolver() {
        return this.resolver;
    }
    // Returns a unique number for this task.
    getId() {
        return this.getUniqueNumber();
    }
    // Returns the priority of this task.
    getPriority() {
        return TaskPriority.TRANSACTION_TASK;
    }
    // Acquires all locks required such that this task can execute queries.
    acquireScope() {
        this.runner.scheduleTask(this);
        return this.acquireScopeResolver.promise;
    }
    // Executes the given query without flushing any changes to disk yet.
    attachQuery(queryBuilder) {
        const taskItem = queryBuilder.getTaskItem();
        return taskItem.plan
            .getRoot()
            .exec(this.journal, taskItem.context)
            .then((relations) => {
            return relations[0].getPayloads();
        }, (e) => {
            this.journal.rollback();
            // Need to resolve execResolver here such that all locks acquired
            // by this transaction task are eventually released and avoid
            // unhandled rejected promise, which ends up in an unwanted
            // exception showing up in the console.
            this.execResolver.resolve();
            // Rethrows e so that caller's catch and reject handler will have
            // a chance to handle error instead of considering execution
            // success.
            throw e;
        });
    }
    commit() {
        this.tx = this.backStore.createTx(this.getType(), Array.from(this.scope.values()), this.journal);
        this.tx.commit().then(() => {
            this.execResolver.resolve();
        }, (e) => {
            this.journal.rollback();
            this.execResolver.reject(e);
        });
        return this.resolver.promise;
    }
    rollback() {
        this.journal.rollback();
        this.execResolver.resolve();
        return this.resolver.promise;
    }
    stats() {
        let results = null;
        if (this.tx) {
            results = this.tx.stats();
        }
        return results === null ? TransactionStatsImpl.getDefault() : results;
    }
}
class RuntimeTransaction {
    constructor(schema, cache, indexStore, backStore, runner) {
        this.schema = schema;
        this.cache = cache;
        this.indexStore = indexStore;
        this.backStore = backStore;
        this.runner = runner;
        this.task = null;
        this.state = TransactionState.CREATED;
        this.stateTransition = StateTransition.get();
    }
    exec(queryBuilders) {
        this.updateState(TransactionState.EXECUTING_AND_COMMITTING);
        const taskItems = [];
        try {
            queryBuilders.forEach((queryBuilder) => {
                queryBuilder.assertExecPreconditions();
                taskItems.push(queryBuilder.getTaskItem());
            });
        }
        catch (e) {
            this.updateState(TransactionState.FINALIZED);
            return Promise.reject(e);
        }
        this.task = new UserQueryTask(this.backStore, this.schema, this.cache, this.indexStore, taskItems);
        return this.runner.scheduleTask(this.task).then((results) => {
            this.updateState(TransactionState.FINALIZED);
            return results.map((relation) => relation.getPayloads());
        }, (e) => {
            this.updateState(TransactionState.FINALIZED);
            throw e;
        });
    }
    begin(scope) {
        this.updateState(TransactionState.ACQUIRING_SCOPE);
        this.task = new TransactionTask(this.backStore, this.runner, this.schema, this.cache, this.indexStore, scope);
        return this.task.acquireScope().then(() => {
            this.updateState(TransactionState.ACQUIRED_SCOPE);
        });
    }
    attach(query) {
        this.updateState(TransactionState.EXECUTING_QUERY);
        try {
            query.assertExecPreconditions();
        }
        catch (e) {
            this.updateState(TransactionState.FINALIZED);
            return Promise.reject(e);
        }
        return this.task.attachQuery(query).then((result) => {
            this.updateState(TransactionState.ACQUIRED_SCOPE);
            return result;
        }, (e) => {
            this.updateState(TransactionState.FINALIZED);
            throw e;
        });
    }
    commit() {
        this.updateState(TransactionState.COMMITTING);
        return this.task.commit().then((res) => {
            this.updateState(TransactionState.FINALIZED);
            return res;
        });
    }
    rollback() {
        this.updateState(TransactionState.ROLLING_BACK);
        return this.task.rollback().then((res) => {
            this.updateState(TransactionState.FINALIZED);
            return res;
        });
    }
    stats() {
        if (this.state !== TransactionState.FINALIZED) {
            // 105: Attempt to access in-flight transaction states.
            throw new Exception(ErrorCode.INVALID_TX_ACCESS);
        }
        return this.task.stats();
    }
    // Update this transaction from its current state to the given one.
    updateState(newState) {
        const nextStates = this.stateTransition.get(this.state);
        if (!nextStates.has(newState)) {
            // 107: Invalid transaction state transition: {0} -> {1}.
            throw new Exception(ErrorCode.INVALID_TX_STATE, this.state.toString(), newState.toString());
        }
        else {
            this.state = newState;
        }
    }
}
class DatabaseSchemaImpl {
    constructor(_name) {
        this._name = _name;
        this.tableMap = new Map();
    }
    name() {
        return this._name;
    }
    tables() {
        return Array.from(this.tableMap.values());
    }
    table(tableName) {
        const ret = this.tableMap.get(tableName);
        if (!ret) {
            // 101: Table {0} not found.
            throw new Exception(ErrorCode.TABLE_NOT_FOUND, tableName);
        }
        return ret;
    }
    setTable(table) {
        this.tableMap.set(table.getName(), table);
    }
}
function createPredicate(lhs, rhs, type) {
    // For the case of .eq(null).
    if (rhs === null) {
        return new ValuePredicate(lhs, rhs, type);
    }
    const r = rhs;
    if (r.getIndex && r.getIndices) {
        return new JoinPredicate(lhs, r, type);
    }
    // Value predicate, which can be bounded or not.
    return new ValuePredicate(lhs, rhs, type);
}
class ColumnImpl {
    constructor(table, name, unique, nullable, type, alias) {
        this.table = table;
        this.name = name;
        this.unique = unique;
        this.nullable = nullable;
        this.type = type;
        this.alias = alias || null;
        this.indices = [];
        this.index = undefined;
    }
    getName() {
        return this.name;
    }
    getNormalizedName() {
        return `${this.table.getEffectiveName()}.${this.name}`;
    }
    toString() {
        return this.getNormalizedName();
    }
    getTable() {
        return this.table;
    }
    getType() {
        return this.type;
    }
    getAlias() {
        return this.alias;
    }
    isNullable() {
        return this.nullable;
    }
    isUnique() {
        return this.unique;
    }
    getIndices() {
        this.table.getIndices().forEach((index) => {
            const colNames = index.columns.map((col) => col.schema.getName());
            if (colNames.includes(this.name)) {
                this.indices.push(index);
            }
        });
        return this.indices;
    }
    getIndex() {
        // Check of undefined is used purposefully here, such that this logic is
        // skipped if this.index has been set to null by a previous execution of
        // getIndex().
        if (this.index === undefined) {
            const indices = this.getIndices().filter((indexSchema) => {
                if (indexSchema.columns.length !== 1) {
                    return false;
                }
                return indexSchema.columns[0].schema.getName() === this.name;
            });
            // Normally there should be only one dedicated index for this column,
            // but if there are more, just grab the first one.
            this.index = indices.length > 0 ? indices[0] : null;
        }
        return this.index;
    }
    eq(operand) {
        return createPredicate(this, operand, EvalType.EQ);
    }
    neq(operand) {
        return createPredicate(this, operand, EvalType.NEQ);
    }
    lt(operand) {
        return createPredicate(this, operand, EvalType.LT);
    }
    lte(operand) {
        return createPredicate(this, operand, EvalType.LTE);
    }
    gt(operand) {
        return createPredicate(this, operand, EvalType.GT);
    }
    gte(operand) {
        return createPredicate(this, operand, EvalType.GTE);
    }
    match(operand) {
        return createPredicate(this, operand, EvalType.MATCH);
    }
    between(from, to) {
        return createPredicate(this, [from, to], EvalType.BETWEEN);
    }
    in(values) {
        return createPredicate(this, values, EvalType.IN);
    }
    isNull() {
        return this.eq(null);
    }
    isNotNull() {
        return this.neq(null);
    }
    as(name) {
        return new ColumnImpl(this.table, this.name, this.unique, this.nullable, this.type, name);
    }
}
class RowImpl extends Row {
    // UNUSED
    constructor(functionMap, columns, indices, id, payload) {
        super(id, payload);
        this.functionMap = functionMap;
        this.columns = columns;
        // TypeScript forbids super to be called after this. Therefore we need
        // to duplicate this line from base class ctor because defaultPayload()
        // needs to know column information.
        this.payload_ = payload || this.defaultPayload();
    }
    defaultPayload() {
        if (this.columns === undefined) {
            // Called from base ctor, ignore for now.
            return null;
        }
        const obj = {};
        this.columns.forEach((col) => {
            obj[col.getName()] = col.isNullable() ? null : DEFAULT_VALUES.get(col.getType());
        });
        return obj;
    }
    toDbPayload() {
        const obj = {};
        this.columns.forEach((col) => {
            const key = col.getName();
            const type = col.getType();
            let value = this.payload()[key];
            if (type === Type.ARRAY_BUFFER) {
                value = value ? Row.binToHex(value) : null;
            }
            else if (type === Type.DATE_TIME) {
                value = value ? value.getTime() : null;
            }
            else if (type === Type.OBJECT) {
                value = value || null;
            }
            obj[key] = value;
        });
        return obj;
    }
    keyOfIndex(indexName) {
        const key = super.keyOfIndex(indexName);
        if (key === null) {
            const fn = this.functionMap.get(indexName);
            if (fn) {
                return fn(this.payload());
            }
        }
        return key;
    }
}
class TableImpl {
    constructor(_name, cols, _indices, _usePersistentIndex, alias) {
        this._name = _name;
        this._indices = _indices;
        this._usePersistentIndex = _usePersistentIndex;
        this._columns = [];
        cols.forEach((col) => {
            const colSchema = new ColumnImpl(this, col.name, col.unique, col.nullable, col.type);
            this[col.name] = colSchema;
            this._columns.push(colSchema);
        }, this);
        this._functionMap = null;
        this._evalRegistry = EvalRegistry.get();
        this._alias = alias ? alias : null;
    }
    getName() {
        return this._name;
    }
    getAlias() {
        return this._alias;
    }
    getEffectiveName() {
        return this._alias || this._name;
    }
    getIndices() {
        return this._indices || TableImpl.EMPTY_INDICES;
    }
    getColumns() {
        return this._columns;
    }
    persistentIndex() {
        return this._usePersistentIndex;
    }
    as(name) {
        const colDef = this._columns.map((col) => {
            return {
                "name": col.getName(),
                "nullable": col.isNullable(),
                "type": col.getType(),
                "unique": col.isUnique()
            };
        });
        const clone = new TableImpl(this._name, colDef, this._indices, this._usePersistentIndex, name);
        clone._alias = name;
        return clone;
    }
    col(name) {
        return this[name];
    }
    getRowIdIndexName() {
        return `${this._name}.${TableImpl.ROW_ID_INDEX_PATTERN}`;
    }
    createRow(value) {
        return new RowImpl(this._functionMap, this._columns, this._indices, Row.getNextId(), value);
    }
    deserializeRow(dbRecord) {
        const obj = {};
        this._columns.forEach((col) => {
            const key = col.getName();
            const type = col.getType();
            let value = dbRecord.value[key];
            if (type === Type.ARRAY_BUFFER) {
                value = Row.hexToBin(value);
            }
            else if (type === Type.DATE_TIME) {
                value = value !== null ? new Date(value) : null;
            }
            obj[key] = value;
        });
        return new RowImpl(this._functionMap, this._columns, this._indices, dbRecord.id, obj);
    }
}
TableImpl.ROW_ID_INDEX_PATTERN = "#";
TableImpl.EMPTY_INDICES = [];
class TableBuilder {
    constructor(tableName) {
        this.checkNamingRules(tableName);
        this.name = tableName;
        this.columns = new Map();
        this.uniqueColumns = new Set();
        this.uniqueIndices = new Set();
        this.nullable = new Set();
        this.indices = new Map();
        this.persistIndex = false;
    }
    addColumn(name, type) {
        this.checkNamingRules(name);
        this.checkNameConflicts(name);
        this.columns.set(name, type);
        return this;
    }
    getSchema() {
        const columns = Array.from(this.columns.keys()).map((colName) => {
            return {
                "name": colName,
                "nullable": this.nullable.has(colName) || false,
                "type": this.columns.get(colName),
                "unique": this.uniqueColumns.has(colName) || false
            };
        });
        // Pass null as indices since Columns are not really constructed yet.
        const table = new TableImpl(this.name, columns, null, this.persistIndex);
        return table;
    }
    checkNamingRules(name) {
        if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(name)) {
            // 502: Naming rule violation: {0}.
            throw new Exception(ErrorCode.INVALID_NAME, name);
        }
    }
    checkNameConflicts(name) {
        if (name === this.name) {
            // 546: Indices/constraints/columns can't re-use the table name {0}
            throw new Exception(ErrorCode.DUPLICATE_NAME, name);
        }
        if (this.columns.has(name)
            || this.indices.has(name)
            || this.uniqueIndices.has(name)) {
            // 503: Name {0} is already defined.
            throw new Exception(ErrorCode.NAME_IN_USE, `${this.name}.${name}`);
        }
    }
}
class Database {
    constructor(data) {
        this.schema = new DatabaseSchemaImpl("db");
        if (Array.isArray(data)) {
            data = { "table": data };
        }
        for (const [tableName, table] of Object.entries(data)) {
            const tableBuilder = new TableBuilder(tableName);
            for (const [columnName, value] of table.length > 0 ? Object.entries(table[0]) : []) {
                let type;
                switch (Object.prototype.toString.call(value).slice(8, -1)) {
                    case "ArrayBuffer":
                        type = Type.ARRAY_BUFFER;
                        break;
                    case "Boolean":
                        type = Type.BOOLEAN;
                        break;
                    case "Date":
                        type = Type.DATE_TIME;
                        break;
                    case "Number":
                        type = Type.NUMBER;
                        break;
                    case "String":
                        type = Type.STRING;
                        break;
                    default:
                        type = Type.OBJECT;
                        break;
                }
                tableBuilder.addColumn(columnName, type);
            }
            this.schema.setTable(tableBuilder.getSchema());
        }
        this.cache = new DefaultCache(this.schema);
        this.backStore = new Memory(this.schema);
        this.indexStore = new MemoryIndexStore();
        this.indexStore.init(this.schema); // FIXME: This is async
        this.queryEngine = new DefaultQueryEngine(this.indexStore, this.cache);
        this.runner = new Runner();
        this.import(data);
    }
    // FROM: class DatabaseSchemaImpl
    tables() {
        return Array.from(this.schema.tableMap.values());
    }
    table(tableName) {
        const ret = this.schema.tableMap.get(tableName);
        if (!ret) {
            // 101: Table {0} not found.
            throw new Exception(ErrorCode.TABLE_NOT_FOUND, tableName);
        }
        return ret;
    }
    setTable(table) {
        this.schema.tableMap.set(table.getName(), table);
    }
    // FROM: class RuntimeDatabase
    select(...columns) {
        return new SelectBuilder(this.backStore, this.schema, this.cache, this.indexStore, this.queryEngine, this.runner, columns);
    }
    createTransaction() {
        return new RuntimeTransaction(this.schema, this.cache, this.indexStore, this.backStore, this.runner);
    }
    export() {
        const task = new ExportTask(this.schema, this.indexStore, this.cache);
        return this.runner.scheduleTask(task).then((results) => {
            return results[0].getPayloads()[0];
        });
    }
    import(data) {
        const scope = new Set(this.schema.tables());
        const transaction = this.backStore.createTx(TransactionType.READ_WRITE, Array.from(scope.values()), new Journal(this.schema, this.cache, this.indexStore, scope));
        for (const [tableName, tableData] of Object.entries(data)) {
            const tableSchema = this.schema.table(tableName);
            const payloads = tableData;
            const rows = payloads.map((value) => tableSchema.createRow(value));
            const table = transaction.getTable(tableName, tableSchema.deserializeRow, TableType.DATA);
            this.cache.setMany(tableName, rows);
            const indices = this.indexStore.getTableIndices(tableName);
            for (const row of rows) {
                for (const index of indices) {
                    const key = row.keyOfIndex(index.getName());
                    index.add(key, row.id());
                }
            }
            table.put(rows);
        }
        return transaction.commit();
    }
}
function query(objects) {
    return new Database(objects);
}

//import * as fs from "fs";
(async function () {
    /*
    const schemaBuilder = schema.create("idk", 1);

    schemaBuilder
        .createTable("Job")
        .addColumn("id", Type.STRING)
        .addColumn("title", Type.STRING)
        .addColumn("minSalary", Type.NUMBER)
        .addColumn("maxSalary", Type.NUMBER)
        .addPrimaryKey(["id"])
        .addIndex("idx_maxSalary", ["maxSalary"], false, Order.DESC);

    schemaBuilder
        .createTable("JobHistory")
        .addColumn("employeeId", Type.STRING)
        .addColumn("startDate", Type.DATE_TIME)
        .addColumn("endDate", Type.DATE_TIME)
        .addColumn("jobId", Type.STRING)
        .addColumn("departmentId", Type.STRING)
        .addForeignKey("fk_EmployeeId", {
            "action": ConstraintAction.RESTRICT,
            "local": "employeeId",
            "ref": "Employee.id"
        })
        .addForeignKey("fk_DepartmentId", {
            "action": ConstraintAction.RESTRICT,
            "local": "departmentId",
            "ref": "Department.id"
        });

    schemaBuilder
        .createTable("Employee")
        .addColumn("id", Type.STRING)
        .addColumn("firstName", Type.STRING)
        .addColumn("lastName", Type.STRING)
        .addColumn("email", Type.STRING)
        .addColumn("phoneNumber", Type.STRING)
        .addColumn("hireDate", Type.DATE_TIME)
        .addColumn("jobId", Type.STRING)
        .addColumn("salary", Type.NUMBER)
        .addColumn("commissionPercent", Type.NUMBER)
        .addColumn("managerId", Type.STRING)
        .addColumn("departmentId", Type.STRING)
        .addColumn("photo", Type.ARRAY_BUFFER)
        .addPrimaryKey(["id"])
        .addForeignKey("fk_JobId", {
            "action": ConstraintAction.RESTRICT,
            "local": "jobId",
            "ref": "Job.id"
        })
        .addForeignKey("fk_DepartmentId", {
            "action": ConstraintAction.RESTRICT,
            "local": "departmentId",
            "ref": "Department.id"
        })
        .addIndex("idx_salary", ["salary"], false, Order.DESC)
        .addNullable(["hireDate"]);

    schemaBuilder
        .createTable("Department")
        .addColumn("id", Type.STRING)
        .addColumn("name", Type.STRING)
        .addColumn("managerId", Type.STRING)
        .addColumn("locationId", Type.STRING)
        .addPrimaryKey(["id"])
        .addForeignKey("fk_LocationId", {
            "action": ConstraintAction.RESTRICT,
            "local": "locationId",
            "ref": "Location.id"
        });

    schemaBuilder
        .createTable("Location")
        .addColumn("id", Type.STRING)
        .addColumn("streetAddress", Type.STRING)
        .addColumn("postalCode", Type.STRING)
        .addColumn("city", Type.STRING)
        .addColumn("stateProvince", Type.STRING)
        .addColumn("countryId", Type.INTEGER)
        .addPrimaryKey(["id"])
        .addForeignKey("fk_CountryId", {
            "action": ConstraintAction.RESTRICT,
            "local": "countryId",
            "ref": "Country.id"
        });

    schemaBuilder
        .createTable("Country")
        .addColumn("id", Type.INTEGER)
        .addColumn("name", Type.STRING)
        .addColumn("regionId", Type.STRING)
        .addPrimaryKey(["id"], true)
        .addForeignKey("fk_RegionId", {
            "action": ConstraintAction.RESTRICT,
            "local": "regionId",
            "ref": "Region.id"
        });

    schemaBuilder
        .createTable("Region")
        .addColumn("id", Type.STRING)
        .addColumn("name", Type.STRING)
        .addPrimaryKey(["id"]);

    schemaBuilder
        .createTable("Holiday")
        .addColumn("name", Type.STRING)
        .addColumn("begin", Type.DATE_TIME)
        .addColumn("end", Type.DATE_TIME)
        .addIndex("idx_begin", ["begin"], false, Order.ASC)
        .addPrimaryKey(["name"])
        .persistentIndex(true);

    schemaBuilder
        .createTable("DummyTable")
        .addColumn("arraybuffer", Type.ARRAY_BUFFER)
        .addColumn("boolean", Type.BOOLEAN)
        .addColumn("datetime", Type.DATE_TIME)
        .addColumn("integer", Type.INTEGER)
        .addColumn("number", Type.NUMBER)
        .addColumn("string", Type.STRING)
        .addColumn("string2", Type.STRING)
        .addColumn("proto", Type.OBJECT)
        .addPrimaryKey(["string", "number"])
        .addUnique("uq_constraint", ["integer", "string2"])
        .addNullable(["datetime"]);

    schemaBuilder
        .createTable("CrossColumnTable")
        .addColumn("integer1", Type.INTEGER)
        .addColumn("integer2", Type.INTEGER)
        .addColumn("string1", Type.STRING)
        .addColumn("string2", Type.STRING)
        .addNullable(["string1", "string2"])
        .addIndex("idx_ascDesc", [
            {
                "name": "integer1",
                "order": Order.ASC
            },
            {
                "name": "integer2",
                "order": Order.DESC
            }
        ], true)
        .addIndex("idx_crossNull", ["string1", "string2"], true)
        .persistentIndex(true);

    const db = await schemaBuilder.connect();

    const dataGenerator = new MockDataGenerator();

    dataGenerator.generate(50, 300, 10);

    db
        .createTransaction()
        .exec([
            db.insert().into(db.getSchema().table("Region")).values(dataGenerator.sampleRegions),
            db.insert().into(db.getSchema().table("Country")).values(dataGenerator.sampleCountries),
            db.insert().into(db.getSchema().table("Location")).values(dataGenerator.sampleLocations),
            db.insert().into(db.getSchema().table("Department")).values(dataGenerator.sampleDepartments),
            db.insert().into(db.getSchema().table("Job")).values(dataGenerator.sampleJobs),
            db.insert().into(db.getSchema().table("Employee")).values(dataGenerator.sampleEmployees),
            db.insert().into(db.getSchema().table("CrossColumnTable")).values((() => {
                const sampleRows = new Array(20);
                const padZeros = (n: number) => (n < 10 ? `0${n}` : `${n}`);

                for (let i = 0; i < 20; i++) {
                    sampleRows[i] = db.getSchema().table("CrossColumnTable").createRow({
                        "integer1": i,
                        "integer2": i * 10,
                        // Generating a null value for i = [10, 12, 14].
                        "string1":
                            i % 2 === 0 && i >= 10 && i < 15 ? null : `string1_${padZeros(i)}`,
                        // Generating a null value for i = 16 and 18.
                        "string2": i % 2 === 0 && i >= 15 ? null : `string2_${i * 10}`
                    });
                }
                return sampleRows;
            })())
        ]);

    const results = await db.select().from(db.getSchema().table("Job")).where(db.getSchema().table("Job").col("minSalary").gte(300000)).exec();

    console.log(results);

    fs.writeFileSync(path.join(__dirname, "output.json"), JSON.stringify(await db.export(), undefined, 4));

    */
    /*
    const schemaBuilder2 = schema.create("idk", 1);

    schemaBuilder2
        .createTable("Job")
        .addColumn("id", Type.STRING)
        .addColumn("title", Type.STRING)
        .addColumn("minSalary", Type.NUMBER)
        .addColumn("maxSalary", Type.NUMBER);

    schemaBuilder2
        .createTable("JobHistory")
        .addColumn("employeeId", Type.STRING)
        .addColumn("startDate", Type.DATE_TIME)
        .addColumn("endDate", Type.DATE_TIME)
        .addColumn("jobId", Type.STRING)
        .addColumn("departmentId", Type.STRING);

    schemaBuilder2
        .createTable("Employee")
        .addColumn("id", Type.STRING)
        .addColumn("firstName", Type.STRING)
        .addColumn("lastName", Type.STRING)
        .addColumn("email", Type.STRING)
        .addColumn("phoneNumber", Type.STRING)
        .addColumn("hireDate", Type.DATE_TIME)
        .addColumn("jobId", Type.STRING)
        .addColumn("salary", Type.NUMBER)
        .addColumn("commissionPercent", Type.NUMBER)
        .addColumn("managerId", Type.STRING)
        .addColumn("departmentId", Type.STRING)
        .addColumn("photo", Type.ARRAY_BUFFER);

    schemaBuilder2
        .createTable("Department")
        .addColumn("id", Type.STRING)
        .addColumn("name", Type.STRING)
        .addColumn("managerId", Type.STRING)
        .addColumn("locationId", Type.STRING);

    schemaBuilder2
        .createTable("Location")
        .addColumn("id", Type.STRING)
        .addColumn("streetAddress", Type.STRING)
        .addColumn("postalCode", Type.STRING)
        .addColumn("city", Type.STRING)
        .addColumn("stateProvince", Type.STRING)
        .addColumn("countryId", Type.INTEGER);

    schemaBuilder2
        .createTable("Country")
        .addColumn("id", Type.INTEGER)
        .addColumn("name", Type.STRING)
        .addColumn("regionId", Type.STRING);

    schemaBuilder2
        .createTable("Region")
        .addColumn("id", Type.STRING)
        .addColumn("name", Type.STRING);

    schemaBuilder2
        .createTable("Holiday")
        .addColumn("name", Type.STRING)
        .addColumn("begin", Type.DATE_TIME)
        .addColumn("end", Type.DATE_TIME);

    schemaBuilder2
        .createTable("DummyTable")
        .addColumn("arraybuffer", Type.ARRAY_BUFFER)
        .addColumn("boolean", Type.BOOLEAN)
        .addColumn("datetime", Type.DATE_TIME)
        .addColumn("integer", Type.INTEGER)
        .addColumn("number", Type.NUMBER)
        .addColumn("string", Type.STRING)
        .addColumn("string2", Type.STRING)
        .addColumn("proto", Type.OBJECT);

    schemaBuilder2
        .createTable("CrossColumnTable")
        .addColumn("integer1", Type.INTEGER)
        .addColumn("integer2", Type.INTEGER)
        .addColumn("string1", Type.STRING)
        .addColumn("string2", Type.STRING);

    const db2 = await schemaBuilder2.connect(); // Make sure the database is empty.
    */
    //const json = JSON.parse(fs.readFileSync(path.join(__dirname, "output.json"), { "encoding": "utf8" }))["tables"];
    //await db2.import(json);
    //const results = await db2.select().from(db2.getSchema().table("Job")).where(db2.getSchema().table("Job").col("minSalary").gte(300000)).exec();
    const db = query({
        "Job": [
            {
                "id": "jobId0",
                "maxSalary": 200000,
                "minSalary": 200000,
                "title": "Accountant, Private"
            },
            {
                "id": "jobId1",
                "maxSalary": 300000,
                "minSalary": 100000,
                "title": "Loan Officer"
            },
            {
                "id": "jobId2",
                "maxSalary": 600000,
                "minSalary": 500000,
                "title": "Criminal Investigator and Special Agent"
            },
            {
                "id": "jobId3",
                "maxSalary": 400000,
                "minSalary": 100000,
                "title": "Computer and Information Systems Manager"
            },
            {
                "id": "jobId4",
                "maxSalary": 500000,
                "minSalary": 400000,
                "title": "Training Specialist"
            },
            {
                "id": "jobId5",
                "maxSalary": 500000,
                "minSalary": 400000,
                "title": "Nurse"
            },
            {
                "id": "jobId6",
                "maxSalary": 200000,
                "minSalary": 200000,
                "title": "Property, Real Estate, and Community Association Manager"
            },
            {
                "id": "jobId7",
                "maxSalary": 600000,
                "minSalary": 100000,
                "title": "Aircraft Mechanic"
            },
            {
                "id": "jobId8",
                "maxSalary": 200000,
                "minSalary": 200000,
                "title": "Registered Nurse"
            },
            {
                "id": "jobId9",
                "maxSalary": 500000,
                "minSalary": 200000,
                "title": "Recruiter"
            },
            {
                "id": "jobId10",
                "maxSalary": 400000,
                "minSalary": 100000,
                "title": "Economist"
            },
            {
                "id": "jobId11",
                "maxSalary": 600000,
                "minSalary": 500000,
                "title": "Purchasing manager, Buyer, and Purchasing agent"
            },
            {
                "id": "jobId12",
                "maxSalary": 600000,
                "minSalary": 500000,
                "title": "Systems Engineer"
            },
            {
                "id": "jobId13",
                "maxSalary": 400000,
                "minSalary": 100000,
                "title": "Quality Engineer"
            },
            {
                "id": "jobId14",
                "maxSalary": 600000,
                "minSalary": 400000,
                "title": "Electrical Engineer"
            },
            {
                "id": "jobId15",
                "maxSalary": 300000,
                "minSalary": 100000,
                "title": "Compensation or Benefits Manager"
            },
            {
                "id": "jobId16",
                "maxSalary": 100000,
                "minSalary": 100000,
                "title": "Accounting Specialist"
            },
            {
                "id": "jobId17",
                "maxSalary": 300000,
                "minSalary": 300000,
                "title": "Financial Analyst"
            },
            {
                "id": "jobId18",
                "maxSalary": 400000,
                "minSalary": 200000,
                "title": "Administrative Services Manager"
            },
            {
                "id": "jobId19",
                "maxSalary": 600000,
                "minSalary": 400000,
                "title": "Process Engineer"
            },
            {
                "id": "jobId20",
                "maxSalary": 600000,
                "minSalary": 100000,
                "title": "Design Engineer"
            },
            {
                "id": "jobId21",
                "maxSalary": 400000,
                "minSalary": 100000,
                "title": "Credit Analyst"
            },
            {
                "id": "jobId22",
                "maxSalary": 600000,
                "minSalary": 300000,
                "title": "Loss Prevention Specialist"
            },
            {
                "id": "jobId23",
                "maxSalary": 600000,
                "minSalary": 100000,
                "title": "Human Resources Generalist"
            },
            {
                "id": "jobId24",
                "maxSalary": 600000,
                "minSalary": 100000,
                "title": "Payroll Clerk"
            },
            {
                "id": "jobId25",
                "maxSalary": 400000,
                "minSalary": 200000,
                "title": "Budget Analyst"
            },
            {
                "id": "jobId26",
                "maxSalary": 500000,
                "minSalary": 200000,
                "title": "Labor Relations Specialist"
            },
            {
                "id": "jobId27",
                "maxSalary": 600000,
                "minSalary": 400000,
                "title": "Food Service Manager"
            },
            {
                "id": "jobId28",
                "maxSalary": 300000,
                "minSalary": 100000,
                "title": "Software Engineer"
            },
            {
                "id": "jobId29",
                "maxSalary": 500000,
                "minSalary": 200000,
                "title": "Arbitrators, Mediators, and Conciliators"
            },
            {
                "id": "jobId30",
                "maxSalary": 300000,
                "minSalary": 100000,
                "title": "Mechanical Engineer"
            },
            {
                "id": "jobId31",
                "maxSalary": 500000,
                "minSalary": 200000,
                "title": "Employment Manager"
            },
            {
                "id": "jobId32",
                "maxSalary": 400000,
                "minSalary": 100000,
                "title": "Appraiser and Assessor of Real Estate"
            },
            {
                "id": "jobId33",
                "maxSalary": 200000,
                "minSalary": 200000,
                "title": "Speech Language Pathologist"
            },
            {
                "id": "jobId34",
                "maxSalary": 500000,
                "minSalary": 200000,
                "title": "Advertising Sales Agent"
            },
            {
                "id": "jobId35",
                "maxSalary": 600000,
                "minSalary": 300000,
                "title": "Project Engineer"
            },
            {
                "id": "jobId36",
                "maxSalary": 600000,
                "minSalary": 500000,
                "title": "Auditor"
            },
            {
                "id": "jobId37",
                "maxSalary": 400000,
                "minSalary": 200000,
                "title": "Energy Broker"
            },
            {
                "id": "jobId38",
                "maxSalary": 200000,
                "minSalary": 200000,
                "title": "Business Continuity Planner"
            },
            {
                "id": "jobId39",
                "maxSalary": 600000,
                "minSalary": 300000,
                "title": "Java Developer"
            },
            {
                "id": "jobId40",
                "maxSalary": 400000,
                "minSalary": 100000,
                "title": "Fraud Examiner"
            },
            {
                "id": "jobId41",
                "maxSalary": 600000,
                "minSalary": 300000,
                "title": "Personnel Recruiter"
            },
            {
                "id": "jobId42",
                "maxSalary": 300000,
                "minSalary": 100000,
                "title": "Community Service Manager"
            },
            {
                "id": "jobId43",
                "maxSalary": 600000,
                "minSalary": 500000,
                "title": "Project Manager"
            },
            {
                "id": "jobId44",
                "maxSalary": 500000,
                "minSalary": 200000,
                "title": "Human Resources Specialist"
            },
            {
                "id": "jobId45",
                "maxSalary": 600000,
                "minSalary": 100000,
                "title": "Pharmacist"
            },
            {
                "id": "jobId46",
                "maxSalary": 200000,
                "minSalary": 200000,
                "title": "Antenna Engineer"
            },
            {
                "id": "jobId47",
                "maxSalary": 500000,
                "minSalary": 300000,
                "title": "Grant writer"
            },
            {
                "id": "jobId48",
                "maxSalary": 400000,
                "minSalary": 100000,
                "title": "Event Planner"
            },
            {
                "id": "jobId49",
                "maxSalary": 200000,
                "minSalary": 200000,
                "title": "Antenna Operator"
            }
        ],
        "JobHistory": [],
        "Employee": [
            {
                "id": "employeeId0",
                "firstName": "Austin",
                "lastName": "Flores",
                "email": "austin.flores@theweb.com",
                "phoneNumber": "1634017081",
                "hireDate": "2002-02-20T17:31:30.075Z",
                "jobId": "jobId0",
                "salary": 208095,
                "commissionPercent": 0.737231690942496,
                "managerId": "managerId",
                "departmentId": "departmentId0",
                "photo": {}
            },
            {
                "id": "employeeId1",
                "firstName": "Sophie",
                "lastName": "Jenkins",
                "email": "sophie.jenkins@theweb.com",
                "phoneNumber": "1297306275",
                "hireDate": "1999-02-17T05:37:09.626Z",
                "jobId": "jobId1",
                "salary": 169451,
                "commissionPercent": 0.6118511599291404,
                "managerId": "managerId",
                "departmentId": "departmentId1",
                "photo": {}
            },
            {
                "id": "employeeId2",
                "firstName": "Sarah",
                "lastName": "Simmons",
                "email": "sarah.simmons@theweb.com",
                "phoneNumber": "1188775063",
                "hireDate": "2010-11-27T00:21:30.399Z",
                "jobId": "jobId2",
                "salary": 199632,
                "commissionPercent": 1.1387945769961558,
                "managerId": "managerId",
                "departmentId": "departmentId2",
                "photo": {}
            },
            {
                "id": "employeeId3",
                "firstName": "Mackenzie",
                "lastName": "Rogers",
                "email": "mackenzie.rogers@theweb.com",
                "phoneNumber": "1873137672",
                "hireDate": "2004-06-21T13:10:17.015Z",
                "jobId": "jobId3",
                "salary": 63207,
                "commissionPercent": 0.2270474742511178,
                "managerId": "managerId",
                "departmentId": "departmentId3",
                "photo": {}
            },
            {
                "id": "employeeId4",
                "firstName": "Cooper",
                "lastName": "Hughes",
                "email": "cooper.hughes@theweb.com",
                "phoneNumber": "1450966277",
                "hireDate": "1984-05-06T05:48:06.961Z",
                "jobId": "jobId4",
                "salary": 22910,
                "commissionPercent": 1.03868283872026,
                "managerId": "managerId",
                "departmentId": "departmentId4",
                "photo": {}
            },
            {
                "id": "employeeId5",
                "firstName": "Isla",
                "lastName": "Roberts",
                "email": "isla.roberts@theweb.com",
                "phoneNumber": "1842924724",
                "hireDate": "2009-05-21T18:32:17.905Z",
                "jobId": "jobId5",
                "salary": 128239,
                "commissionPercent": 0.3528214153110679,
                "managerId": "managerId",
                "departmentId": "departmentId5",
                "photo": {}
            },
            {
                "id": "employeeId6",
                "firstName": "Colton",
                "lastName": "Jenkins",
                "email": "colton.jenkins@theweb.com",
                "phoneNumber": "1310184287",
                "hireDate": "1989-01-01T10:45:10.686Z",
                "jobId": "jobId6",
                "salary": 65281,
                "commissionPercent": 0.5857178580401733,
                "managerId": "managerId",
                "departmentId": "departmentId6",
                "photo": {}
            },
            {
                "id": "employeeId7",
                "firstName": "Clara",
                "lastName": "Jackson",
                "email": "clara.jackson@theweb.com",
                "phoneNumber": "1577075328",
                "hireDate": "1982-03-28T00:51:02.040Z",
                "jobId": "jobId7",
                "salary": 202468,
                "commissionPercent": 0.37671851640142184,
                "managerId": "managerId",
                "departmentId": "departmentId7",
                "photo": {}
            },
            {
                "id": "employeeId8",
                "firstName": "Leah",
                "lastName": "Perez",
                "email": "leah.perez@theweb.com",
                "phoneNumber": "1369012995",
                "hireDate": "1993-05-05T13:35:30.123Z",
                "jobId": "jobId8",
                "salary": 81435,
                "commissionPercent": 0.9589138509392442,
                "managerId": "managerId",
                "departmentId": "departmentId8",
                "photo": {}
            },
            {
                "id": "employeeId9",
                "firstName": "Natalie",
                "lastName": "Rogers",
                "email": "natalie.rogers@theweb.com",
                "phoneNumber": "1384061621",
                "hireDate": "1980-12-02T14:42:14.412Z",
                "jobId": "jobId9",
                "salary": 105815,
                "commissionPercent": 0.9130579935619779,
                "managerId": "managerId",
                "departmentId": "departmentId9",
                "photo": {}
            },
            {
                "id": "employeeId10",
                "firstName": "Gianna",
                "lastName": "Powell",
                "email": "gianna.powell@theweb.com",
                "phoneNumber": "1727892575",
                "hireDate": "2003-09-04T02:33:11.781Z",
                "jobId": "jobId10",
                "salary": 40806,
                "commissionPercent": 0.1625607360992721,
                "managerId": "managerId",
                "departmentId": "departmentId9",
                "photo": {}
            },
            {
                "id": "employeeId11",
                "firstName": "Isabella",
                "lastName": "Davis,",
                "email": "isabella.davis,@theweb.com",
                "phoneNumber": "1616113998",
                "hireDate": "2001-08-29T21:05:01.162Z",
                "jobId": "jobId11",
                "salary": 180121,
                "commissionPercent": 0.6500735722438856,
                "managerId": "managerId",
                "departmentId": "departmentId1",
                "photo": {}
            },
            {
                "id": "employeeId12",
                "firstName": "Gavin",
                "lastName": "Simmons",
                "email": "gavin.simmons@theweb.com",
                "phoneNumber": "1885573665",
                "hireDate": "2000-06-10T09:58:00.138Z",
                "jobId": "jobId12",
                "salary": 179764,
                "commissionPercent": 0.7732809643257889,
                "managerId": "managerId",
                "departmentId": "departmentId2",
                "photo": {}
            },
            {
                "id": "employeeId13",
                "firstName": "Alice",
                "lastName": "Barnes",
                "email": "alice.barnes@theweb.com",
                "phoneNumber": "1571790641",
                "hireDate": "2009-10-13T00:04:52.265Z",
                "jobId": "jobId13",
                "salary": 44873,
                "commissionPercent": 0.7073056992314221,
                "managerId": "managerId",
                "departmentId": "departmentId1",
                "photo": {}
            },
            {
                "id": "employeeId14",
                "firstName": "Nolan",
                "lastName": "Butler",
                "email": "nolan.butler@theweb.com",
                "phoneNumber": "1253336020",
                "hireDate": "1997-02-09T12:52:08.086Z",
                "jobId": "jobId14",
                "salary": 67681,
                "commissionPercent": 0.6703754730625012,
                "managerId": "managerId",
                "departmentId": "departmentId3",
                "photo": {}
            },
            {
                "id": "employeeId15",
                "firstName": "Kate",
                "lastName": "Gonzalez",
                "email": "kate.gonzalez@theweb.com",
                "phoneNumber": "1601713330",
                "hireDate": "2006-03-14T07:16:20.920Z",
                "jobId": "jobId15",
                "salary": 118993,
                "commissionPercent": 0.41761181002612335,
                "managerId": "managerId",
                "departmentId": "departmentId9",
                "photo": {}
            },
            {
                "id": "employeeId16",
                "firstName": "Jack",
                "lastName": "Robinson",
                "email": "jack.robinson@theweb.com",
                "phoneNumber": "1215126748",
                "hireDate": "1982-05-04T19:54:29.781Z",
                "jobId": "jobId16",
                "salary": 88735,
                "commissionPercent": 0.4446606589757639,
                "managerId": "managerId",
                "departmentId": "departmentId2",
                "photo": {}
            },
            {
                "id": "employeeId17",
                "firstName": "Jackson",
                "lastName": "Hughes",
                "email": "jackson.hughes@theweb.com",
                "phoneNumber": "1061117756",
                "hireDate": "1982-02-15T17:26:18.600Z",
                "jobId": "jobId17",
                "salary": 135971,
                "commissionPercent": 0.5984112361321398,
                "managerId": "managerId",
                "departmentId": "departmentId4",
                "photo": {}
            },
            {
                "id": "employeeId18",
                "firstName": "Noah",
                "lastName": "Kelly",
                "email": "noah.kelly@theweb.com",
                "phoneNumber": "1425302602",
                "hireDate": "2011-05-24T08:40:12.005Z",
                "jobId": "jobId18",
                "salary": 197549,
                "commissionPercent": 1.0571752962569414,
                "managerId": "managerId",
                "departmentId": "departmentId6",
                "photo": {}
            },
            {
                "id": "employeeId19",
                "firstName": "Ryan",
                "lastName": "Torres",
                "email": "ryan.torres@theweb.com",
                "phoneNumber": "1632530405",
                "hireDate": "2001-10-31T00:10:13.763Z",
                "jobId": "jobId19",
                "salary": 62891,
                "commissionPercent": 0.9190630575697888,
                "managerId": "managerId",
                "departmentId": "departmentId9",
                "photo": {}
            },
            {
                "id": "employeeId20",
                "firstName": "Ethan",
                "lastName": "Griffin",
                "email": "ethan.griffin@theweb.com",
                "phoneNumber": "1523777786",
                "hireDate": "2012-02-05T19:44:31.084Z",
                "jobId": "jobId20",
                "salary": 130370,
                "commissionPercent": 1.0782634529969104,
                "managerId": "managerId",
                "departmentId": "departmentId9",
                "photo": {}
            },
            {
                "id": "employeeId21",
                "firstName": "Dominic",
                "lastName": "Allen",
                "email": "dominic.allen@theweb.com",
                "phoneNumber": "1664012536",
                "hireDate": "1991-12-04T06:10:42.363Z",
                "jobId": "jobId21",
                "salary": 119089,
                "commissionPercent": 0.8962616057986009,
                "managerId": "managerId",
                "departmentId": "departmentId4",
                "photo": {}
            },
            {
                "id": "employeeId22",
                "firstName": "Caroline",
                "lastName": "Lewis",
                "email": "caroline.lewis@theweb.com",
                "phoneNumber": "1719381682",
                "hireDate": "1990-05-17T11:18:58.932Z",
                "jobId": "jobId22",
                "salary": 56118,
                "commissionPercent": 0.6929921517281988,
                "managerId": "managerId",
                "departmentId": "departmentId8",
                "photo": {}
            },
            {
                "id": "employeeId23",
                "firstName": "Arianna",
                "lastName": "Carter",
                "email": "arianna.carter@theweb.com",
                "phoneNumber": "1290023380",
                "hireDate": "2006-05-27T23:14:10.623Z",
                "jobId": "jobId23",
                "salary": 57453,
                "commissionPercent": 0.26585014413599317,
                "managerId": "managerId",
                "departmentId": "departmentId2",
                "photo": {}
            },
            {
                "id": "employeeId24",
                "firstName": "Hannah",
                "lastName": "Howard",
                "email": "hannah.howard@theweb.com",
                "phoneNumber": "1482772761",
                "hireDate": "1997-09-20T21:21:09.207Z",
                "jobId": "jobId24",
                "salary": 66312,
                "commissionPercent": 0.9744019509811127,
                "managerId": "managerId",
                "departmentId": "departmentId1",
                "photo": {}
            },
            {
                "id": "employeeId25",
                "firstName": "Madelyn",
                "lastName": "Perry",
                "email": "madelyn.perry@theweb.com",
                "phoneNumber": "1158362418",
                "hireDate": "2000-09-01T17:01:36.666Z",
                "jobId": "jobId25",
                "salary": 41085,
                "commissionPercent": 0.8255857627586939,
                "managerId": "managerId",
                "departmentId": "departmentId7",
                "photo": {}
            },
            {
                "id": "employeeId26",
                "firstName": "Ryder",
                "lastName": "Robinson",
                "email": "ryder.robinson@theweb.com",
                "phoneNumber": "1556752778",
                "hireDate": "1991-08-15T20:14:12.422Z",
                "jobId": "jobId26",
                "salary": 165038,
                "commissionPercent": 0.537628355383556,
                "managerId": "managerId",
                "departmentId": "departmentId7",
                "photo": {}
            },
            {
                "id": "employeeId27",
                "firstName": "Emma",
                "lastName": "Flores",
                "email": "emma.flores@theweb.com",
                "phoneNumber": "1428604893",
                "hireDate": "2011-07-27T20:22:03.197Z",
                "jobId": "jobId27",
                "salary": 37938,
                "commissionPercent": 0.6389558930790734,
                "managerId": "managerId",
                "departmentId": "departmentId1",
                "photo": {}
            },
            {
                "id": "employeeId28",
                "firstName": "Logan",
                "lastName": "Torres",
                "email": "logan.torres@theweb.com",
                "phoneNumber": "1427016752",
                "hireDate": "2010-02-15T03:55:40.945Z",
                "jobId": "jobId28",
                "salary": 201590,
                "commissionPercent": 0.8801625264191321,
                "managerId": "managerId",
                "departmentId": "departmentId5",
                "photo": {}
            },
            {
                "id": "employeeId29",
                "firstName": "Addison",
                "lastName": "Alexander",
                "email": "addison.alexander@theweb.com",
                "phoneNumber": "1947175733",
                "hireDate": "1989-06-14T15:59:49.216Z",
                "jobId": "jobId29",
                "salary": 120947,
                "commissionPercent": 0.8216518835808718,
                "managerId": "managerId",
                "departmentId": "departmentId0",
                "photo": {}
            },
            {
                "id": "employeeId30",
                "firstName": "Lincoln",
                "lastName": "King",
                "email": "lincoln.king@theweb.com",
                "phoneNumber": "1414064731",
                "hireDate": "1980-12-14T07:13:33.107Z",
                "jobId": "jobId30",
                "salary": 158385,
                "commissionPercent": 0.2582727964529289,
                "managerId": "managerId",
                "departmentId": "departmentId5",
                "photo": {}
            },
            {
                "id": "employeeId31",
                "firstName": "Mila",
                "lastName": "Rodriguez",
                "email": "mila.rodriguez@theweb.com",
                "phoneNumber": "1458236816",
                "hireDate": "1984-08-14T15:39:27.162Z",
                "jobId": "jobId31",
                "salary": 23238,
                "commissionPercent": 1.1057777959512125,
                "managerId": "managerId",
                "departmentId": "departmentId7",
                "photo": {}
            },
            {
                "id": "employeeId32",
                "firstName": "Jeremiah",
                "lastName": "King",
                "email": "jeremiah.king@theweb.com",
                "phoneNumber": "1064955577",
                "hireDate": "1984-01-09T19:58:22.093Z",
                "jobId": "jobId32",
                "salary": 24448,
                "commissionPercent": 0.9096178851465276,
                "managerId": "managerId",
                "departmentId": "departmentId4",
                "photo": {}
            },
            {
                "id": "employeeId33",
                "firstName": "Brody",
                "lastName": "Hill",
                "email": "brody.hill@theweb.com",
                "phoneNumber": "1726826781",
                "hireDate": "1999-11-07T16:54:01.898Z",
                "jobId": "jobId33",
                "salary": 90114,
                "commissionPercent": 0.2122055328730191,
                "managerId": "managerId",
                "departmentId": "departmentId2",
                "photo": {}
            },
            {
                "id": "employeeId34",
                "firstName": "Eliana",
                "lastName": "Hill",
                "email": "eliana.hill@theweb.com",
                "phoneNumber": "1561313714",
                "hireDate": "1980-04-02T19:07:48.643Z",
                "jobId": "jobId34",
                "salary": 46886,
                "commissionPercent": 0.5256341397432839,
                "managerId": "managerId",
                "departmentId": "departmentId6",
                "photo": {}
            },
            {
                "id": "employeeId35",
                "firstName": "Landon",
                "lastName": "Flores",
                "email": "landon.flores@theweb.com",
                "phoneNumber": "1594853194",
                "hireDate": "1996-07-30T18:33:52.652Z",
                "jobId": "jobId35",
                "salary": 92997,
                "commissionPercent": 1.1052742453253612,
                "managerId": "managerId",
                "departmentId": "departmentId3",
                "photo": {}
            },
            {
                "id": "employeeId36",
                "firstName": "Asher",
                "lastName": "Martin",
                "email": "asher.martin@theweb.com",
                "phoneNumber": "1274852021",
                "hireDate": "1982-10-31T16:42:57.149Z",
                "jobId": "jobId36",
                "salary": 82303,
                "commissionPercent": 0.5467619708308512,
                "managerId": "managerId",
                "departmentId": "departmentId2",
                "photo": {}
            },
            {
                "id": "employeeId37",
                "firstName": "Alyssa",
                "lastName": "Brooks",
                "email": "alyssa.brooks@theweb.com",
                "phoneNumber": "1548636380",
                "hireDate": "1990-11-18T11:16:23.833Z",
                "jobId": "jobId37",
                "salary": 169649,
                "commissionPercent": 0.2622400200681224,
                "managerId": "managerId",
                "departmentId": "departmentId1",
                "photo": {}
            },
            {
                "id": "employeeId38",
                "firstName": "Eva",
                "lastName": "Young",
                "email": "eva.young@theweb.com",
                "phoneNumber": "1560913451",
                "hireDate": "1995-01-09T21:54:31.785Z",
                "jobId": "jobId38",
                "salary": 193368,
                "commissionPercent": 1.0468090510181314,
                "managerId": "managerId",
                "departmentId": "departmentId3",
                "photo": {}
            },
            {
                "id": "employeeId39",
                "firstName": "Parker",
                "lastName": "Clark",
                "email": "parker.clark@theweb.com",
                "phoneNumber": "1725541507",
                "hireDate": "1989-03-21T09:38:43.441Z",
                "jobId": "jobId39",
                "salary": 131149,
                "commissionPercent": 0.5353940948233619,
                "managerId": "managerId",
                "departmentId": "departmentId1",
                "photo": {}
            },
            {
                "id": "employeeId40",
                "firstName": "Maria",
                "lastName": "Morris",
                "email": "maria.morris@theweb.com",
                "phoneNumber": "1824571959",
                "hireDate": "2002-01-19T16:53:53.067Z",
                "jobId": "jobId40",
                "salary": 156061,
                "commissionPercent": 0.7779768824735708,
                "managerId": "managerId",
                "departmentId": "departmentId0",
                "photo": {}
            },
            {
                "id": "employeeId41",
                "firstName": "Isabelle",
                "lastName": "Adams",
                "email": "isabelle.adams@theweb.com",
                "phoneNumber": "1163626231",
                "hireDate": "2007-04-05T17:26:07.987Z",
                "jobId": "jobId41",
                "salary": 125569,
                "commissionPercent": 0.24045544255252657,
                "managerId": "managerId",
                "departmentId": "departmentId9",
                "photo": {}
            },
            {
                "id": "employeeId42",
                "firstName": "Thomas",
                "lastName": "James",
                "email": "thomas.james@theweb.com",
                "phoneNumber": "1082225626",
                "hireDate": "2007-07-06T01:43:23.397Z",
                "jobId": "jobId42",
                "salary": 107371,
                "commissionPercent": 0.895026561774738,
                "managerId": "managerId",
                "departmentId": "departmentId2",
                "photo": {}
            },
            {
                "id": "employeeId43",
                "firstName": "Brianna",
                "lastName": "Harris",
                "email": "brianna.harris@theweb.com",
                "phoneNumber": "1011506017",
                "hireDate": "2006-05-15T07:46:57.627Z",
                "jobId": "jobId43",
                "salary": 21221,
                "commissionPercent": 0.714536904382466,
                "managerId": "managerId",
                "departmentId": "departmentId9",
                "photo": {}
            },
            {
                "id": "employeeId44",
                "firstName": "Jasmine",
                "lastName": "Lopez",
                "email": "jasmine.lopez@theweb.com",
                "phoneNumber": "1578774282",
                "hireDate": "2001-12-14T23:01:48.808Z",
                "jobId": "jobId44",
                "salary": 52847,
                "commissionPercent": 1.100934516128679,
                "managerId": "managerId",
                "departmentId": "departmentId8",
                "photo": {}
            },
            {
                "id": "employeeId45",
                "firstName": "Caleb",
                "lastName": "Hill",
                "email": "caleb.hill@theweb.com",
                "phoneNumber": "1680461047",
                "hireDate": "2011-06-16T05:42:06.959Z",
                "jobId": "jobId45",
                "salary": 12138,
                "commissionPercent": 1.0945128730788312,
                "managerId": "managerId",
                "departmentId": "departmentId8",
                "photo": {}
            },
            {
                "id": "employeeId46",
                "firstName": "Dominic",
                "lastName": "Brown,",
                "email": "dominic.brown,@theweb.com",
                "phoneNumber": "1058180254",
                "hireDate": "2007-09-28T23:38:37.270Z",
                "jobId": "jobId46",
                "salary": 135832,
                "commissionPercent": 0.730239236719073,
                "managerId": "managerId",
                "departmentId": "departmentId7",
                "photo": {}
            },
            {
                "id": "employeeId47",
                "firstName": "Joshua",
                "lastName": "Mitchell",
                "email": "joshua.mitchell@theweb.com",
                "phoneNumber": "1837779959",
                "hireDate": "2004-03-17T07:56:23.556Z",
                "jobId": "jobId47",
                "salary": 90812,
                "commissionPercent": 0.999466503257363,
                "managerId": "managerId",
                "departmentId": "departmentId6",
                "photo": {}
            },
            {
                "id": "employeeId48",
                "firstName": "Carter",
                "lastName": "Turner",
                "email": "carter.turner@theweb.com",
                "phoneNumber": "1617825185",
                "hireDate": "1998-09-26T20:11:00.807Z",
                "jobId": "jobId48",
                "salary": 93293,
                "commissionPercent": 0.8320045512866688,
                "managerId": "managerId",
                "departmentId": "departmentId5",
                "photo": {}
            },
            {
                "id": "employeeId49",
                "firstName": "Taylor",
                "lastName": "Lewis",
                "email": "taylor.lewis@theweb.com",
                "phoneNumber": "1520235900",
                "hireDate": "2012-02-09T15:43:50.805Z",
                "jobId": "jobId49",
                "salary": 101913,
                "commissionPercent": 1.1349077484846335,
                "managerId": "managerId",
                "departmentId": "departmentId1",
                "photo": {}
            },
            {
                "id": "employeeId50",
                "firstName": "Leah",
                "lastName": "Thompson",
                "email": "leah.thompson@theweb.com",
                "phoneNumber": "1647425519",
                "hireDate": "1987-09-01T23:32:11.310Z",
                "jobId": "jobId41",
                "salary": 118233,
                "commissionPercent": 0.9252735035085494,
                "managerId": "managerId",
                "departmentId": "departmentId1",
                "photo": {}
            },
            {
                "id": "employeeId51",
                "firstName": "Eli",
                "lastName": "Butler",
                "email": "eli.butler@theweb.com",
                "phoneNumber": "1922652441",
                "hireDate": "1991-06-08T23:22:54.895Z",
                "jobId": "jobId33",
                "salary": 162171,
                "commissionPercent": 0.5580634843451725,
                "managerId": "managerId",
                "departmentId": "departmentId6",
                "photo": {}
            },
            {
                "id": "employeeId52",
                "firstName": "Eliana",
                "lastName": "Campbell",
                "email": "eliana.campbell@theweb.com",
                "phoneNumber": "1971802299",
                "hireDate": "1994-11-28T13:41:34.307Z",
                "jobId": "jobId11",
                "salary": 114232,
                "commissionPercent": 0.3340041830732835,
                "managerId": "managerId",
                "departmentId": "departmentId6",
                "photo": {}
            },
            {
                "id": "employeeId53",
                "firstName": "Chloe",
                "lastName": "Hayes",
                "email": "chloe.hayes@theweb.com",
                "phoneNumber": "1599984763",
                "hireDate": "1995-11-26T13:19:10.584Z",
                "jobId": "jobId6",
                "salary": 153532,
                "commissionPercent": 0.3483036932986091,
                "managerId": "managerId",
                "departmentId": "departmentId5",
                "photo": {}
            },
            {
                "id": "employeeId54",
                "firstName": "Samuel",
                "lastName": "Mitchell",
                "email": "samuel.mitchell@theweb.com",
                "phoneNumber": "1999638266",
                "hireDate": "2007-01-05T11:24:03.081Z",
                "jobId": "jobId30",
                "salary": 87168,
                "commissionPercent": 0.7920732543517156,
                "managerId": "managerId",
                "departmentId": "departmentId6",
                "photo": {}
            },
            {
                "id": "employeeId55",
                "firstName": "Alice",
                "lastName": "Green",
                "email": "alice.green@theweb.com",
                "phoneNumber": "1106583746",
                "hireDate": "2013-07-25T15:01:44.843Z",
                "jobId": "jobId4",
                "salary": 191546,
                "commissionPercent": 1.1092601948466205,
                "managerId": "managerId",
                "departmentId": "departmentId0",
                "photo": {}
            },
            {
                "id": "employeeId56",
                "firstName": "Hudson",
                "lastName": "White",
                "email": "hudson.white@theweb.com",
                "phoneNumber": "1757667094",
                "hireDate": "1996-12-21T02:59:08.334Z",
                "jobId": "jobId39",
                "salary": 102693,
                "commissionPercent": 0.8165628665746792,
                "managerId": "managerId",
                "departmentId": "departmentId5",
                "photo": {}
            },
            {
                "id": "employeeId57",
                "firstName": "Sydney",
                "lastName": "Bell",
                "email": "sydney.bell@theweb.com",
                "phoneNumber": "1663376484",
                "hireDate": "1985-05-23T21:14:33.561Z",
                "jobId": "jobId43",
                "salary": 40061,
                "commissionPercent": 1.0975034823118086,
                "managerId": "managerId",
                "departmentId": "departmentId4",
                "photo": {}
            },
            {
                "id": "employeeId58",
                "firstName": "Evelyn",
                "lastName": "Hall",
                "email": "evelyn.hall@theweb.com",
                "phoneNumber": "1296299634",
                "hireDate": "1999-07-17T07:59:40.917Z",
                "jobId": "jobId0",
                "salary": 105361,
                "commissionPercent": 0.8672307564866887,
                "managerId": "managerId",
                "departmentId": "departmentId4",
                "photo": {}
            },
            {
                "id": "employeeId59",
                "firstName": "Brooke",
                "lastName": "Allen",
                "email": "brooke.allen@theweb.com",
                "phoneNumber": "1164629354",
                "hireDate": "1990-04-13T08:07:18.003Z",
                "jobId": "jobId14",
                "salary": 24268,
                "commissionPercent": 0.5936206065931834,
                "managerId": "managerId",
                "departmentId": "departmentId9",
                "photo": {}
            },
            {
                "id": "employeeId60",
                "firstName": "Layla",
                "lastName": "Hayes",
                "email": "layla.hayes@theweb.com",
                "phoneNumber": "1155969487",
                "hireDate": "2012-08-03T00:34:54.169Z",
                "jobId": "jobId28",
                "salary": 145893,
                "commissionPercent": 0.38423960808810886,
                "managerId": "managerId",
                "departmentId": "departmentId3",
                "photo": {}
            },
            {
                "id": "employeeId61",
                "firstName": "Kylie",
                "lastName": "Rivera",
                "email": "kylie.rivera@theweb.com",
                "phoneNumber": "1958097913",
                "hireDate": "1988-12-18T17:42:29.315Z",
                "jobId": "jobId38",
                "salary": 192651,
                "commissionPercent": 1.1223651072906107,
                "managerId": "managerId",
                "departmentId": "departmentId8",
                "photo": {}
            },
            {
                "id": "employeeId62",
                "firstName": "Brooklyn",
                "lastName": "Phillips",
                "email": "brooklyn.phillips@theweb.com",
                "phoneNumber": "1916516475",
                "hireDate": "1991-10-07T13:25:16.391Z",
                "jobId": "jobId2",
                "salary": 92146,
                "commissionPercent": 0.33554346957029335,
                "managerId": "managerId",
                "departmentId": "departmentId7",
                "photo": {}
            },
            {
                "id": "employeeId63",
                "firstName": "Alexa",
                "lastName": "Martin",
                "email": "alexa.martin@theweb.com",
                "phoneNumber": "1415765272",
                "hireDate": "1988-08-31T03:50:45.671Z",
                "jobId": "jobId20",
                "salary": 41284,
                "commissionPercent": 1.109386480139874,
                "managerId": "managerId",
                "departmentId": "departmentId4",
                "photo": {}
            },
            {
                "id": "employeeId64",
                "firstName": "Christian",
                "lastName": "Robinson",
                "email": "christian.robinson@theweb.com",
                "phoneNumber": "1586202035",
                "hireDate": "1984-03-01T18:02:29.539Z",
                "jobId": "jobId4",
                "salary": 159737,
                "commissionPercent": 1.1366606985044514,
                "managerId": "managerId",
                "departmentId": "departmentId7",
                "photo": {}
            },
            {
                "id": "employeeId65",
                "firstName": "Xavier",
                "lastName": "Evans",
                "email": "xavier.evans@theweb.com",
                "phoneNumber": "1110136254",
                "hireDate": "2001-01-30T20:11:23.767Z",
                "jobId": "jobId31",
                "salary": 20925,
                "commissionPercent": 1.0903573069665022,
                "managerId": "managerId",
                "departmentId": "departmentId0",
                "photo": {}
            },
            {
                "id": "employeeId66",
                "firstName": "Riley",
                "lastName": "Baker",
                "email": "riley.baker@theweb.com",
                "phoneNumber": "1293103884",
                "hireDate": "2002-05-10T06:41:15.805Z",
                "jobId": "jobId32",
                "salary": 21954,
                "commissionPercent": 0.7310719512307228,
                "managerId": "managerId",
                "departmentId": "departmentId5",
                "photo": {}
            },
            {
                "id": "employeeId67",
                "firstName": "Brianna",
                "lastName": "Williams",
                "email": "brianna.williams@theweb.com",
                "phoneNumber": "1090376831",
                "hireDate": "2014-08-07T15:37:58.412Z",
                "jobId": "jobId0",
                "salary": 128966,
                "commissionPercent": 0.8332759737104262,
                "managerId": "managerId",
                "departmentId": "departmentId4",
                "photo": {}
            },
            {
                "id": "employeeId68",
                "firstName": "Asher",
                "lastName": "Baker",
                "email": "asher.baker@theweb.com",
                "phoneNumber": "1901329511",
                "hireDate": "1997-05-19T08:34:55.128Z",
                "jobId": "jobId33",
                "salary": 49974,
                "commissionPercent": 0.9745237135520176,
                "managerId": "managerId",
                "departmentId": "departmentId0",
                "photo": {}
            },
            {
                "id": "employeeId69",
                "firstName": "Ryder",
                "lastName": "James",
                "email": "ryder.james@theweb.com",
                "phoneNumber": "1380338778",
                "hireDate": "1999-06-15T22:40:48.681Z",
                "jobId": "jobId7",
                "salary": 46815,
                "commissionPercent": 0.2485870457330138,
                "managerId": "managerId",
                "departmentId": "departmentId0",
                "photo": {}
            },
            {
                "id": "employeeId70",
                "firstName": "Alyssa",
                "lastName": "Clark",
                "email": "alyssa.clark@theweb.com",
                "phoneNumber": "1739978734",
                "hireDate": "2009-02-01T11:50:56.810Z",
                "jobId": "jobId23",
                "salary": 52921,
                "commissionPercent": 0.3695602219950188,
                "managerId": "managerId",
                "departmentId": "departmentId8",
                "photo": {}
            },
            {
                "id": "employeeId71",
                "firstName": "Brooke",
                "lastName": "Rodriguez",
                "email": "brooke.rodriguez@theweb.com",
                "phoneNumber": "1588203000",
                "hireDate": "1985-01-01T12:19:15.986Z",
                "jobId": "jobId13",
                "salary": 73999,
                "commissionPercent": 0.3986286656786461,
                "managerId": "managerId",
                "departmentId": "departmentId3",
                "photo": {}
            },
            {
                "id": "employeeId72",
                "firstName": "Alexandra",
                "lastName": "Hayes",
                "email": "alexandra.hayes@theweb.com",
                "phoneNumber": "1379275705",
                "hireDate": "1995-06-30T07:02:09.128Z",
                "jobId": "jobId0",
                "salary": 110997,
                "commissionPercent": 0.5024798602894757,
                "managerId": "managerId",
                "departmentId": "departmentId3",
                "photo": {}
            },
            {
                "id": "employeeId73",
                "firstName": "Eliana",
                "lastName": "Lopez",
                "email": "eliana.lopez@theweb.com",
                "phoneNumber": "1145075910",
                "hireDate": "1989-08-11T03:17:52.434Z",
                "jobId": "jobId49",
                "salary": 60337,
                "commissionPercent": 0.32990082945209565,
                "managerId": "managerId",
                "departmentId": "departmentId2",
                "photo": {}
            },
            {
                "id": "employeeId74",
                "firstName": "Declan",
                "lastName": "Morris",
                "email": "declan.morris@theweb.com",
                "phoneNumber": "1301310727",
                "hireDate": "1988-07-19T03:15:11.273Z",
                "jobId": "jobId49",
                "salary": 206144,
                "commissionPercent": 1.0570304864198445,
                "managerId": "managerId",
                "departmentId": "departmentId7",
                "photo": {}
            },
            {
                "id": "employeeId75",
                "firstName": "Kennedy",
                "lastName": "Williams",
                "email": "kennedy.williams@theweb.com",
                "phoneNumber": "1821892706",
                "hireDate": "2004-09-11T13:16:24.306Z",
                "jobId": "jobId2",
                "salary": 190669,
                "commissionPercent": 0.8431461801189498,
                "managerId": "managerId",
                "departmentId": "departmentId8",
                "photo": {}
            },
            {
                "id": "employeeId76",
                "firstName": "Stella",
                "lastName": "Peterson",
                "email": "stella.peterson@theweb.com",
                "phoneNumber": "1801796259",
                "hireDate": "1991-02-18T02:47:53.395Z",
                "jobId": "jobId8",
                "salary": 193828,
                "commissionPercent": 0.5093487969006557,
                "managerId": "managerId",
                "departmentId": "departmentId8",
                "photo": {}
            },
            {
                "id": "employeeId77",
                "firstName": "Elijah",
                "lastName": "Wood",
                "email": "elijah.wood@theweb.com",
                "phoneNumber": "1885164177",
                "hireDate": "1988-04-18T21:38:11.539Z",
                "jobId": "jobId34",
                "salary": 203988,
                "commissionPercent": 0.16862908867165757,
                "managerId": "managerId",
                "departmentId": "departmentId4",
                "photo": {}
            },
            {
                "id": "employeeId78",
                "firstName": "Layla",
                "lastName": "Campbell",
                "email": "layla.campbell@theweb.com",
                "phoneNumber": "1890013976",
                "hireDate": "2012-10-17T15:14:13.024Z",
                "jobId": "jobId36",
                "salary": 43148,
                "commissionPercent": 0.29422379701709256,
                "managerId": "managerId",
                "departmentId": "departmentId9",
                "photo": {}
            },
            {
                "id": "employeeId79",
                "firstName": "Nathaniel",
                "lastName": "Price",
                "email": "nathaniel.price@theweb.com",
                "phoneNumber": "1044784842",
                "hireDate": "2007-04-28T18:01:19.372Z",
                "jobId": "jobId5",
                "salary": 139228,
                "commissionPercent": 0.7962099692437025,
                "managerId": "managerId",
                "departmentId": "departmentId6",
                "photo": {}
            },
            {
                "id": "employeeId80",
                "firstName": "Elise",
                "lastName": "Hughes",
                "email": "elise.hughes@theweb.com",
                "phoneNumber": "1274206335",
                "hireDate": "1981-05-06T21:47:02.664Z",
                "jobId": "jobId30",
                "salary": 158537,
                "commissionPercent": 1.1101332971640583,
                "managerId": "managerId",
                "departmentId": "departmentId5",
                "photo": {}
            },
            {
                "id": "employeeId81",
                "firstName": "Anna",
                "lastName": "Simmons",
                "email": "anna.simmons@theweb.com",
                "phoneNumber": "1438815916",
                "hireDate": "2010-12-07T15:36:44.251Z",
                "jobId": "jobId16",
                "salary": 13279,
                "commissionPercent": 0.680701654039365,
                "managerId": "managerId",
                "departmentId": "departmentId0",
                "photo": {}
            },
            {
                "id": "employeeId82",
                "firstName": "Cooper",
                "lastName": "Butler",
                "email": "cooper.butler@theweb.com",
                "phoneNumber": "1976491517",
                "hireDate": "1995-01-25T04:02:33.301Z",
                "jobId": "jobId7",
                "salary": 184226,
                "commissionPercent": 0.7315145137856033,
                "managerId": "managerId",
                "departmentId": "departmentId6",
                "photo": {}
            },
            {
                "id": "employeeId83",
                "firstName": "Evan",
                "lastName": "Perez",
                "email": "evan.perez@theweb.com",
                "phoneNumber": "1409357031",
                "hireDate": "1980-07-04T02:34:08.848Z",
                "jobId": "jobId28",
                "salary": 24856,
                "commissionPercent": 0.841169080613679,
                "managerId": "managerId",
                "departmentId": "departmentId0",
                "photo": {}
            },
            {
                "id": "employeeId84",
                "firstName": "Jackson",
                "lastName": "Russell",
                "email": "jackson.russell@theweb.com",
                "phoneNumber": "1122558395",
                "hireDate": "2005-04-18T08:13:22.666Z",
                "jobId": "jobId20",
                "salary": 120492,
                "commissionPercent": 1.0693753286689174,
                "managerId": "managerId",
                "departmentId": "departmentId3",
                "photo": {}
            },
            {
                "id": "employeeId85",
                "firstName": "Grace",
                "lastName": "Davis,",
                "email": "grace.davis,@theweb.com",
                "phoneNumber": "1938466504",
                "hireDate": "2014-06-16T01:57:11.628Z",
                "jobId": "jobId20",
                "salary": 71728,
                "commissionPercent": 0.2550448206303465,
                "managerId": "managerId",
                "departmentId": "departmentId9",
                "photo": {}
            },
            {
                "id": "employeeId86",
                "firstName": "Oliver",
                "lastName": "Wilson",
                "email": "oliver.wilson@theweb.com",
                "phoneNumber": "1089683911",
                "hireDate": "2012-07-01T05:51:09.005Z",
                "jobId": "jobId8",
                "salary": 42214,
                "commissionPercent": 0.2537771675074475,
                "managerId": "managerId",
                "departmentId": "departmentId4",
                "photo": {}
            },
            {
                "id": "employeeId87",
                "firstName": "Jason",
                "lastName": "Bryant",
                "email": "jason.bryant@theweb.com",
                "phoneNumber": "1095993222",
                "hireDate": "1988-05-27T13:45:08.940Z",
                "jobId": "jobId9",
                "salary": 84340,
                "commissionPercent": 0.8014679954472012,
                "managerId": "managerId",
                "departmentId": "departmentId5",
                "photo": {}
            },
            {
                "id": "employeeId88",
                "firstName": "Victoria",
                "lastName": "Phillips",
                "email": "victoria.phillips@theweb.com",
                "phoneNumber": "1589665864",
                "hireDate": "1983-08-15T18:33:47.812Z",
                "jobId": "jobId31",
                "salary": 82377,
                "commissionPercent": 0.19948892492375445,
                "managerId": "managerId",
                "departmentId": "departmentId4",
                "photo": {}
            },
            {
                "id": "employeeId89",
                "firstName": "Sebastian",
                "lastName": "Martin",
                "email": "sebastian.martin@theweb.com",
                "phoneNumber": "1064455567",
                "hireDate": "2004-07-28T11:45:20.184Z",
                "jobId": "jobId48",
                "salary": 73450,
                "commissionPercent": 0.3022633661969646,
                "managerId": "managerId",
                "departmentId": "departmentId1",
                "photo": {}
            },
            {
                "id": "employeeId90",
                "firstName": "Micah",
                "lastName": "Murphy",
                "email": "micah.murphy@theweb.com",
                "phoneNumber": "1986173490",
                "hireDate": "1982-04-15T03:32:10.248Z",
                "jobId": "jobId30",
                "salary": 79697,
                "commissionPercent": 0.6983319646663718,
                "managerId": "managerId",
                "departmentId": "departmentId2",
                "photo": {}
            },
            {
                "id": "employeeId91",
                "firstName": "David",
                "lastName": "Bell",
                "email": "david.bell@theweb.com",
                "phoneNumber": "1077258145",
                "hireDate": "2014-05-25T07:34:06.973Z",
                "jobId": "jobId26",
                "salary": 183010,
                "commissionPercent": 0.40563588829584607,
                "managerId": "managerId",
                "departmentId": "departmentId8",
                "photo": {}
            },
            {
                "id": "employeeId92",
                "firstName": "Taylor",
                "lastName": "Miller,",
                "email": "taylor.miller,@theweb.com",
                "phoneNumber": "1179329314",
                "hireDate": "1987-05-04T15:40:34.426Z",
                "jobId": "jobId14",
                "salary": 48801,
                "commissionPercent": 0.2448006780197541,
                "managerId": "managerId",
                "departmentId": "departmentId5",
                "photo": {}
            },
            {
                "id": "employeeId93",
                "firstName": "Colton",
                "lastName": "Perry",
                "email": "colton.perry@theweb.com",
                "phoneNumber": "1708137671",
                "hireDate": "2001-10-25T05:35:01.109Z",
                "jobId": "jobId1",
                "salary": 67378,
                "commissionPercent": 0.7664620580848708,
                "managerId": "managerId",
                "departmentId": "departmentId9",
                "photo": {}
            },
            {
                "id": "employeeId94",
                "firstName": "Chloe",
                "lastName": "Phillips",
                "email": "chloe.phillips@theweb.com",
                "phoneNumber": "1801274697",
                "hireDate": "2005-12-20T21:23:19.157Z",
                "jobId": "jobId4",
                "salary": 37174,
                "commissionPercent": 0.6406691431550048,
                "managerId": "managerId",
                "departmentId": "departmentId3",
                "photo": {}
            },
            {
                "id": "employeeId95",
                "firstName": "Joshua",
                "lastName": "Harris",
                "email": "joshua.harris@theweb.com",
                "phoneNumber": "1716302215",
                "hireDate": "1989-11-14T05:23:54.364Z",
                "jobId": "jobId13",
                "salary": 65638,
                "commissionPercent": 0.32078492270276404,
                "managerId": "managerId",
                "departmentId": "departmentId7",
                "photo": {}
            },
            {
                "id": "employeeId96",
                "firstName": "Micah",
                "lastName": "Griffin",
                "email": "micah.griffin@theweb.com",
                "phoneNumber": "1308117464",
                "hireDate": "2001-05-10T08:20:04.642Z",
                "jobId": "jobId3",
                "salary": 104904,
                "commissionPercent": 0.6009532972422037,
                "managerId": "managerId",
                "departmentId": "departmentId6",
                "photo": {}
            },
            {
                "id": "employeeId97",
                "firstName": "Reese",
                "lastName": "Cooper",
                "email": "reese.cooper@theweb.com",
                "phoneNumber": "1430429878",
                "hireDate": "2001-04-13T08:17:07.591Z",
                "jobId": "jobId3",
                "salary": 193965,
                "commissionPercent": 0.7436535353179704,
                "managerId": "managerId",
                "departmentId": "departmentId9",
                "photo": {}
            },
            {
                "id": "employeeId98",
                "firstName": "Declan",
                "lastName": "Price",
                "email": "declan.price@theweb.com",
                "phoneNumber": "1996299863",
                "hireDate": "1980-12-27T11:10:46.896Z",
                "jobId": "jobId42",
                "salary": 163262,
                "commissionPercent": 0.6677176947623827,
                "managerId": "managerId",
                "departmentId": "departmentId9",
                "photo": {}
            },
            {
                "id": "employeeId99",
                "firstName": "Aria",
                "lastName": "Hill",
                "email": "aria.hill@theweb.com",
                "phoneNumber": "1453261262",
                "hireDate": "1993-02-09T06:18:31.399Z",
                "jobId": "jobId15",
                "salary": 121654,
                "commissionPercent": 0.9674978228811756,
                "managerId": "managerId",
                "departmentId": "departmentId7",
                "photo": {}
            },
            {
                "id": "employeeId100",
                "firstName": "Chloe",
                "lastName": "Rogers",
                "email": "chloe.rogers@theweb.com",
                "phoneNumber": "1370000317",
                "hireDate": "2004-08-07T10:03:29.972Z",
                "jobId": "jobId33",
                "salary": 114112,
                "commissionPercent": 0.1571074499331205,
                "managerId": "managerId",
                "departmentId": "departmentId8",
                "photo": {}
            },
            {
                "id": "employeeId101",
                "firstName": "Xavier",
                "lastName": "Allen",
                "email": "xavier.allen@theweb.com",
                "phoneNumber": "1354650571",
                "hireDate": "2003-05-21T20:28:26.527Z",
                "jobId": "jobId33",
                "salary": 169001,
                "commissionPercent": 1.0598817952713744,
                "managerId": "managerId",
                "departmentId": "departmentId8",
                "photo": {}
            },
            {
                "id": "employeeId102",
                "firstName": "Lincoln",
                "lastName": "Edwards",
                "email": "lincoln.edwards@theweb.com",
                "phoneNumber": "1476036062",
                "hireDate": "2005-04-24T18:50:18.204Z",
                "jobId": "jobId23",
                "salary": 48993,
                "commissionPercent": 0.49758414218813873,
                "managerId": "managerId",
                "departmentId": "departmentId4",
                "photo": {}
            },
            {
                "id": "employeeId103",
                "firstName": "Jake",
                "lastName": "Reed",
                "email": "jake.reed@theweb.com",
                "phoneNumber": "1926965337",
                "hireDate": "1992-02-01T01:00:46.477Z",
                "jobId": "jobId0",
                "salary": 52283,
                "commissionPercent": 0.6846241973045669,
                "managerId": "managerId",
                "departmentId": "departmentId0",
                "photo": {}
            },
            {
                "id": "employeeId104",
                "firstName": "Lucy",
                "lastName": "Martin",
                "email": "lucy.martin@theweb.com",
                "phoneNumber": "1538538173",
                "hireDate": "1996-09-20T12:47:03.533Z",
                "jobId": "jobId31",
                "salary": 29827,
                "commissionPercent": 0.5315095942902553,
                "managerId": "managerId",
                "departmentId": "departmentId5",
                "photo": {}
            },
            {
                "id": "employeeId105",
                "firstName": "Christian",
                "lastName": "Jackson",
                "email": "christian.jackson@theweb.com",
                "phoneNumber": "1433918622",
                "hireDate": "2005-08-23T04:58:01.875Z",
                "jobId": "jobId46",
                "salary": 59013,
                "commissionPercent": 0.4898380655449547,
                "managerId": "managerId",
                "departmentId": "departmentId1",
                "photo": {}
            },
            {
                "id": "employeeId106",
                "firstName": "Jeremiah",
                "lastName": "Brooks",
                "email": "jeremiah.brooks@theweb.com",
                "phoneNumber": "1814980299",
                "hireDate": "1982-08-20T22:57:07.416Z",
                "jobId": "jobId8",
                "salary": 202200,
                "commissionPercent": 0.2901722331006765,
                "managerId": "managerId",
                "departmentId": "departmentId8",
                "photo": {}
            },
            {
                "id": "employeeId107",
                "firstName": "Sarah",
                "lastName": "Johnson",
                "email": "sarah.johnson@theweb.com",
                "phoneNumber": "1118385498",
                "hireDate": "2006-02-01T02:50:40.261Z",
                "jobId": "jobId12",
                "salary": 32346,
                "commissionPercent": 1.0410333569727914,
                "managerId": "managerId",
                "departmentId": "departmentId8",
                "photo": {}
            },
            {
                "id": "employeeId108",
                "firstName": "Isla",
                "lastName": "Carter",
                "email": "isla.carter@theweb.com",
                "phoneNumber": "1548312762",
                "hireDate": "2013-08-28T20:57:28.229Z",
                "jobId": "jobId46",
                "salary": 115718,
                "commissionPercent": 0.4053105247118852,
                "managerId": "managerId",
                "departmentId": "departmentId9",
                "photo": {}
            },
            {
                "id": "employeeId109",
                "firstName": "Elena",
                "lastName": "Johnson",
                "email": "elena.johnson@theweb.com",
                "phoneNumber": "1824132315",
                "hireDate": "1982-07-03T11:28:12.515Z",
                "jobId": "jobId9",
                "salary": 158254,
                "commissionPercent": 0.3830238337294535,
                "managerId": "managerId",
                "departmentId": "departmentId5",
                "photo": {}
            },
            {
                "id": "employeeId110",
                "firstName": "Grace",
                "lastName": "Roberts",
                "email": "grace.roberts@theweb.com",
                "phoneNumber": "1456879811",
                "hireDate": "1991-02-10T10:57:15.715Z",
                "jobId": "jobId41",
                "salary": 50506,
                "commissionPercent": 0.640646922083595,
                "managerId": "managerId",
                "departmentId": "departmentId0",
                "photo": {}
            },
            {
                "id": "employeeId111",
                "firstName": "Anthony",
                "lastName": "Moore",
                "email": "anthony.moore@theweb.com",
                "phoneNumber": "1875091243",
                "hireDate": "1987-01-24T17:12:34.062Z",
                "jobId": "jobId5",
                "salary": 71337,
                "commissionPercent": 0.564429677310419,
                "managerId": "managerId",
                "departmentId": "departmentId6",
                "photo": {}
            },
            {
                "id": "employeeId112",
                "firstName": "Anna",
                "lastName": "Green",
                "email": "anna.green@theweb.com",
                "phoneNumber": "1734254001",
                "hireDate": "1988-04-09T04:41:56.393Z",
                "jobId": "jobId16",
                "salary": 183544,
                "commissionPercent": 1.0705542811940658,
                "managerId": "managerId",
                "departmentId": "departmentId6",
                "photo": {}
            },
            {
                "id": "employeeId113",
                "firstName": "Isabelle",
                "lastName": "Bailey",
                "email": "isabelle.bailey@theweb.com",
                "phoneNumber": "1082639621",
                "hireDate": "1995-09-13T12:47:38.831Z",
                "jobId": "jobId38",
                "salary": 64074,
                "commissionPercent": 0.47981816437874036,
                "managerId": "managerId",
                "departmentId": "departmentId0",
                "photo": {}
            },
            {
                "id": "employeeId114",
                "firstName": "Blake",
                "lastName": "Hayes",
                "email": "blake.hayes@theweb.com",
                "phoneNumber": "1616431346",
                "hireDate": "1995-09-19T12:30:05.794Z",
                "jobId": "jobId37",
                "salary": 96311,
                "commissionPercent": 0.424530947845133,
                "managerId": "managerId",
                "departmentId": "departmentId8",
                "photo": {}
            },
            {
                "id": "employeeId115",
                "firstName": "Stella",
                "lastName": "Rivera",
                "email": "stella.rivera@theweb.com",
                "phoneNumber": "1410724535",
                "hireDate": "1995-06-21T00:34:45.840Z",
                "jobId": "jobId48",
                "salary": 105781,
                "commissionPercent": 1.118335288703329,
                "managerId": "managerId",
                "departmentId": "departmentId8",
                "photo": {}
            },
            {
                "id": "employeeId116",
                "firstName": "Nathaniel",
                "lastName": "White",
                "email": "nathaniel.white@theweb.com",
                "phoneNumber": "1499074254",
                "hireDate": "1994-02-07T13:53:03.694Z",
                "jobId": "jobId20",
                "salary": 15945,
                "commissionPercent": 0.3500763099991878,
                "managerId": "managerId",
                "departmentId": "departmentId4",
                "photo": {}
            },
            {
                "id": "employeeId117",
                "firstName": "Gabriella",
                "lastName": "Phillips",
                "email": "gabriella.phillips@theweb.com",
                "phoneNumber": "1834747563",
                "hireDate": "1999-12-17T11:43:07.668Z",
                "jobId": "jobId24",
                "salary": 186075,
                "commissionPercent": 0.5204884212031592,
                "managerId": "managerId",
                "departmentId": "departmentId4",
                "photo": {}
            },
            {
                "id": "employeeId118",
                "firstName": "Ruby",
                "lastName": "Smith",
                "email": "ruby.smith@theweb.com",
                "phoneNumber": "1663407162",
                "hireDate": "1981-10-24T15:45:11.820Z",
                "jobId": "jobId38",
                "salary": 144029,
                "commissionPercent": 0.47943775139031486,
                "managerId": "managerId",
                "departmentId": "departmentId3",
                "photo": {}
            },
            {
                "id": "employeeId119",
                "firstName": "Elise",
                "lastName": "Mitchell",
                "email": "elise.mitchell@theweb.com",
                "phoneNumber": "1151781795",
                "hireDate": "2004-04-05T13:23:54.509Z",
                "jobId": "jobId47",
                "salary": 69475,
                "commissionPercent": 0.5043265991174887,
                "managerId": "managerId",
                "departmentId": "departmentId6",
                "photo": {}
            },
            {
                "id": "employeeId120",
                "firstName": "Isabelle",
                "lastName": "Ramirez",
                "email": "isabelle.ramirez@theweb.com",
                "phoneNumber": "1372371861",
                "hireDate": "1984-02-20T03:59:37.195Z",
                "jobId": "jobId5",
                "salary": 95266,
                "commissionPercent": 0.7011110278774814,
                "managerId": "managerId",
                "departmentId": "departmentId8",
                "photo": {}
            },
            {
                "id": "employeeId121",
                "firstName": "Elizabeth",
                "lastName": "Bryant",
                "email": "elizabeth.bryant@theweb.com",
                "phoneNumber": "1328020105",
                "hireDate": "2012-11-02T06:14:26.507Z",
                "jobId": "jobId27",
                "salary": 65486,
                "commissionPercent": 0.6179084091649499,
                "managerId": "managerId",
                "departmentId": "departmentId0",
                "photo": {}
            },
            {
                "id": "employeeId122",
                "firstName": "Tristan",
                "lastName": "Martinez",
                "email": "tristan.martinez@theweb.com",
                "phoneNumber": "1448132402",
                "hireDate": "2002-05-17T13:15:17.045Z",
                "jobId": "jobId13",
                "salary": 41652,
                "commissionPercent": 1.0086776412781742,
                "managerId": "managerId",
                "departmentId": "departmentId0",
                "photo": {}
            },
            {
                "id": "employeeId123",
                "firstName": "Alyssa",
                "lastName": "Murphy",
                "email": "alyssa.murphy@theweb.com",
                "phoneNumber": "1544826513",
                "hireDate": "1982-08-02T18:45:02.945Z",
                "jobId": "jobId28",
                "salary": 209394,
                "commissionPercent": 1.1016254586492646,
                "managerId": "managerId",
                "departmentId": "departmentId6",
                "photo": {}
            },
            {
                "id": "employeeId124",
                "firstName": "Isabella",
                "lastName": "Robinson",
                "email": "isabella.robinson@theweb.com",
                "phoneNumber": "1122128706",
                "hireDate": "2004-04-26T02:34:27.382Z",
                "jobId": "jobId9",
                "salary": 140414,
                "commissionPercent": 0.36813649991559105,
                "managerId": "managerId",
                "departmentId": "departmentId8",
                "photo": {}
            },
            {
                "id": "employeeId125",
                "firstName": "Charlotte",
                "lastName": "Long",
                "email": "charlotte.long@theweb.com",
                "phoneNumber": "1774924336",
                "hireDate": "1990-01-16T00:51:20.688Z",
                "jobId": "jobId17",
                "salary": 146640,
                "commissionPercent": 0.18317931861146416,
                "managerId": "managerId",
                "departmentId": "departmentId2",
                "photo": {}
            },
            {
                "id": "employeeId126",
                "firstName": "Kylie",
                "lastName": "Wilson",
                "email": "kylie.wilson@theweb.com",
                "phoneNumber": "1973375746",
                "hireDate": "1994-12-08T09:37:11.696Z",
                "jobId": "jobId6",
                "salary": 163876,
                "commissionPercent": 0.19963362320117425,
                "managerId": "managerId",
                "departmentId": "departmentId5",
                "photo": {}
            },
            {
                "id": "employeeId127",
                "firstName": "Asher",
                "lastName": "Ross",
                "email": "asher.ross@theweb.com",
                "phoneNumber": "1203793875",
                "hireDate": "2007-03-17T22:04:15.436Z",
                "jobId": "jobId22",
                "salary": 33944,
                "commissionPercent": 0.31896675189710944,
                "managerId": "managerId",
                "departmentId": "departmentId9",
                "photo": {}
            },
            {
                "id": "employeeId128",
                "firstName": "Alexa",
                "lastName": "Lewis",
                "email": "alexa.lewis@theweb.com",
                "phoneNumber": "1918764902",
                "hireDate": "2001-12-06T10:08:13.903Z",
                "jobId": "jobId7",
                "salary": 66093,
                "commissionPercent": 0.7529852696041478,
                "managerId": "managerId",
                "departmentId": "departmentId4",
                "photo": {}
            },
            {
                "id": "employeeId129",
                "firstName": "Claire",
                "lastName": "Martin",
                "email": "claire.martin@theweb.com",
                "phoneNumber": "1498999920",
                "hireDate": "2001-03-23T17:27:03.849Z",
                "jobId": "jobId8",
                "salary": 157369,
                "commissionPercent": 0.3632968660586756,
                "managerId": "managerId",
                "departmentId": "departmentId9",
                "photo": {}
            },
            {
                "id": "employeeId130",
                "firstName": "Miles",
                "lastName": "Coleman",
                "email": "miles.coleman@theweb.com",
                "phoneNumber": "1576414641",
                "hireDate": "1994-08-07T14:55:24.959Z",
                "jobId": "jobId40",
                "salary": 55204,
                "commissionPercent": 0.5564647937874384,
                "managerId": "managerId",
                "departmentId": "departmentId1",
                "photo": {}
            },
            {
                "id": "employeeId131",
                "firstName": "Makayla",
                "lastName": "Sanchez",
                "email": "makayla.sanchez@theweb.com",
                "phoneNumber": "1803561532",
                "hireDate": "1988-05-09T13:40:28.090Z",
                "jobId": "jobId6",
                "salary": 111078,
                "commissionPercent": 0.5725963852440382,
                "managerId": "managerId",
                "departmentId": "departmentId4",
                "photo": {}
            },
            {
                "id": "employeeId132",
                "firstName": "Jack",
                "lastName": "Thompson",
                "email": "jack.thompson@theweb.com",
                "phoneNumber": "1078886593",
                "hireDate": "1991-06-24T10:05:07.374Z",
                "jobId": "jobId16",
                "salary": 132100,
                "commissionPercent": 0.7327801666290775,
                "managerId": "managerId",
                "departmentId": "departmentId2",
                "photo": {}
            },
            {
                "id": "employeeId133",
                "firstName": "Charlie",
                "lastName": "Baker",
                "email": "charlie.baker@theweb.com",
                "phoneNumber": "1957345814",
                "hireDate": "1987-07-10T06:30:55.838Z",
                "jobId": "jobId23",
                "salary": 168851,
                "commissionPercent": 0.9817896351141943,
                "managerId": "managerId",
                "departmentId": "departmentId4",
                "photo": {}
            },
            {
                "id": "employeeId134",
                "firstName": "Cameron",
                "lastName": "Morgan",
                "email": "cameron.morgan@theweb.com",
                "phoneNumber": "1292887321",
                "hireDate": "1996-01-18T04:07:25.927Z",
                "jobId": "jobId23",
                "salary": 150607,
                "commissionPercent": 0.335519569345892,
                "managerId": "managerId",
                "departmentId": "departmentId5",
                "photo": {}
            },
            {
                "id": "employeeId135",
                "firstName": "Zoe",
                "lastName": "Sanchez",
                "email": "zoe.sanchez@theweb.com",
                "phoneNumber": "1508054698",
                "hireDate": "2009-02-20T13:38:16.887Z",
                "jobId": "jobId36",
                "salary": 117962,
                "commissionPercent": 1.1334774369919873,
                "managerId": "managerId",
                "departmentId": "departmentId6",
                "photo": {}
            },
            {
                "id": "employeeId136",
                "firstName": "Brayden",
                "lastName": "Ross",
                "email": "brayden.ross@theweb.com",
                "phoneNumber": "1186635466",
                "hireDate": "1998-08-11T02:59:54.630Z",
                "jobId": "jobId20",
                "salary": 37968,
                "commissionPercent": 0.918728515958385,
                "managerId": "managerId",
                "departmentId": "departmentId1",
                "photo": {}
            },
            {
                "id": "employeeId137",
                "firstName": "Amelia",
                "lastName": "Gray",
                "email": "amelia.gray@theweb.com",
                "phoneNumber": "1187634399",
                "hireDate": "2003-10-10T00:57:48.793Z",
                "jobId": "jobId0",
                "salary": 114388,
                "commissionPercent": 0.4275362999678446,
                "managerId": "managerId",
                "departmentId": "departmentId1",
                "photo": {}
            },
            {
                "id": "employeeId138",
                "firstName": "Ryan",
                "lastName": "Thompson",
                "email": "ryan.thompson@theweb.com",
                "phoneNumber": "1043476844",
                "hireDate": "1986-07-07T21:48:41.772Z",
                "jobId": "jobId34",
                "salary": 71677,
                "commissionPercent": 0.9673816475576927,
                "managerId": "managerId",
                "departmentId": "departmentId2",
                "photo": {}
            },
            {
                "id": "employeeId139",
                "firstName": "Bailey",
                "lastName": "Brooks",
                "email": "bailey.brooks@theweb.com",
                "phoneNumber": "1696459835",
                "hireDate": "1995-03-23T07:20:02.041Z",
                "jobId": "jobId42",
                "salary": 181608,
                "commissionPercent": 0.7048463039101319,
                "managerId": "managerId",
                "departmentId": "departmentId0",
                "photo": {}
            },
            {
                "id": "employeeId140",
                "firstName": "Ellie",
                "lastName": "Diaz",
                "email": "ellie.diaz@theweb.com",
                "phoneNumber": "1036029864",
                "hireDate": "2013-06-28T23:45:45.784Z",
                "jobId": "jobId44",
                "salary": 143594,
                "commissionPercent": 0.790124149803192,
                "managerId": "managerId",
                "departmentId": "departmentId3",
                "photo": {}
            },
            {
                "id": "employeeId141",
                "firstName": "Andrew",
                "lastName": "Harris",
                "email": "andrew.harris@theweb.com",
                "phoneNumber": "1544728729",
                "hireDate": "1988-09-24T20:37:45.018Z",
                "jobId": "jobId2",
                "salary": 187009,
                "commissionPercent": 0.4188798423909498,
                "managerId": "managerId",
                "departmentId": "departmentId2",
                "photo": {}
            },
            {
                "id": "employeeId142",
                "firstName": "Adam",
                "lastName": "Scott",
                "email": "adam.scott@theweb.com",
                "phoneNumber": "1584914833",
                "hireDate": "1991-12-07T06:56:08.616Z",
                "jobId": "jobId1",
                "salary": 32551,
                "commissionPercent": 0.31734879371268476,
                "managerId": "managerId",
                "departmentId": "departmentId1",
                "photo": {}
            },
            {
                "id": "employeeId143",
                "firstName": "Hailey",
                "lastName": "Murphy",
                "email": "hailey.murphy@theweb.com",
                "phoneNumber": "1273839319",
                "hireDate": "2004-07-08T16:02:52.276Z",
                "jobId": "jobId18",
                "salary": 58182,
                "commissionPercent": 0.9017721798734796,
                "managerId": "managerId",
                "departmentId": "departmentId1",
                "photo": {}
            },
            {
                "id": "employeeId144",
                "firstName": "Jack",
                "lastName": "Hughes",
                "email": "jack.hughes@theweb.com",
                "phoneNumber": "1100032449",
                "hireDate": "2006-06-23T06:42:53.711Z",
                "jobId": "jobId19",
                "salary": 185464,
                "commissionPercent": 0.23877759147042496,
                "managerId": "managerId",
                "departmentId": "departmentId1",
                "photo": {}
            },
            {
                "id": "employeeId145",
                "firstName": "Dominic",
                "lastName": "Perry",
                "email": "dominic.perry@theweb.com",
                "phoneNumber": "1386045997",
                "hireDate": "2005-11-15T18:29:03.577Z",
                "jobId": "jobId29",
                "salary": 19905,
                "commissionPercent": 0.5641897766335954,
                "managerId": "managerId",
                "departmentId": "departmentId5",
                "photo": {}
            },
            {
                "id": "employeeId146",
                "firstName": "Jasmine",
                "lastName": "Rivera",
                "email": "jasmine.rivera@theweb.com",
                "phoneNumber": "1780519959",
                "hireDate": "1997-06-22T10:57:38.273Z",
                "jobId": "jobId25",
                "salary": 60253,
                "commissionPercent": 1.0411679510597194,
                "managerId": "managerId",
                "departmentId": "departmentId4",
                "photo": {}
            },
            {
                "id": "employeeId147",
                "firstName": "Christian",
                "lastName": "Wilson",
                "email": "christian.wilson@theweb.com",
                "phoneNumber": "1642299464",
                "hireDate": "1997-05-04T22:34:39.384Z",
                "jobId": "jobId24",
                "salary": 100439,
                "commissionPercent": 0.36991472467990183,
                "managerId": "managerId",
                "departmentId": "departmentId7",
                "photo": {}
            },
            {
                "id": "employeeId148",
                "firstName": "Lucas",
                "lastName": "Collins",
                "email": "lucas.collins@theweb.com",
                "phoneNumber": "1293131446",
                "hireDate": "2013-11-19T05:04:59.568Z",
                "jobId": "jobId49",
                "salary": 136825,
                "commissionPercent": 0.5582015825736534,
                "managerId": "managerId",
                "departmentId": "departmentId1",
                "photo": {}
            },
            {
                "id": "employeeId149",
                "firstName": "Sebastian",
                "lastName": "Powell",
                "email": "sebastian.powell@theweb.com",
                "phoneNumber": "1197979027",
                "hireDate": "2001-10-17T11:08:07.359Z",
                "jobId": "jobId30",
                "salary": 82415,
                "commissionPercent": 0.9857756483186254,
                "managerId": "managerId",
                "departmentId": "departmentId8",
                "photo": {}
            },
            {
                "id": "employeeId150",
                "firstName": "Elijah",
                "lastName": "Carter",
                "email": "elijah.carter@theweb.com",
                "phoneNumber": "1627310373",
                "hireDate": "2002-01-18T14:53:59.393Z",
                "jobId": "jobId20",
                "salary": 90388,
                "commissionPercent": 0.9421442162448256,
                "managerId": "managerId",
                "departmentId": "departmentId8",
                "photo": {}
            },
            {
                "id": "employeeId151",
                "firstName": "Ellie",
                "lastName": "Barnes",
                "email": "ellie.barnes@theweb.com",
                "phoneNumber": "1886342132",
                "hireDate": "1997-04-21T12:50:13.666Z",
                "jobId": "jobId42",
                "salary": 142266,
                "commissionPercent": 0.273280637992774,
                "managerId": "managerId",
                "departmentId": "departmentId2",
                "photo": {}
            },
            {
                "id": "employeeId152",
                "firstName": "Jason",
                "lastName": "Simmons",
                "email": "jason.simmons@theweb.com",
                "phoneNumber": "1252820024",
                "hireDate": "1983-02-02T05:57:50.265Z",
                "jobId": "jobId47",
                "salary": 105318,
                "commissionPercent": 0.21954664176696234,
                "managerId": "managerId",
                "departmentId": "departmentId4",
                "photo": {}
            },
            {
                "id": "employeeId153",
                "firstName": "Avery",
                "lastName": "Kelly",
                "email": "avery.kelly@theweb.com",
                "phoneNumber": "1421165733",
                "hireDate": "1991-01-14T02:13:15.492Z",
                "jobId": "jobId40",
                "salary": 83649,
                "commissionPercent": 0.778063290000068,
                "managerId": "managerId",
                "departmentId": "departmentId1",
                "photo": {}
            },
            {
                "id": "employeeId154",
                "firstName": "Kaylee",
                "lastName": "Ross",
                "email": "kaylee.ross@theweb.com",
                "phoneNumber": "1370599991",
                "hireDate": "2002-01-13T08:29:54.400Z",
                "jobId": "jobId7",
                "salary": 145019,
                "commissionPercent": 0.5131021704340727,
                "managerId": "managerId",
                "departmentId": "departmentId5",
                "photo": {}
            },
            {
                "id": "employeeId155",
                "firstName": "Adam",
                "lastName": "Scott",
                "email": "adam.scott@theweb.com",
                "phoneNumber": "1342679334",
                "hireDate": "1996-10-07T02:42:41.289Z",
                "jobId": "jobId0",
                "salary": 183124,
                "commissionPercent": 0.40548766233536926,
                "managerId": "managerId",
                "departmentId": "departmentId4",
                "photo": {}
            },
            {
                "id": "employeeId156",
                "firstName": "Miles",
                "lastName": "Sanchez",
                "email": "miles.sanchez@theweb.com",
                "phoneNumber": "1923514112",
                "hireDate": "2005-04-21T14:59:04.781Z",
                "jobId": "jobId1",
                "salary": 111593,
                "commissionPercent": 1.0005883184531101,
                "managerId": "managerId",
                "departmentId": "departmentId2",
                "photo": {}
            },
            {
                "id": "employeeId157",
                "firstName": "Wyatt",
                "lastName": "Howard",
                "email": "wyatt.howard@theweb.com",
                "phoneNumber": "1099302592",
                "hireDate": "1981-11-21T02:05:40.366Z",
                "jobId": "jobId10",
                "salary": 178202,
                "commissionPercent": 0.22754927080050322,
                "managerId": "managerId",
                "departmentId": "departmentId9",
                "photo": {}
            },
            {
                "id": "employeeId158",
                "firstName": "Emily",
                "lastName": "Green",
                "email": "emily.green@theweb.com",
                "phoneNumber": "1993053310",
                "hireDate": "2006-04-29T18:34:29.915Z",
                "jobId": "jobId23",
                "salary": 196954,
                "commissionPercent": 0.17461417449017444,
                "managerId": "managerId",
                "departmentId": "departmentId9",
                "photo": {}
            },
            {
                "id": "employeeId159",
                "firstName": "Kylie",
                "lastName": "Wright",
                "email": "kylie.wright@theweb.com",
                "phoneNumber": "1818394266",
                "hireDate": "1990-02-08T18:13:21.685Z",
                "jobId": "jobId4",
                "salary": 202202,
                "commissionPercent": 0.22076945560619152,
                "managerId": "managerId",
                "departmentId": "departmentId5",
                "photo": {}
            },
            {
                "id": "employeeId160",
                "firstName": "Landon",
                "lastName": "Rodriguez",
                "email": "landon.rodriguez@theweb.com",
                "phoneNumber": "1099356802",
                "hireDate": "2008-06-06T20:35:57.342Z",
                "jobId": "jobId28",
                "salary": 178940,
                "commissionPercent": 0.40908560812118544,
                "managerId": "managerId",
                "departmentId": "departmentId7",
                "photo": {}
            },
            {
                "id": "employeeId161",
                "firstName": "Zachary",
                "lastName": "Walker",
                "email": "zachary.walker@theweb.com",
                "phoneNumber": "1798734644",
                "hireDate": "2004-03-17T08:19:46.458Z",
                "jobId": "jobId17",
                "salary": 59142,
                "commissionPercent": 0.16525761598980346,
                "managerId": "managerId",
                "departmentId": "departmentId7",
                "photo": {}
            },
            {
                "id": "employeeId162",
                "firstName": "Alyssa",
                "lastName": "Roberts",
                "email": "alyssa.roberts@theweb.com",
                "phoneNumber": "1020239791",
                "hireDate": "1980-01-03T09:52:36.317Z",
                "jobId": "jobId22",
                "salary": 51024,
                "commissionPercent": 0.9339884117501936,
                "managerId": "managerId",
                "departmentId": "departmentId5",
                "photo": {}
            },
            {
                "id": "employeeId163",
                "firstName": "Claire",
                "lastName": "Evans",
                "email": "claire.evans@theweb.com",
                "phoneNumber": "1568477979",
                "hireDate": "1981-12-10T04:30:44.483Z",
                "jobId": "jobId25",
                "salary": 26015,
                "commissionPercent": 0.8072504072074081,
                "managerId": "managerId",
                "departmentId": "departmentId4",
                "photo": {}
            },
            {
                "id": "employeeId164",
                "firstName": "Reese",
                "lastName": "Kelly",
                "email": "reese.kelly@theweb.com",
                "phoneNumber": "1201478078",
                "hireDate": "2006-12-22T09:24:39.485Z",
                "jobId": "jobId33",
                "salary": 75310,
                "commissionPercent": 0.2827400676225419,
                "managerId": "managerId",
                "departmentId": "departmentId5",
                "photo": {}
            },
            {
                "id": "employeeId165",
                "firstName": "Lily",
                "lastName": "Lewis",
                "email": "lily.lewis@theweb.com",
                "phoneNumber": "1897433546",
                "hireDate": "1991-06-10T17:48:51.325Z",
                "jobId": "jobId9",
                "salary": 32841,
                "commissionPercent": 0.80908279429686,
                "managerId": "managerId",
                "departmentId": "departmentId8",
                "photo": {}
            },
            {
                "id": "employeeId166",
                "firstName": "Kendall",
                "lastName": "Williams",
                "email": "kendall.williams@theweb.com",
                "phoneNumber": "1896494812",
                "hireDate": "1993-09-02T01:20:38.791Z",
                "jobId": "jobId9",
                "salary": 87402,
                "commissionPercent": 0.3642282876831361,
                "managerId": "managerId",
                "departmentId": "departmentId3",
                "photo": {}
            },
            {
                "id": "employeeId167",
                "firstName": "Jake",
                "lastName": "Cox",
                "email": "jake.cox@theweb.com",
                "phoneNumber": "1837791967",
                "hireDate": "2009-04-24T08:19:07.029Z",
                "jobId": "jobId45",
                "salary": 148803,
                "commissionPercent": 1.0750046059037208,
                "managerId": "managerId",
                "departmentId": "departmentId1",
                "photo": {}
            },
            {
                "id": "employeeId168",
                "firstName": "Maria",
                "lastName": "Rivera",
                "email": "maria.rivera@theweb.com",
                "phoneNumber": "1378107360",
                "hireDate": "1995-10-31T11:36:23.660Z",
                "jobId": "jobId13",
                "salary": 36069,
                "commissionPercent": 0.8959611166853879,
                "managerId": "managerId",
                "departmentId": "departmentId3",
                "photo": {}
            },
            {
                "id": "employeeId169",
                "firstName": "Noah",
                "lastName": "Harris",
                "email": "noah.harris@theweb.com",
                "phoneNumber": "1083211723",
                "hireDate": "2007-03-23T02:12:56.751Z",
                "jobId": "jobId39",
                "salary": 194701,
                "commissionPercent": 1.0527331671001043,
                "managerId": "managerId",
                "departmentId": "departmentId9",
                "photo": {}
            },
            {
                "id": "employeeId170",
                "firstName": "Oliver",
                "lastName": "Ward",
                "email": "oliver.ward@theweb.com",
                "phoneNumber": "1498926918",
                "hireDate": "1993-07-11T04:57:49.446Z",
                "jobId": "jobId4",
                "salary": 107784,
                "commissionPercent": 0.8214446831097425,
                "managerId": "managerId",
                "departmentId": "departmentId6",
                "photo": {}
            },
            {
                "id": "employeeId171",
                "firstName": "Anthony",
                "lastName": "Alexander",
                "email": "anthony.alexander@theweb.com",
                "phoneNumber": "1667647323",
                "hireDate": "1999-08-03T13:52:59.719Z",
                "jobId": "jobId1",
                "salary": 192314,
                "commissionPercent": 0.41753174408502713,
                "managerId": "managerId",
                "departmentId": "departmentId7",
                "photo": {}
            },
            {
                "id": "employeeId172",
                "firstName": "Alice",
                "lastName": "Hughes",
                "email": "alice.hughes@theweb.com",
                "phoneNumber": "1772268263",
                "hireDate": "2009-08-27T17:34:12.627Z",
                "jobId": "jobId44",
                "salary": 32161,
                "commissionPercent": 0.9481646516255134,
                "managerId": "managerId",
                "departmentId": "departmentId2",
                "photo": {}
            },
            {
                "id": "employeeId173",
                "firstName": "Mackenzie",
                "lastName": "Bailey",
                "email": "mackenzie.bailey@theweb.com",
                "phoneNumber": "1984228640",
                "hireDate": "1983-11-11T01:36:01.659Z",
                "jobId": "jobId22",
                "salary": 33242,
                "commissionPercent": 0.5005843468969008,
                "managerId": "managerId",
                "departmentId": "departmentId9",
                "photo": {}
            },
            {
                "id": "employeeId174",
                "firstName": "Ryan",
                "lastName": "Brown,",
                "email": "ryan.brown,@theweb.com",
                "phoneNumber": "1627040194",
                "hireDate": "1985-11-21T11:30:58.252Z",
                "jobId": "jobId5",
                "salary": 29973,
                "commissionPercent": 0.5387393293980375,
                "managerId": "managerId",
                "departmentId": "departmentId0",
                "photo": {}
            },
            {
                "id": "employeeId175",
                "firstName": "Ryder",
                "lastName": "Richardson",
                "email": "ryder.richardson@theweb.com",
                "phoneNumber": "1840313858",
                "hireDate": "1984-04-01T05:39:31.176Z",
                "jobId": "jobId27",
                "salary": 26064,
                "commissionPercent": 0.3471357303026946,
                "managerId": "managerId",
                "departmentId": "departmentId5",
                "photo": {}
            },
            {
                "id": "employeeId176",
                "firstName": "Declan",
                "lastName": "Gray",
                "email": "declan.gray@theweb.com",
                "phoneNumber": "1883850560",
                "hireDate": "1992-09-20T08:52:57.752Z",
                "jobId": "jobId10",
                "salary": 97534,
                "commissionPercent": 0.4611634105896626,
                "managerId": "managerId",
                "departmentId": "departmentId4",
                "photo": {}
            },
            {
                "id": "employeeId177",
                "firstName": "Riley",
                "lastName": "Coleman",
                "email": "riley.coleman@theweb.com",
                "phoneNumber": "1272822463",
                "hireDate": "1993-07-13T20:41:18.743Z",
                "jobId": "jobId36",
                "salary": 77263,
                "commissionPercent": 0.5492577835979001,
                "managerId": "managerId",
                "departmentId": "departmentId9",
                "photo": {}
            },
            {
                "id": "employeeId178",
                "firstName": "Lyla",
                "lastName": "Hayes",
                "email": "lyla.hayes@theweb.com",
                "phoneNumber": "1532550512",
                "hireDate": "2004-02-05T13:45:01.092Z",
                "jobId": "jobId21",
                "salary": 209393,
                "commissionPercent": 0.15621268995313584,
                "managerId": "managerId",
                "departmentId": "departmentId7",
                "photo": {}
            },
            {
                "id": "employeeId179",
                "firstName": "Landon",
                "lastName": "James",
                "email": "landon.james@theweb.com",
                "phoneNumber": "1162028055",
                "hireDate": "1992-04-06T18:12:36.259Z",
                "jobId": "jobId19",
                "salary": 203865,
                "commissionPercent": 0.30347998022649014,
                "managerId": "managerId",
                "departmentId": "departmentId8",
                "photo": {}
            },
            {
                "id": "employeeId180",
                "firstName": "Hayden",
                "lastName": "Lewis",
                "email": "hayden.lewis@theweb.com",
                "phoneNumber": "1146362562",
                "hireDate": "1992-10-29T10:21:43.893Z",
                "jobId": "jobId41",
                "salary": 65103,
                "commissionPercent": 0.9924466323877524,
                "managerId": "managerId",
                "departmentId": "departmentId0",
                "photo": {}
            },
            {
                "id": "employeeId181",
                "firstName": "Samantha",
                "lastName": "Morris",
                "email": "samantha.morris@theweb.com",
                "phoneNumber": "1303362396",
                "hireDate": "1992-10-12T00:45:35.179Z",
                "jobId": "jobId15",
                "salary": 66685,
                "commissionPercent": 0.39597297933136566,
                "managerId": "managerId",
                "departmentId": "departmentId9",
                "photo": {}
            },
            {
                "id": "employeeId182",
                "firstName": "Reese",
                "lastName": "Allen",
                "email": "reese.allen@theweb.com",
                "phoneNumber": "1372335137",
                "hireDate": "2012-08-19T03:41:24.824Z",
                "jobId": "jobId4",
                "salary": 128505,
                "commissionPercent": 0.9404600594096572,
                "managerId": "managerId",
                "departmentId": "departmentId5",
                "photo": {}
            },
            {
                "id": "employeeId183",
                "firstName": "James",
                "lastName": "Evans",
                "email": "james.evans@theweb.com",
                "phoneNumber": "1806209737",
                "hireDate": "2010-12-12T15:45:11.271Z",
                "jobId": "jobId36",
                "salary": 199377,
                "commissionPercent": 0.7395777230587145,
                "managerId": "managerId",
                "departmentId": "departmentId9",
                "photo": {}
            },
            {
                "id": "employeeId184",
                "firstName": "Leah",
                "lastName": "Campbell",
                "email": "leah.campbell@theweb.com",
                "phoneNumber": "1643899934",
                "hireDate": "2010-08-11T19:41:50.233Z",
                "jobId": "jobId18",
                "salary": 204850,
                "commissionPercent": 0.4153295727181555,
                "managerId": "managerId",
                "departmentId": "departmentId2",
                "photo": {}
            },
            {
                "id": "employeeId185",
                "firstName": "Emily",
                "lastName": "King",
                "email": "emily.king@theweb.com",
                "phoneNumber": "1379921825",
                "hireDate": "2012-05-05T18:29:54.100Z",
                "jobId": "jobId18",
                "salary": 73834,
                "commissionPercent": 0.8143057705994826,
                "managerId": "managerId",
                "departmentId": "departmentId1",
                "photo": {}
            },
            {
                "id": "employeeId186",
                "firstName": "Ruby",
                "lastName": "Roberts",
                "email": "ruby.roberts@theweb.com",
                "phoneNumber": "1989138318",
                "hireDate": "2007-03-13T15:09:03.312Z",
                "jobId": "jobId39",
                "salary": 10956,
                "commissionPercent": 1.0916559565746813,
                "managerId": "managerId",
                "departmentId": "departmentId6",
                "photo": {}
            },
            {
                "id": "employeeId187",
                "firstName": "Riley",
                "lastName": "Coleman",
                "email": "riley.coleman@theweb.com",
                "phoneNumber": "1108157745",
                "hireDate": "1993-05-02T18:57:40.072Z",
                "jobId": "jobId43",
                "salary": 157007,
                "commissionPercent": 0.3980669088391776,
                "managerId": "managerId",
                "departmentId": "departmentId2",
                "photo": {}
            },
            {
                "id": "employeeId188",
                "firstName": "Hudson",
                "lastName": "Hill",
                "email": "hudson.hill@theweb.com",
                "phoneNumber": "1544731211",
                "hireDate": "1993-05-05T16:55:09.801Z",
                "jobId": "jobId10",
                "salary": 69926,
                "commissionPercent": 0.47495793375946216,
                "managerId": "managerId",
                "departmentId": "departmentId3",
                "photo": {}
            },
            {
                "id": "employeeId189",
                "firstName": "Samuel",
                "lastName": "Powell",
                "email": "samuel.powell@theweb.com",
                "phoneNumber": "1391128680",
                "hireDate": "1984-06-09T14:45:58.295Z",
                "jobId": "jobId8",
                "salary": 156870,
                "commissionPercent": 0.16846513831302565,
                "managerId": "managerId",
                "departmentId": "departmentId3",
                "photo": {}
            },
            {
                "id": "employeeId190",
                "firstName": "Micah",
                "lastName": "Foster",
                "email": "micah.foster@theweb.com",
                "phoneNumber": "1379334880",
                "hireDate": "1994-07-02T06:52:24.597Z",
                "jobId": "jobId46",
                "salary": 92857,
                "commissionPercent": 0.4786940409785586,
                "managerId": "managerId",
                "departmentId": "departmentId6",
                "photo": {}
            },
            {
                "id": "employeeId191",
                "firstName": "Brandon",
                "lastName": "Hayes",
                "email": "brandon.hayes@theweb.com",
                "phoneNumber": "1623702516",
                "hireDate": "2002-06-26T11:50:49.227Z",
                "jobId": "jobId44",
                "salary": 63121,
                "commissionPercent": 1.1441797521163308,
                "managerId": "managerId",
                "departmentId": "departmentId7",
                "photo": {}
            },
            {
                "id": "employeeId192",
                "firstName": "Hayden",
                "lastName": "Jackson",
                "email": "hayden.jackson@theweb.com",
                "phoneNumber": "1231653586",
                "hireDate": "1999-09-05T01:17:37.381Z",
                "jobId": "jobId19",
                "salary": 136707,
                "commissionPercent": 0.1755614927703489,
                "managerId": "managerId",
                "departmentId": "departmentId4",
                "photo": {}
            },
            {
                "id": "employeeId193",
                "firstName": "Bailey",
                "lastName": "Scott",
                "email": "bailey.scott@theweb.com",
                "phoneNumber": "1655683075",
                "hireDate": "1987-06-25T12:37:58.615Z",
                "jobId": "jobId36",
                "salary": 96353,
                "commissionPercent": 0.5722842474476891,
                "managerId": "managerId",
                "departmentId": "departmentId0",
                "photo": {}
            },
            {
                "id": "employeeId194",
                "firstName": "Evelyn",
                "lastName": "Jenkins",
                "email": "evelyn.jenkins@theweb.com",
                "phoneNumber": "1007545000",
                "hireDate": "1989-08-23T10:55:44.582Z",
                "jobId": "jobId36",
                "salary": 42942,
                "commissionPercent": 0.7322567915096926,
                "managerId": "managerId",
                "departmentId": "departmentId5",
                "photo": {}
            },
            {
                "id": "employeeId195",
                "firstName": "Joshua",
                "lastName": "Davis,",
                "email": "joshua.davis,@theweb.com",
                "phoneNumber": "1053505623",
                "hireDate": "1992-06-13T07:13:49.672Z",
                "jobId": "jobId29",
                "salary": 187750,
                "commissionPercent": 0.6443985070472965,
                "managerId": "managerId",
                "departmentId": "departmentId7",
                "photo": {}
            },
            {
                "id": "employeeId196",
                "firstName": "Alice",
                "lastName": "Hall",
                "email": "alice.hall@theweb.com",
                "phoneNumber": "1488255526",
                "hireDate": "1995-03-19T12:08:59.032Z",
                "jobId": "jobId26",
                "salary": 166442,
                "commissionPercent": 0.5328542578475629,
                "managerId": "managerId",
                "departmentId": "departmentId0",
                "photo": {}
            },
            {
                "id": "employeeId197",
                "firstName": "Luke",
                "lastName": "Hall",
                "email": "luke.hall@theweb.com",
                "phoneNumber": "1792411826",
                "hireDate": "1990-12-01T07:30:16.436Z",
                "jobId": "jobId41",
                "salary": 129964,
                "commissionPercent": 0.4780825373640524,
                "managerId": "managerId",
                "departmentId": "departmentId3",
                "photo": {}
            },
            {
                "id": "employeeId198",
                "firstName": "Victoria",
                "lastName": "Brown,",
                "email": "victoria.brown,@theweb.com",
                "phoneNumber": "1704508107",
                "hireDate": "1999-10-14T19:45:46.186Z",
                "jobId": "jobId40",
                "salary": 102213,
                "commissionPercent": 1.001531202000046,
                "managerId": "managerId",
                "departmentId": "departmentId3",
                "photo": {}
            },
            {
                "id": "employeeId199",
                "firstName": "Mackenzie",
                "lastName": "Hall",
                "email": "mackenzie.hall@theweb.com",
                "phoneNumber": "1756803172",
                "hireDate": "2006-03-03T01:08:13.677Z",
                "jobId": "jobId10",
                "salary": 189922,
                "commissionPercent": 0.8558576509553127,
                "managerId": "managerId",
                "departmentId": "departmentId5",
                "photo": {}
            },
            {
                "id": "employeeId200",
                "firstName": "Hailey",
                "lastName": "Sanders",
                "email": "hailey.sanders@theweb.com",
                "phoneNumber": "1296142568",
                "hireDate": "1984-08-24T13:33:47.417Z",
                "jobId": "jobId19",
                "salary": 200079,
                "commissionPercent": 0.6447001903920081,
                "managerId": "managerId",
                "departmentId": "departmentId3",
                "photo": {}
            },
            {
                "id": "employeeId201",
                "firstName": "Bentley",
                "lastName": "Russell",
                "email": "bentley.russell@theweb.com",
                "phoneNumber": "1004770026",
                "hireDate": "1986-03-22T08:39:32.304Z",
                "jobId": "jobId10",
                "salary": 68036,
                "commissionPercent": 0.8739617631120219,
                "managerId": "managerId",
                "departmentId": "departmentId0",
                "photo": {}
            },
            {
                "id": "employeeId202",
                "firstName": "Michael",
                "lastName": "Roberts",
                "email": "michael.roberts@theweb.com",
                "phoneNumber": "1121706855",
                "hireDate": "1984-05-27T08:25:53.936Z",
                "jobId": "jobId17",
                "salary": 141480,
                "commissionPercent": 0.8310139467422567,
                "managerId": "managerId",
                "departmentId": "departmentId3",
                "photo": {}
            },
            {
                "id": "employeeId203",
                "firstName": "Aiden",
                "lastName": "Lee",
                "email": "aiden.lee@theweb.com",
                "phoneNumber": "1267876647",
                "hireDate": "1981-04-12T22:11:03.411Z",
                "jobId": "jobId45",
                "salary": 169622,
                "commissionPercent": 1.0670659571898864,
                "managerId": "managerId",
                "departmentId": "departmentId2",
                "photo": {}
            },
            {
                "id": "employeeId204",
                "firstName": "Kayla",
                "lastName": "Roberts",
                "email": "kayla.roberts@theweb.com",
                "phoneNumber": "1798749315",
                "hireDate": "1980-04-15T05:59:52.523Z",
                "jobId": "jobId47",
                "salary": 46130,
                "commissionPercent": 0.6119237218615187,
                "managerId": "managerId",
                "departmentId": "departmentId1",
                "photo": {}
            },
            {
                "id": "employeeId205",
                "firstName": "Harper",
                "lastName": "Griffin",
                "email": "harper.griffin@theweb.com",
                "phoneNumber": "1324294737",
                "hireDate": "1981-12-31T11:22:14.632Z",
                "jobId": "jobId36",
                "salary": 150838,
                "commissionPercent": 1.0651457450458024,
                "managerId": "managerId",
                "departmentId": "departmentId5",
                "photo": {}
            },
            {
                "id": "employeeId206",
                "firstName": "Isaiah",
                "lastName": "Rivera",
                "email": "isaiah.rivera@theweb.com",
                "phoneNumber": "1931819936",
                "hireDate": "2006-04-01T06:19:28.444Z",
                "jobId": "jobId8",
                "salary": 56195,
                "commissionPercent": 0.8971185827562814,
                "managerId": "managerId",
                "departmentId": "departmentId0",
                "photo": {}
            },
            {
                "id": "employeeId207",
                "firstName": "Mason",
                "lastName": "Lee",
                "email": "mason.lee@theweb.com",
                "phoneNumber": "1592243833",
                "hireDate": "2014-02-28T13:17:15.827Z",
                "jobId": "jobId32",
                "salary": 18189,
                "commissionPercent": 0.27922034145660934,
                "managerId": "managerId",
                "departmentId": "departmentId3",
                "photo": {}
            },
            {
                "id": "employeeId208",
                "firstName": "Ella",
                "lastName": "Richardson",
                "email": "ella.richardson@theweb.com",
                "phoneNumber": "1617927848",
                "hireDate": "1992-11-02T06:01:44.803Z",
                "jobId": "jobId29",
                "salary": 179156,
                "commissionPercent": 0.2541820332603645,
                "managerId": "managerId",
                "departmentId": "departmentId1",
                "photo": {}
            },
            {
                "id": "employeeId209",
                "firstName": "Ian",
                "lastName": "Evans",
                "email": "ian.evans@theweb.com",
                "phoneNumber": "1613637665",
                "hireDate": "1995-12-21T01:43:47.211Z",
                "jobId": "jobId24",
                "salary": 117427,
                "commissionPercent": 0.807269482978726,
                "managerId": "managerId",
                "departmentId": "departmentId1",
                "photo": {}
            },
            {
                "id": "employeeId210",
                "firstName": "Jake",
                "lastName": "Gray",
                "email": "jake.gray@theweb.com",
                "phoneNumber": "1745957665",
                "hireDate": "1999-12-09T18:58:35.123Z",
                "jobId": "jobId17",
                "salary": 172767,
                "commissionPercent": 0.9554144680000344,
                "managerId": "managerId",
                "departmentId": "departmentId7",
                "photo": {}
            },
            {
                "id": "employeeId211",
                "firstName": "Amelia",
                "lastName": "Cox",
                "email": "amelia.cox@theweb.com",
                "phoneNumber": "1407351768",
                "hireDate": "2005-09-14T00:11:58.813Z",
                "jobId": "jobId30",
                "salary": 138193,
                "commissionPercent": 0.7490482291047863,
                "managerId": "managerId",
                "departmentId": "departmentId1",
                "photo": {}
            },
            {
                "id": "employeeId212",
                "firstName": "Austin",
                "lastName": "Clark",
                "email": "austin.clark@theweb.com",
                "phoneNumber": "1311047945",
                "hireDate": "1986-09-20T17:19:11.330Z",
                "jobId": "jobId13",
                "salary": 25643,
                "commissionPercent": 0.5205088160506458,
                "managerId": "managerId",
                "departmentId": "departmentId0",
                "photo": {}
            },
            {
                "id": "employeeId213",
                "firstName": "Jacob",
                "lastName": "Carter",
                "email": "jacob.carter@theweb.com",
                "phoneNumber": "1399241419",
                "hireDate": "1990-03-05T13:24:27.488Z",
                "jobId": "jobId25",
                "salary": 114006,
                "commissionPercent": 0.925897803096377,
                "managerId": "managerId",
                "departmentId": "departmentId5",
                "photo": {}
            },
            {
                "id": "employeeId214",
                "firstName": "Olivia",
                "lastName": "Sanchez",
                "email": "olivia.sanchez@theweb.com",
                "phoneNumber": "1182131429",
                "hireDate": "2002-10-21T04:18:14.111Z",
                "jobId": "jobId33",
                "salary": 178951,
                "commissionPercent": 0.473843802647845,
                "managerId": "managerId",
                "departmentId": "departmentId1",
                "photo": {}
            },
            {
                "id": "employeeId215",
                "firstName": "Brianna",
                "lastName": "Edwards",
                "email": "brianna.edwards@theweb.com",
                "phoneNumber": "1678886382",
                "hireDate": "2009-09-26T05:51:26.552Z",
                "jobId": "jobId14",
                "salary": 166431,
                "commissionPercent": 0.8142777001313305,
                "managerId": "managerId",
                "departmentId": "departmentId3",
                "photo": {}
            },
            {
                "id": "employeeId216",
                "firstName": "Lillian",
                "lastName": "Walker",
                "email": "lillian.walker@theweb.com",
                "phoneNumber": "1950625620",
                "hireDate": "1987-05-13T07:06:00.414Z",
                "jobId": "jobId31",
                "salary": 24729,
                "commissionPercent": 0.1645243515453839,
                "managerId": "managerId",
                "departmentId": "departmentId9",
                "photo": {}
            },
            {
                "id": "employeeId217",
                "firstName": "Claire",
                "lastName": "Jones,",
                "email": "claire.jones,@theweb.com",
                "phoneNumber": "1146716602",
                "hireDate": "2005-12-26T14:58:06.725Z",
                "jobId": "jobId34",
                "salary": 151828,
                "commissionPercent": 0.2719437493452733,
                "managerId": "managerId",
                "departmentId": "departmentId8",
                "photo": {}
            },
            {
                "id": "employeeId218",
                "firstName": "Bella",
                "lastName": "Carter",
                "email": "bella.carter@theweb.com",
                "phoneNumber": "1704344952",
                "hireDate": "1995-12-28T19:35:03.261Z",
                "jobId": "jobId35",
                "salary": 10824,
                "commissionPercent": 1.0307712129590327,
                "managerId": "managerId",
                "departmentId": "departmentId9",
                "photo": {}
            },
            {
                "id": "employeeId219",
                "firstName": "Olivia",
                "lastName": "Anderson",
                "email": "olivia.anderson@theweb.com",
                "phoneNumber": "1827455890",
                "hireDate": "1998-03-03T09:43:04.173Z",
                "jobId": "jobId43",
                "salary": 64848,
                "commissionPercent": 0.1910246694032268,
                "managerId": "managerId",
                "departmentId": "departmentId9",
                "photo": {}
            },
            {
                "id": "employeeId220",
                "firstName": "Julian",
                "lastName": "Phillips",
                "email": "julian.phillips@theweb.com",
                "phoneNumber": "1625311804",
                "hireDate": "2009-12-22T22:26:02.026Z",
                "jobId": "jobId20",
                "salary": 138507,
                "commissionPercent": 0.8971844807590835,
                "managerId": "managerId",
                "departmentId": "departmentId3",
                "photo": {}
            },
            {
                "id": "employeeId221",
                "firstName": "Adam",
                "lastName": "Phillips",
                "email": "adam.phillips@theweb.com",
                "phoneNumber": "1116148196",
                "hireDate": "2002-08-13T05:29:38.777Z",
                "jobId": "jobId11",
                "salary": 188275,
                "commissionPercent": 0.8321390513430761,
                "managerId": "managerId",
                "departmentId": "departmentId8",
                "photo": {}
            },
            {
                "id": "employeeId222",
                "firstName": "Harrison",
                "lastName": "Taylor",
                "email": "harrison.taylor@theweb.com",
                "phoneNumber": "1443399282",
                "hireDate": "1997-12-08T03:03:07.343Z",
                "jobId": "jobId26",
                "salary": 61973,
                "commissionPercent": 0.9084296952935617,
                "managerId": "managerId",
                "departmentId": "departmentId1",
                "photo": {}
            },
            {
                "id": "employeeId223",
                "firstName": "Charlotte",
                "lastName": "Carter",
                "email": "charlotte.carter@theweb.com",
                "phoneNumber": "1500057174",
                "hireDate": "1983-04-30T17:49:07.286Z",
                "jobId": "jobId13",
                "salary": 129163,
                "commissionPercent": 0.47726406604973926,
                "managerId": "managerId",
                "departmentId": "departmentId8",
                "photo": {}
            },
            {
                "id": "employeeId224",
                "firstName": "Evelyn",
                "lastName": "Henderson",
                "email": "evelyn.henderson@theweb.com",
                "phoneNumber": "1181989917",
                "hireDate": "1991-12-23T06:28:13.108Z",
                "jobId": "jobId30",
                "salary": 104780,
                "commissionPercent": 0.8757528053217633,
                "managerId": "managerId",
                "departmentId": "departmentId2",
                "photo": {}
            },
            {
                "id": "employeeId225",
                "firstName": "Luke",
                "lastName": "Peterson",
                "email": "luke.peterson@theweb.com",
                "phoneNumber": "1047805671",
                "hireDate": "1983-02-26T16:51:11.221Z",
                "jobId": "jobId11",
                "salary": 171592,
                "commissionPercent": 0.8238224067254513,
                "managerId": "managerId",
                "departmentId": "departmentId3",
                "photo": {}
            },
            {
                "id": "employeeId226",
                "firstName": "Liam",
                "lastName": "Morgan",
                "email": "liam.morgan@theweb.com",
                "phoneNumber": "1304738101",
                "hireDate": "2003-04-26T15:24:18.208Z",
                "jobId": "jobId7",
                "salary": 52299,
                "commissionPercent": 0.8173118432385796,
                "managerId": "managerId",
                "departmentId": "departmentId3",
                "photo": {}
            },
            {
                "id": "employeeId227",
                "firstName": "Benjamin",
                "lastName": "Martin",
                "email": "benjamin.martin@theweb.com",
                "phoneNumber": "1022884326",
                "hireDate": "1998-02-15T11:19:14.985Z",
                "jobId": "jobId33",
                "salary": 133407,
                "commissionPercent": 0.4930634539575277,
                "managerId": "managerId",
                "departmentId": "departmentId0",
                "photo": {}
            },
            {
                "id": "employeeId228",
                "firstName": "Grace",
                "lastName": "Edwards",
                "email": "grace.edwards@theweb.com",
                "phoneNumber": "1897149047",
                "hireDate": "1997-08-01T05:37:44.953Z",
                "jobId": "jobId40",
                "salary": 111854,
                "commissionPercent": 0.23765719046430486,
                "managerId": "managerId",
                "departmentId": "departmentId4",
                "photo": {}
            },
            {
                "id": "employeeId229",
                "firstName": "Jackson",
                "lastName": "Perry",
                "email": "jackson.perry@theweb.com",
                "phoneNumber": "1140183690",
                "hireDate": "1985-01-03T17:33:18.927Z",
                "jobId": "jobId15",
                "salary": 169476,
                "commissionPercent": 0.9353081595063363,
                "managerId": "managerId",
                "departmentId": "departmentId6",
                "photo": {}
            },
            {
                "id": "employeeId230",
                "firstName": "Carter",
                "lastName": "Powell",
                "email": "carter.powell@theweb.com",
                "phoneNumber": "1373414130",
                "hireDate": "1985-04-26T23:45:27.890Z",
                "jobId": "jobId24",
                "salary": 114920,
                "commissionPercent": 0.6615278295048629,
                "managerId": "managerId",
                "departmentId": "departmentId3",
                "photo": {}
            },
            {
                "id": "employeeId231",
                "firstName": "Ella",
                "lastName": "Sanders",
                "email": "ella.sanders@theweb.com",
                "phoneNumber": "1767409241",
                "hireDate": "1980-03-11T07:54:24.353Z",
                "jobId": "jobId37",
                "salary": 143388,
                "commissionPercent": 0.6020834056429848,
                "managerId": "managerId",
                "departmentId": "departmentId7",
                "photo": {}
            },
            {
                "id": "employeeId232",
                "firstName": "Isabelle",
                "lastName": "Washington",
                "email": "isabelle.washington@theweb.com",
                "phoneNumber": "1932480513",
                "hireDate": "2005-11-06T09:04:15.006Z",
                "jobId": "jobId2",
                "salary": 177648,
                "commissionPercent": 0.7579408670360203,
                "managerId": "managerId",
                "departmentId": "departmentId9",
                "photo": {}
            },
            {
                "id": "employeeId233",
                "firstName": "Eva",
                "lastName": "Diaz",
                "email": "eva.diaz@theweb.com",
                "phoneNumber": "1176294500",
                "hireDate": "1992-11-26T01:40:59.866Z",
                "jobId": "jobId20",
                "salary": 200255,
                "commissionPercent": 0.5602308136933442,
                "managerId": "managerId",
                "departmentId": "departmentId4",
                "photo": {}
            },
            {
                "id": "employeeId234",
                "firstName": "Brody",
                "lastName": "Adams",
                "email": "brody.adams@theweb.com",
                "phoneNumber": "1856617564",
                "hireDate": "2011-04-14T21:06:16.830Z",
                "jobId": "jobId37",
                "salary": 140309,
                "commissionPercent": 0.4060456519629779,
                "managerId": "managerId",
                "departmentId": "departmentId1",
                "photo": {}
            },
            {
                "id": "employeeId235",
                "firstName": "Adam",
                "lastName": "Patterson",
                "email": "adam.patterson@theweb.com",
                "phoneNumber": "1831951073",
                "hireDate": "1994-10-15T15:33:57.521Z",
                "jobId": "jobId19",
                "salary": 137468,
                "commissionPercent": 0.5262604094744233,
                "managerId": "managerId",
                "departmentId": "departmentId1",
                "photo": {}
            },
            {
                "id": "employeeId236",
                "firstName": "Micah",
                "lastName": "Brooks",
                "email": "micah.brooks@theweb.com",
                "phoneNumber": "1389185283",
                "hireDate": "1989-04-21T15:54:53.000Z",
                "jobId": "jobId3",
                "salary": 107932,
                "commissionPercent": 0.33781390990599813,
                "managerId": "managerId",
                "departmentId": "departmentId7",
                "photo": {}
            },
            {
                "id": "employeeId237",
                "firstName": "Annabelle",
                "lastName": "Henderson",
                "email": "annabelle.henderson@theweb.com",
                "phoneNumber": "1366574298",
                "hireDate": "2004-06-24T04:52:46.441Z",
                "jobId": "jobId16",
                "salary": 92103,
                "commissionPercent": 0.5354089243990957,
                "managerId": "managerId",
                "departmentId": "departmentId2",
                "photo": {}
            },
            {
                "id": "employeeId238",
                "firstName": "Carson",
                "lastName": "Rogers",
                "email": "carson.rogers@theweb.com",
                "phoneNumber": "1649064579",
                "hireDate": "1985-02-21T23:13:37.173Z",
                "jobId": "jobId40",
                "salary": 142762,
                "commissionPercent": 1.040142145973616,
                "managerId": "managerId",
                "departmentId": "departmentId3",
                "photo": {}
            },
            {
                "id": "employeeId239",
                "firstName": "Nathan",
                "lastName": "Wright",
                "email": "nathan.wright@theweb.com",
                "phoneNumber": "1365551517",
                "hireDate": "1999-12-23T06:40:03.148Z",
                "jobId": "jobId20",
                "salary": 56685,
                "commissionPercent": 0.2997288348292898,
                "managerId": "managerId",
                "departmentId": "departmentId3",
                "photo": {}
            },
            {
                "id": "employeeId240",
                "firstName": "Morgan",
                "lastName": "Bailey",
                "email": "morgan.bailey@theweb.com",
                "phoneNumber": "1465262978",
                "hireDate": "1992-11-15T22:22:05.488Z",
                "jobId": "jobId32",
                "salary": 110849,
                "commissionPercent": 0.5236260097594098,
                "managerId": "managerId",
                "departmentId": "departmentId7",
                "photo": {}
            },
            {
                "id": "employeeId241",
                "firstName": "Nora",
                "lastName": "Anderson",
                "email": "nora.anderson@theweb.com",
                "phoneNumber": "1068029502",
                "hireDate": "1989-08-05T06:43:40.469Z",
                "jobId": "jobId42",
                "salary": 111170,
                "commissionPercent": 0.3670928939724857,
                "managerId": "managerId",
                "departmentId": "departmentId1",
                "photo": {}
            },
            {
                "id": "employeeId242",
                "firstName": "Ryder",
                "lastName": "Parker",
                "email": "ryder.parker@theweb.com",
                "phoneNumber": "1759571878",
                "hireDate": "1992-10-17T12:33:09.782Z",
                "jobId": "jobId26",
                "salary": 118116,
                "commissionPercent": 0.7299275387345331,
                "managerId": "managerId",
                "departmentId": "departmentId3",
                "photo": {}
            },
            {
                "id": "employeeId243",
                "firstName": "Peyton",
                "lastName": "Edwards",
                "email": "peyton.edwards@theweb.com",
                "phoneNumber": "1322276321",
                "hireDate": "2012-01-16T13:10:19.141Z",
                "jobId": "jobId46",
                "salary": 185854,
                "commissionPercent": 0.5012021531040588,
                "managerId": "managerId",
                "departmentId": "departmentId1",
                "photo": {}
            },
            {
                "id": "employeeId244",
                "firstName": "Noah",
                "lastName": "Russell",
                "email": "noah.russell@theweb.com",
                "phoneNumber": "1624644471",
                "hireDate": "1980-04-09T16:04:51.909Z",
                "jobId": "jobId14",
                "salary": 77640,
                "commissionPercent": 0.9906787523482622,
                "managerId": "managerId",
                "departmentId": "departmentId1",
                "photo": {}
            },
            {
                "id": "employeeId245",
                "firstName": "Julian",
                "lastName": "Turner",
                "email": "julian.turner@theweb.com",
                "phoneNumber": "1935103129",
                "hireDate": "1981-05-30T02:08:51.137Z",
                "jobId": "jobId34",
                "salary": 166198,
                "commissionPercent": 0.8060518358069463,
                "managerId": "managerId",
                "departmentId": "departmentId8",
                "photo": {}
            },
            {
                "id": "employeeId246",
                "firstName": "Jackson",
                "lastName": "Lopez",
                "email": "jackson.lopez@theweb.com",
                "phoneNumber": "1521242558",
                "hireDate": "1993-08-12T23:12:29.216Z",
                "jobId": "jobId14",
                "salary": 109743,
                "commissionPercent": 0.6511784442297189,
                "managerId": "managerId",
                "departmentId": "departmentId0",
                "photo": {}
            },
            {
                "id": "employeeId247",
                "firstName": "Eva",
                "lastName": "Taylor",
                "email": "eva.taylor@theweb.com",
                "phoneNumber": "1837378433",
                "hireDate": "2009-06-10T00:48:53.651Z",
                "jobId": "jobId41",
                "salary": 55230,
                "commissionPercent": 0.9376032321400701,
                "managerId": "managerId",
                "departmentId": "departmentId7",
                "photo": {}
            },
            {
                "id": "employeeId248",
                "firstName": "Eli",
                "lastName": "Kelly",
                "email": "eli.kelly@theweb.com",
                "phoneNumber": "1240025650",
                "hireDate": "2001-11-23T10:02:42.789Z",
                "jobId": "jobId37",
                "salary": 183386,
                "commissionPercent": 0.9697258236767704,
                "managerId": "managerId",
                "departmentId": "departmentId8",
                "photo": {}
            },
            {
                "id": "employeeId249",
                "firstName": "David",
                "lastName": "Scott",
                "email": "david.scott@theweb.com",
                "phoneNumber": "1636888410",
                "hireDate": "1983-12-25T04:58:26.213Z",
                "jobId": "jobId16",
                "salary": 205542,
                "commissionPercent": 1.0719159623813523,
                "managerId": "managerId",
                "departmentId": "departmentId4",
                "photo": {}
            },
            {
                "id": "employeeId250",
                "firstName": "Andrew",
                "lastName": "Peterson",
                "email": "andrew.peterson@theweb.com",
                "phoneNumber": "1728646639",
                "hireDate": "1981-02-20T20:14:40.771Z",
                "jobId": "jobId35",
                "salary": 121930,
                "commissionPercent": 0.74811789041223,
                "managerId": "managerId",
                "departmentId": "departmentId4",
                "photo": {}
            },
            {
                "id": "employeeId251",
                "firstName": "Nevaeh",
                "lastName": "Ward",
                "email": "nevaeh.ward@theweb.com",
                "phoneNumber": "1651822628",
                "hireDate": "1993-04-07T05:35:29.527Z",
                "jobId": "jobId47",
                "salary": 69515,
                "commissionPercent": 0.41956057966824656,
                "managerId": "managerId",
                "departmentId": "departmentId7",
                "photo": {}
            },
            {
                "id": "employeeId252",
                "firstName": "Reagan",
                "lastName": "Edwards",
                "email": "reagan.edwards@theweb.com",
                "phoneNumber": "1773739473",
                "hireDate": "1986-12-30T11:38:42.078Z",
                "jobId": "jobId3",
                "salary": 130446,
                "commissionPercent": 0.5208362148207676,
                "managerId": "managerId",
                "departmentId": "departmentId7",
                "photo": {}
            },
            {
                "id": "employeeId253",
                "firstName": "Charlotte",
                "lastName": "Flores",
                "email": "charlotte.flores@theweb.com",
                "phoneNumber": "1158333339",
                "hireDate": "1989-07-03T10:59:01.008Z",
                "jobId": "jobId21",
                "salary": 194852,
                "commissionPercent": 0.3647424660210591,
                "managerId": "managerId",
                "departmentId": "departmentId4",
                "photo": {}
            },
            {
                "id": "employeeId254",
                "firstName": "Savannah",
                "lastName": "Wright",
                "email": "savannah.wright@theweb.com",
                "phoneNumber": "1194403430",
                "hireDate": "1999-01-06T10:19:01.304Z",
                "jobId": "jobId38",
                "salary": 130284,
                "commissionPercent": 0.3089138375376591,
                "managerId": "managerId",
                "departmentId": "departmentId7",
                "photo": {}
            },
            {
                "id": "employeeId255",
                "firstName": "Lily",
                "lastName": "Campbell",
                "email": "lily.campbell@theweb.com",
                "phoneNumber": "1256691548",
                "hireDate": "1994-09-26T01:02:32.328Z",
                "jobId": "jobId4",
                "salary": 136688,
                "commissionPercent": 0.759771249996675,
                "managerId": "managerId",
                "departmentId": "departmentId0",
                "photo": {}
            },
            {
                "id": "employeeId256",
                "firstName": "Peyton",
                "lastName": "Washington",
                "email": "peyton.washington@theweb.com",
                "phoneNumber": "1750119923",
                "hireDate": "2005-01-11T18:46:53.358Z",
                "jobId": "jobId27",
                "salary": 137437,
                "commissionPercent": 0.5159850909681004,
                "managerId": "managerId",
                "departmentId": "departmentId3",
                "photo": {}
            },
            {
                "id": "employeeId257",
                "firstName": "Hailey",
                "lastName": "Henderson",
                "email": "hailey.henderson@theweb.com",
                "phoneNumber": "1318372175",
                "hireDate": "2001-08-12T10:44:45.064Z",
                "jobId": "jobId12",
                "salary": 160223,
                "commissionPercent": 0.6035743559930303,
                "managerId": "managerId",
                "departmentId": "departmentId5",
                "photo": {}
            },
            {
                "id": "employeeId258",
                "firstName": "Owen",
                "lastName": "Miller,",
                "email": "owen.miller,@theweb.com",
                "phoneNumber": "1936702096",
                "hireDate": "2003-06-28T00:45:53.078Z",
                "jobId": "jobId33",
                "salary": 204036,
                "commissionPercent": 0.9364174453244961,
                "managerId": "managerId",
                "departmentId": "departmentId6",
                "photo": {}
            },
            {
                "id": "employeeId259",
                "firstName": "Isabelle",
                "lastName": "Bell",
                "email": "isabelle.bell@theweb.com",
                "phoneNumber": "1507120359",
                "hireDate": "2004-03-06T22:43:10.990Z",
                "jobId": "jobId18",
                "salary": 164188,
                "commissionPercent": 0.21097836691451496,
                "managerId": "managerId",
                "departmentId": "departmentId3",
                "photo": {}
            },
            {
                "id": "employeeId260",
                "firstName": "Christopher",
                "lastName": "Phillips",
                "email": "christopher.phillips@theweb.com",
                "phoneNumber": "1704184548",
                "hireDate": "2006-04-18T08:13:10.382Z",
                "jobId": "jobId5",
                "salary": 59389,
                "commissionPercent": 0.1842109303920024,
                "managerId": "managerId",
                "departmentId": "departmentId9",
                "photo": {}
            },
            {
                "id": "employeeId261",
                "firstName": "Aria",
                "lastName": "Ramirez",
                "email": "aria.ramirez@theweb.com",
                "phoneNumber": "1092897264",
                "hireDate": "2002-11-28T06:23:22.878Z",
                "jobId": "jobId12",
                "salary": 205272,
                "commissionPercent": 1.037852701273403,
                "managerId": "managerId",
                "departmentId": "departmentId7",
                "photo": {}
            },
            {
                "id": "employeeId262",
                "firstName": "Brayden",
                "lastName": "Kelly",
                "email": "brayden.kelly@theweb.com",
                "phoneNumber": "1500022274",
                "hireDate": "1990-10-26T02:00:15.767Z",
                "jobId": "jobId10",
                "salary": 182098,
                "commissionPercent": 0.28708565622691606,
                "managerId": "managerId",
                "departmentId": "departmentId3",
                "photo": {}
            },
            {
                "id": "employeeId263",
                "firstName": "Hannah",
                "lastName": "Mitchell",
                "email": "hannah.mitchell@theweb.com",
                "phoneNumber": "1114776610",
                "hireDate": "1989-11-30T15:50:50.132Z",
                "jobId": "jobId18",
                "salary": 200583,
                "commissionPercent": 0.26849529158904406,
                "managerId": "managerId",
                "departmentId": "departmentId1",
                "photo": {}
            },
            {
                "id": "employeeId264",
                "firstName": "Christopher",
                "lastName": "Richardson",
                "email": "christopher.richardson@theweb.com",
                "phoneNumber": "1607450970",
                "hireDate": "2012-02-06T14:55:58.528Z",
                "jobId": "jobId49",
                "salary": 10318,
                "commissionPercent": 0.799611299340876,
                "managerId": "managerId",
                "departmentId": "departmentId8",
                "photo": {}
            },
            {
                "id": "employeeId265",
                "firstName": "Isabella",
                "lastName": "Miller,",
                "email": "isabella.miller,@theweb.com",
                "phoneNumber": "1757007979",
                "hireDate": "2008-12-05T03:06:01.183Z",
                "jobId": "jobId20",
                "salary": 147267,
                "commissionPercent": 0.7038381072149164,
                "managerId": "managerId",
                "departmentId": "departmentId3",
                "photo": {}
            },
            {
                "id": "employeeId266",
                "firstName": "Benjamin",
                "lastName": "King",
                "email": "benjamin.king@theweb.com",
                "phoneNumber": "1601543757",
                "hireDate": "1985-01-29T03:40:13.240Z",
                "jobId": "jobId5",
                "salary": 160431,
                "commissionPercent": 0.6009645195103829,
                "managerId": "managerId",
                "departmentId": "departmentId3",
                "photo": {}
            },
            {
                "id": "employeeId267",
                "firstName": "Andrew",
                "lastName": "Cox",
                "email": "andrew.cox@theweb.com",
                "phoneNumber": "1733093333",
                "hireDate": "2004-02-02T09:46:15.569Z",
                "jobId": "jobId22",
                "salary": 151905,
                "commissionPercent": 0.8944875470096695,
                "managerId": "managerId",
                "departmentId": "departmentId7",
                "photo": {}
            },
            {
                "id": "employeeId268",
                "firstName": "Clara",
                "lastName": "Barnes",
                "email": "clara.barnes@theweb.com",
                "phoneNumber": "1070944352",
                "hireDate": "1987-06-25T07:12:51.393Z",
                "jobId": "jobId39",
                "salary": 148288,
                "commissionPercent": 0.8352111455723875,
                "managerId": "managerId",
                "departmentId": "departmentId0",
                "photo": {}
            },
            {
                "id": "employeeId269",
                "firstName": "Eliana",
                "lastName": "Martinez",
                "email": "eliana.martinez@theweb.com",
                "phoneNumber": "1753753198",
                "hireDate": "1992-12-12T18:00:05.993Z",
                "jobId": "jobId15",
                "salary": 35336,
                "commissionPercent": 0.6185600093260349,
                "managerId": "managerId",
                "departmentId": "departmentId6",
                "photo": {}
            },
            {
                "id": "employeeId270",
                "firstName": "Molly",
                "lastName": "Taylor",
                "email": "molly.taylor@theweb.com",
                "phoneNumber": "1421868973",
                "hireDate": "1981-12-18T07:09:06.302Z",
                "jobId": "jobId2",
                "salary": 62734,
                "commissionPercent": 0.1667781956705435,
                "managerId": "managerId",
                "departmentId": "departmentId9",
                "photo": {}
            },
            {
                "id": "employeeId271",
                "firstName": "Max",
                "lastName": "Foster",
                "email": "max.foster@theweb.com",
                "phoneNumber": "1491067233",
                "hireDate": "2005-04-15T15:37:16.041Z",
                "jobId": "jobId48",
                "salary": 12595,
                "commissionPercent": 0.9984836702295686,
                "managerId": "managerId",
                "departmentId": "departmentId9",
                "photo": {}
            },
            {
                "id": "employeeId272",
                "firstName": "Anna",
                "lastName": "Miller,",
                "email": "anna.miller,@theweb.com",
                "phoneNumber": "1486272680",
                "hireDate": "1982-07-25T11:33:17.514Z",
                "jobId": "jobId20",
                "salary": 157820,
                "commissionPercent": 1.1215843238177747,
                "managerId": "managerId",
                "departmentId": "departmentId6",
                "photo": {}
            },
            {
                "id": "employeeId273",
                "firstName": "Isabelle",
                "lastName": "Russell",
                "email": "isabelle.russell@theweb.com",
                "phoneNumber": "1868438890",
                "hireDate": "1984-02-14T17:43:47.028Z",
                "jobId": "jobId23",
                "salary": 142981,
                "commissionPercent": 1.0142542112373014,
                "managerId": "managerId",
                "departmentId": "departmentId3",
                "photo": {}
            },
            {
                "id": "employeeId274",
                "firstName": "Hudson",
                "lastName": "Gonzalez",
                "email": "hudson.gonzalez@theweb.com",
                "phoneNumber": "1120890751",
                "hireDate": "1983-03-04T21:19:29.149Z",
                "jobId": "jobId40",
                "salary": 61153,
                "commissionPercent": 0.7582833753450403,
                "managerId": "managerId",
                "departmentId": "departmentId5",
                "photo": {}
            },
            {
                "id": "employeeId275",
                "firstName": "Evan",
                "lastName": "Moore",
                "email": "evan.moore@theweb.com",
                "phoneNumber": "1486934252",
                "hireDate": "2007-12-10T17:13:25.963Z",
                "jobId": "jobId41",
                "salary": 80490,
                "commissionPercent": 0.3829169253871999,
                "managerId": "managerId",
                "departmentId": "departmentId2",
                "photo": {}
            },
            {
                "id": "employeeId276",
                "firstName": "Lily",
                "lastName": "Diaz",
                "email": "lily.diaz@theweb.com",
                "phoneNumber": "1583384756",
                "hireDate": "2004-04-01T04:44:12.628Z",
                "jobId": "jobId18",
                "salary": 143004,
                "commissionPercent": 0.2744605408142827,
                "managerId": "managerId",
                "departmentId": "departmentId7",
                "photo": {}
            },
            {
                "id": "employeeId277",
                "firstName": "Charlotte",
                "lastName": "Carter",
                "email": "charlotte.carter@theweb.com",
                "phoneNumber": "1555721947",
                "hireDate": "1989-08-23T02:28:14.431Z",
                "jobId": "jobId10",
                "salary": 188535,
                "commissionPercent": 0.4081606992899477,
                "managerId": "managerId",
                "departmentId": "departmentId5",
                "photo": {}
            },
            {
                "id": "employeeId278",
                "firstName": "Kylie",
                "lastName": "Campbell",
                "email": "kylie.campbell@theweb.com",
                "phoneNumber": "1908410585",
                "hireDate": "1999-11-12T21:46:57.761Z",
                "jobId": "jobId35",
                "salary": 140756,
                "commissionPercent": 0.22600675200673578,
                "managerId": "managerId",
                "departmentId": "departmentId2",
                "photo": {}
            },
            {
                "id": "employeeId279",
                "firstName": "Brooke",
                "lastName": "Alexander",
                "email": "brooke.alexander@theweb.com",
                "phoneNumber": "1156506182",
                "hireDate": "2013-04-27T18:21:34.180Z",
                "jobId": "jobId13",
                "salary": 61146,
                "commissionPercent": 0.9602884158661625,
                "managerId": "managerId",
                "departmentId": "departmentId5",
                "photo": {}
            },
            {
                "id": "employeeId280",
                "firstName": "Austin",
                "lastName": "Davis,",
                "email": "austin.davis,@theweb.com",
                "phoneNumber": "1384130293",
                "hireDate": "1999-03-13T07:24:49.784Z",
                "jobId": "jobId37",
                "salary": 150895,
                "commissionPercent": 0.893400325732712,
                "managerId": "managerId",
                "departmentId": "departmentId5",
                "photo": {}
            },
            {
                "id": "employeeId281",
                "firstName": "Alyssa",
                "lastName": "Ramirez",
                "email": "alyssa.ramirez@theweb.com",
                "phoneNumber": "1189821907",
                "hireDate": "1993-09-05T09:58:55.662Z",
                "jobId": "jobId12",
                "salary": 55465,
                "commissionPercent": 1.039186428322667,
                "managerId": "managerId",
                "departmentId": "departmentId7",
                "photo": {}
            },
            {
                "id": "employeeId282",
                "firstName": "Jack",
                "lastName": "Reed",
                "email": "jack.reed@theweb.com",
                "phoneNumber": "1382992583",
                "hireDate": "2001-03-05T12:23:56.677Z",
                "jobId": "jobId2",
                "salary": 29338,
                "commissionPercent": 0.2318404870683722,
                "managerId": "managerId",
                "departmentId": "departmentId4",
                "photo": {}
            },
            {
                "id": "employeeId283",
                "firstName": "Savannah",
                "lastName": "Walker",
                "email": "savannah.walker@theweb.com",
                "phoneNumber": "1360939302",
                "hireDate": "1987-11-23T01:53:58.803Z",
                "jobId": "jobId31",
                "salary": 65226,
                "commissionPercent": 0.5988404719175472,
                "managerId": "managerId",
                "departmentId": "departmentId9",
                "photo": {}
            },
            {
                "id": "employeeId284",
                "firstName": "Layla",
                "lastName": "Thompson",
                "email": "layla.thompson@theweb.com",
                "phoneNumber": "1597534167",
                "hireDate": "2011-05-31T12:49:49.618Z",
                "jobId": "jobId4",
                "salary": 118549,
                "commissionPercent": 1.0646111693137574,
                "managerId": "managerId",
                "departmentId": "departmentId5",
                "photo": {}
            },
            {
                "id": "employeeId285",
                "firstName": "Brody",
                "lastName": "Gonzalez",
                "email": "brody.gonzalez@theweb.com",
                "phoneNumber": "1060825756",
                "hireDate": "2010-07-03T02:56:38.133Z",
                "jobId": "jobId15",
                "salary": 142054,
                "commissionPercent": 1.0525388531600068,
                "managerId": "managerId",
                "departmentId": "departmentId9",
                "photo": {}
            },
            {
                "id": "employeeId286",
                "firstName": "Abigail",
                "lastName": "Clark",
                "email": "abigail.clark@theweb.com",
                "phoneNumber": "1674554052",
                "hireDate": "1999-01-09T03:00:59.021Z",
                "jobId": "jobId22",
                "salary": 109636,
                "commissionPercent": 1.018715686070674,
                "managerId": "managerId",
                "departmentId": "departmentId7",
                "photo": {}
            },
            {
                "id": "employeeId287",
                "firstName": "Joseph",
                "lastName": "Adams",
                "email": "joseph.adams@theweb.com",
                "phoneNumber": "1920780466",
                "hireDate": "1992-04-01T07:44:16.809Z",
                "jobId": "jobId46",
                "salary": 198337,
                "commissionPercent": 0.9180164794576989,
                "managerId": "managerId",
                "departmentId": "departmentId5",
                "photo": {}
            },
            {
                "id": "employeeId288",
                "firstName": "Isaac",
                "lastName": "Alexander",
                "email": "isaac.alexander@theweb.com",
                "phoneNumber": "1984338945",
                "hireDate": "2010-01-25T04:29:09.677Z",
                "jobId": "jobId22",
                "salary": 140411,
                "commissionPercent": 0.3474080557057492,
                "managerId": "managerId",
                "departmentId": "departmentId5",
                "photo": {}
            },
            {
                "id": "employeeId289",
                "firstName": "Mia",
                "lastName": "Roberts",
                "email": "mia.roberts@theweb.com",
                "phoneNumber": "1577987738",
                "hireDate": "2013-01-19T20:53:31.668Z",
                "jobId": "jobId11",
                "salary": 107372,
                "commissionPercent": 0.8114007355185372,
                "managerId": "managerId",
                "departmentId": "departmentId2",
                "photo": {}
            },
            {
                "id": "employeeId290",
                "firstName": "Evelyn",
                "lastName": "Carter",
                "email": "evelyn.carter@theweb.com",
                "phoneNumber": "1788008516",
                "hireDate": "2013-11-28T21:41:47.975Z",
                "jobId": "jobId16",
                "salary": 73769,
                "commissionPercent": 0.5710535916401901,
                "managerId": "managerId",
                "departmentId": "departmentId9",
                "photo": {}
            },
            {
                "id": "employeeId291",
                "firstName": "Eliana",
                "lastName": "Walker",
                "email": "eliana.walker@theweb.com",
                "phoneNumber": "1421299439",
                "hireDate": "1998-03-22T19:14:25.006Z",
                "jobId": "jobId26",
                "salary": 122049,
                "commissionPercent": 0.5733488891733164,
                "managerId": "managerId",
                "departmentId": "departmentId1",
                "photo": {}
            },
            {
                "id": "employeeId292",
                "firstName": "Emma",
                "lastName": "Nelson",
                "email": "emma.nelson@theweb.com",
                "phoneNumber": "1186564673",
                "hireDate": "1990-03-18T18:32:18.966Z",
                "jobId": "jobId19",
                "salary": 121203,
                "commissionPercent": 0.19809173606373295,
                "managerId": "managerId",
                "departmentId": "departmentId2",
                "photo": {}
            },
            {
                "id": "employeeId293",
                "firstName": "Nora",
                "lastName": "Gonzales",
                "email": "nora.gonzales@theweb.com",
                "phoneNumber": "1974759869",
                "hireDate": "1991-02-08T12:46:50.117Z",
                "jobId": "jobId28",
                "salary": 33592,
                "commissionPercent": 0.613038895605814,
                "managerId": "managerId",
                "departmentId": "departmentId6",
                "photo": {}
            },
            {
                "id": "employeeId294",
                "firstName": "Aria",
                "lastName": "Ross",
                "email": "aria.ross@theweb.com",
                "phoneNumber": "1397715416",
                "hireDate": "1984-06-29T21:33:59.337Z",
                "jobId": "jobId13",
                "salary": 146263,
                "commissionPercent": 0.6434625463022506,
                "managerId": "managerId",
                "departmentId": "departmentId4",
                "photo": {}
            },
            {
                "id": "employeeId295",
                "firstName": "Colin",
                "lastName": "Martinez",
                "email": "colin.martinez@theweb.com",
                "phoneNumber": "1999171161",
                "hireDate": "1982-09-16T18:01:37.898Z",
                "jobId": "jobId21",
                "salary": 155345,
                "commissionPercent": 0.35134750246538815,
                "managerId": "managerId",
                "departmentId": "departmentId4",
                "photo": {}
            },
            {
                "id": "employeeId296",
                "firstName": "Reagan",
                "lastName": "Powell",
                "email": "reagan.powell@theweb.com",
                "phoneNumber": "1475846058",
                "hireDate": "2002-02-18T01:31:45.204Z",
                "jobId": "jobId19",
                "salary": 154498,
                "commissionPercent": 0.46156332546735845,
                "managerId": "managerId",
                "departmentId": "departmentId4",
                "photo": {}
            },
            {
                "id": "employeeId297",
                "firstName": "Aiden",
                "lastName": "Perez",
                "email": "aiden.perez@theweb.com",
                "phoneNumber": "1143849438",
                "hireDate": "1991-03-23T19:54:01.006Z",
                "jobId": "jobId35",
                "salary": 59996,
                "commissionPercent": 0.8342329698528604,
                "managerId": "managerId",
                "departmentId": "departmentId1",
                "photo": {}
            },
            {
                "id": "employeeId298",
                "firstName": "Christopher",
                "lastName": "Jenkins",
                "email": "christopher.jenkins@theweb.com",
                "phoneNumber": "1048746271",
                "hireDate": "2006-11-25T09:45:16.791Z",
                "jobId": "jobId33",
                "salary": 184918,
                "commissionPercent": 0.8767387920575377,
                "managerId": "managerId",
                "departmentId": "departmentId6",
                "photo": {}
            },
            {
                "id": "employeeId299",
                "firstName": "Ryan",
                "lastName": "Rivera",
                "email": "ryan.rivera@theweb.com",
                "phoneNumber": "1502050983",
                "hireDate": "1997-12-16T09:43:01.919Z",
                "jobId": "jobId8",
                "salary": 162635,
                "commissionPercent": 0.5830040622539864,
                "managerId": "managerId",
                "departmentId": "departmentId0",
                "photo": {}
            }
        ],
        "Department": [
            {
                "id": "departmentId0",
                "name": "Licenses",
                "managerId": "managerId",
                "locationId": "locationId"
            },
            {
                "id": "departmentId1",
                "name": "IT",
                "managerId": "managerId",
                "locationId": "locationId"
            },
            {
                "id": "departmentId2",
                "name": "Purchasing",
                "managerId": "managerId",
                "locationId": "locationId"
            },
            {
                "id": "departmentId3",
                "name": "Human Resources",
                "managerId": "managerId",
                "locationId": "locationId"
            },
            {
                "id": "departmentId4",
                "name": "Operational",
                "managerId": "managerId",
                "locationId": "locationId"
            },
            {
                "id": "departmentId5",
                "name": "Sales",
                "managerId": "managerId",
                "locationId": "locationId"
            },
            {
                "id": "departmentId6",
                "name": "Customer Service",
                "managerId": "managerId",
                "locationId": "locationId"
            },
            {
                "id": "departmentId7",
                "name": "Organizational",
                "managerId": "managerId",
                "locationId": "locationId"
            },
            {
                "id": "departmentId8",
                "name": "Financial",
                "managerId": "managerId",
                "locationId": "locationId"
            },
            {
                "id": "departmentId9",
                "name": "Inventory",
                "managerId": "managerId",
                "locationId": "locationId"
            }
        ],
        "Location": [
            {
                "id": "locationId",
                "streetAddress": "dummyStreetAddress",
                "postalCode": "dummyPostalCode",
                "city": "dummyCity",
                "stateProvince": "dummyStateProvince",
                "countryId": 1
            }
        ],
        "Country": [
            {
                "id": 1,
                "name": "dummyCountryName",
                "regionId": "regionId"
            },
            {
                "id": 2,
                "name": "dummyCountryName",
                "regionId": "regionId"
            }
        ],
        "Region": [
            {
                "id": "regionId",
                "name": "dummyRegionName"
            },
            {
                "id": "regionId2",
                "name": "dummyRegionName2"
            },
            {
                "id": "regionId3",
                "name": "dummyRegionName3"
            }
        ],
        "Holiday": [],
        "DummyTable": [],
        "CrossColumnTable": [
            {
                "integer1": 0,
                "integer2": 0,
                "string1": "string1_00",
                "string2": "string2_0"
            },
            {
                "integer1": 1,
                "integer2": 10,
                "string1": "string1_01",
                "string2": "string2_10"
            },
            {
                "integer1": 2,
                "integer2": 20,
                "string1": "string1_02",
                "string2": "string2_20"
            },
            {
                "integer1": 3,
                "integer2": 30,
                "string1": "string1_03",
                "string2": "string2_30"
            },
            {
                "integer1": 4,
                "integer2": 40,
                "string1": "string1_04",
                "string2": "string2_40"
            },
            {
                "integer1": 5,
                "integer2": 50,
                "string1": "string1_05",
                "string2": "string2_50"
            },
            {
                "integer1": 6,
                "integer2": 60,
                "string1": "string1_06",
                "string2": "string2_60"
            },
            {
                "integer1": 7,
                "integer2": 70,
                "string1": "string1_07",
                "string2": "string2_70"
            },
            {
                "integer1": 8,
                "integer2": 80,
                "string1": "string1_08",
                "string2": "string2_80"
            },
            {
                "integer1": 9,
                "integer2": 90,
                "string1": "string1_09",
                "string2": "string2_90"
            },
            {
                "integer1": 10,
                "integer2": 100,
                "string1": null,
                "string2": "string2_100"
            },
            {
                "integer1": 11,
                "integer2": 110,
                "string1": "string1_11",
                "string2": "string2_110"
            },
            {
                "integer1": 12,
                "integer2": 120,
                "string1": null,
                "string2": "string2_120"
            },
            {
                "integer1": 13,
                "integer2": 130,
                "string1": "string1_13",
                "string2": "string2_130"
            },
            {
                "integer1": 14,
                "integer2": 140,
                "string1": null,
                "string2": "string2_140"
            },
            {
                "integer1": 15,
                "integer2": 150,
                "string1": "string1_15",
                "string2": "string2_150"
            },
            {
                "integer1": 16,
                "integer2": 160,
                "string1": "string1_16",
                "string2": null
            },
            {
                "integer1": 17,
                "integer2": 170,
                "string1": "string1_17",
                "string2": "string2_170"
            },
            {
                "integer1": 18,
                "integer2": 180,
                "string1": "string1_18",
                "string2": null
            },
            {
                "integer1": 19,
                "integer2": 190,
                "string1": "string1_19",
                "string2": "string2_190"
            }
        ]
    });
    const job = db.table("Job");
    const results = await db.select().from(job).where(job.col("minSalary").gte(300000)).orderBy(job.col("minSalary"), Order.ASC).exec();
    console.log(results);
    console.log(await db.export());
})();
