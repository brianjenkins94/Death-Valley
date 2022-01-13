import { Order, Type, schema } from "./DeathValley";

(async function() {
	const schemaBuilder = schema.create("todo", 1);

	schemaBuilder
		.createTable("Item")
		.addColumn("id", Type.INTEGER)
		.addColumn("description", Type.STRING)
		.addColumn("deadline", Type.DATE_TIME)
		.addColumn("done", Type.BOOLEAN)
		.addPrimaryKey(["id"])
		.addIndex("idxDeadline", ["deadline"], false, Order.DESC);

	const db = await schemaBuilder.connect();

	const data = [
		{ "id": 1, "description": "get some coffee", "deadline": 1587947145675, "done": false },
		{ "id": 2, "description": "prepare demo", "deadline": 1587948145675, "done": false },
		{ "id": 3, "description": "completed task", "deadline": 1587847145675, "done": true },
		{ "id": 4, "description": "get enough sleep", "deadline": 1587847045675, "done": false }
	];

	let item = db.getSchema().table("Item");

	const rows = data.map((d) => item.createRow({
		"id": d.id,
		"description": d.description,
		"deadline": new Date(d.deadline),
		"done": d.done
	}));

	await db.insertOrReplace().into(item).values(rows).exec();

	item = db.getSchema().table("Item");

	const res = await db
		.select()
		.from(item)
		.where(item["done"].eq(false))
		.orderBy(item["deadline"])
		.exec();

	for (const row of res) {
		console.log("Finish [", row.description, "] before", row.deadline.toLocaleString());
	}
})();
