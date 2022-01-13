function Custom(cheeckValue, id, value) {
  if (cheeckValue) {
    const DefaultField = (document.getElementById(id).innerText = value);
    const Price = Number(DefaultField);
    return Price;
  } else {
    const DefaultField = (document.getElementById(id).innerText = value);
    const Price = Number(DefaultField);
    return Price;
  }
}
// StorageCostField
function StorageCustomization(Condition, id, value) {
  if (Condition && value > 100) {
    const Storage__Cost = (document.getElementById(id).innerText = value);
    const price = Number(Storage__Cost);
    return price;
  } else if (!Condition && value > 0) {
    const Storage__Cost = (document.getElementById(id).innerText = value);
    const price = Number(Storage__Cost);
    return price;
  } else {
    const Storage__Cost = (document.getElementById(id).innerText = value);
    const price = Number(Storage__Cost);
    return price;
  }
}

function grandTotal() {
  const bestFrice = 1299;
  const memoryPrice = Number(document.getElementById("Memoryfiled").innerText);
  const StoragePrice = Number(
    document.getElementById("StorageCostField").innerText
  );
  const DeleveryCharge = Number(
    document.getElementById("DeliveryChargeField").innerText
  );

  const price = memoryPrice + StoragePrice + DeleveryCharge;

  const total = price + bestFrice;
  document.getElementById("GrandTotal").innerText = total;
}

document.getElementById("DefaultMemory").addEventListener("click", function () {
  const price = Custom(false, "Memoryfiled", 0);
  grandTotal();
});

document.getElementById("ExtraMomory").addEventListener("click", function () {
  const price = Custom(true, "Memoryfiled", 180);
  grandTotal();
});

document.getElementById("FreeDeivery").addEventListener("click", function () {
  const price = Custom(false, "DeliveryChargeField", 0);
  grandTotal();
});

document.getElementById("ExtraDelivery").addEventListener("click", function () {
  const price = Custom(true, "DeliveryChargeField", 20);
  grandTotal();
});

document
  .getElementById("DefaultStorage")
  .addEventListener("click", function () {
    const price = StorageCustomization(true, "StorageCostField", 0);
    grandTotal();
  });
document.getElementById("semiSTorage").addEventListener("click", function () {
  const price = StorageCustomization(false, "StorageCostField", 100);
  grandTotal();
});
document.getElementById("ExtraStorage").addEventListener("click", function () {
  const price = StorageCustomization(true, "StorageCostField", 180);
  grandTotal();
});
