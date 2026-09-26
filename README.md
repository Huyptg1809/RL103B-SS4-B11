1. Phân tích lỗi 

Lỗi 1: Sai điều kiện dừng trong vòng lặp for
- Dòng lệnh sai: for (let cupIndex = 1; cupIndex < orderQuantity; cupIndex++)
- Nguyên nhân: Biến cupIndex bắt đầu từ 1 nhưng điều kiện lại là cupIndex < orderQuantity (orderQuantity = 3), nên vòng lặp chỉ chạy 2 lần (khi cupIndex = 1 và 2). Vì vậy hệ thống chỉ tính tiền 2 ly thay vì 3 ly.
- Cách khắc phục: Sửa điều kiện thành cupIndex <= orderQuantity để vòng lặp chạy đủ 3 ly.

Lỗi 2: Đặt câu lệnh giảm giá sai vị trí
- Dòng lệnh sai: Đặt if (isGoldMember) { totalBill = totalBill * 0.9; } bên trong vòng lặp for.
- Nguyên nhân: Cứ sau mỗi lần cộng tiền của 1 ly thì chương trình lại nhân với 0.9. Việc này khiến tiền của các ly trước đó bị giảm giá lặp lại nhiều lần (ly 1 bị giảm 2 lần), dẫn đến tổng tiền bị sai lệch.
- Cách khắc phục: Chuyển đoạn if (isGoldMember) ra ngoài vòng lặp for, sau khi cộng xong tổng tiền của tất cả các ly thì mới tính giảm giá 1 lần.
