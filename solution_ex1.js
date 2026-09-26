// Giải thích 2 lỗi logic:
// 1. Sai điều kiện lặp: cupIndex chạy từ 1 nhưng điều kiện là cupIndex < orderQuantity nên vòng lặp chỉ chạy 2 lần, thiếu mất 1 ly. Sửa thành: cupIndex <= orderQuantity.
// 2. Sai vị trí giảm giá: Đặt lệnh giảm giá thẻ Gold bên trong vòng lặp làm tiền bị giảm giá nhiều lần. Sửa lại: chuyển đoạn giảm giá ra ngoài vòng lặp để chỉ giảm 1 lần sau khi tính xong tổng tiền.

const drinkName = "Phin Sữa Đá";
const basePrice = 29000;
const drinkSize = "M";
const toppingsPerCup = 2;
const orderQuantity = 3;
const isGoldMember = true;
const toppingPrice = 8000;

let sizeUpcharge = 0;
if (drinkSize === "M") {
  sizeUpcharge = 6000;
} else if (drinkSize === "L") {
  sizeUpcharge = 10000;
}

const singleCupPrice = basePrice + sizeUpcharge + (toppingsPerCup * toppingPrice);

let totalBill = 0;
for (let cupIndex = 1; cupIndex <= orderQuantity; cupIndex++) {
  totalBill += singleCupPrice;
}

if (isGoldMember) {
  totalBill = totalBill * 0.9;
}

console.log("Tổng thanh toán:", totalBill, "VNĐ");
