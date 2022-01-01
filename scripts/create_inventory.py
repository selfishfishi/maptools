import os
import glob
import json

class Inventory():
    def __init__(self, output_root) -> None:
        self.output_root = output_root

    def find_unit_dir(self) -> str:
        directories_gen = os.walk(self.output_root)
        dirs = next(directories_gen)[1]
        unit_dir = str(max([int(i) for i in dirs]))
        print("Unit directory found %s" % unit_dir)
        return unit_dir

    def walkthrough_dirs(self, unit_dir):
        directories_gen = os.walk(self.output_root)
        collection_root = os.path.join(self.output_root, unit_dir)
        collection_dirs = next(os.walk(collection_root))[1]
        columns = {k:{} for k in collection_dirs}
        column_keys = sorted(columns.keys())
        id_no = 0
        for k in column_keys:
            rows_path = os.path.join(collection_root, k)
            tile_count = len(glob.glob(rows_path + "/*.png"))
            for tile_index in range(tile_count):
                columns[k][tile_index] = {
                    "id": id_no,
                    "location": str(k) + " X " + str(tile_index), 
                    "path":os.path.join(rows_path, str(tile_index) + ".png")}
                id_no += 1
        print("Collected %d tiles" % id_no)
        print("Columns: %d" % len(column_keys))
        print("Rows: %d" % len(columns["0"]))
        return columns

    def write_inventory(self, inventory) -> bool:
        inventory_str = json.dumps(inventory, indent=4)
        inventory_path = os.path.join(self.output_root, "inventory.json")
        with open(inventory_path, "w") as text_file:
            text_file.write(inventory_str)
        return inventory_path

    def collect_inventory(self) -> None:
        unit_dir = self.find_unit_dir()
        inventory = self.walkthrough_dirs(unit_dir)
        inventory_path = self.write_inventory(inventory)
        print("Inventory recorded at %s" % inventory_path)

if __name__ == '__main__':
    output_root = 'output'
    inventory_collector = Inventory(output_root)
    inventory_collector.collect_inventory()
