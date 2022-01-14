import * as fs from "fs";
import * as path from "path";

import { ConstraintAction, Order, Type, schema } from "./DeathValley";
import { MockDataGenerator } from "./src/testing/hr_schema/mock_data_generator";

(async function() {
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

	dataGenerator.generate(
		/* jobCount */ 50,
		/* employeeCount */ 300,
		/* departmentCount */ 10
	);

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

	const results = (await db.select().from(db.getSchema().table("Job")).where(db.getSchema().table("Job").col("minSalary").gte(300000)).exec());

	console.log(results);

	fs.writeFileSync(path.join(__dirname, "output.json"), JSON.stringify(await db.export(), undefined, 4));
})();
