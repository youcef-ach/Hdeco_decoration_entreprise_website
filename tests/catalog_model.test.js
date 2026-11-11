import { test, describe } from "node:test";
import assert from "node:assert/strict";

const mockProducts = [
  { id: 1, title: "Modern Nordic Armchair", price: "45000 dzd", type: "seating" },
  { id: 2, title: "Minimalist Oak Coffee Table", price: "28000 dzd", type: "tables" },
  { id: 3, title: "Ceramic Ambient Lamp", price: "12000 dzd", type: "lighting" },
  { id: 4, title: "Velvet Accent Sofa", price: "115000 dzd", type: "seating" },
  { id: 5, title: "Geometric Wall Shelf", price: "18500 dzd", type: "storage" },
];

describe("Hdeco Commercial Catalog - Data Integrity & Filtering", () => {
  test("Product catalog items declare positive identifiers and valid DZD currency prices", () => {
    assert.equal(mockProducts.length, 5);
    for (const item of mockProducts) {
      assert.ok(item.id > 0);
      assert.match(item.price, /^\d+\s*dzd$/i);
      assert.ok(item.title.length > 0);
    }
  });

  test("Category filtering isolates product collections accurately", () => {
    const seatingItems = mockProducts.filter((p) => p.type === "seating");
    assert.equal(seatingItems.length, 2);

    const lightingItems = mockProducts.filter((p) => p.type === "lighting");
    assert.equal(lightingItems.length, 1);
    assert.equal(lightingItems[0].title, "Ceramic Ambient Lamp");
  });

  test("Price parser extracts numerical values for sorting and budget calculations", () => {
    const parsePrice = (priceStr) => parseInt(priceStr.replace(/\D/g, ""), 10);
    const sortedByPrice = [...mockProducts].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));

    assert.equal(sortedByPrice[0].id, 3); // 12000 dzd
    assert.equal(sortedByPrice[sortedByPrice.length - 1].id, 4); // 115000 dzd
  });
});

