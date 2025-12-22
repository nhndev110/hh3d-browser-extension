const MIMES = [
  {
    id: 51,
    name: "Thiên",
    class: "upper"
  },
  {
    id: 52,
    name: "Địa",
    class: "upper"
  },
  {
    id: 53,
    name: "Huyền",
    class: "upper"
  },
  {
    id: 54,
    name: "Hoàng",
    class: "upper"
  },
  {
    id: 55,
    name: "Hồng Hoang",
    class: "upper"
  },
  {
    id: 56,
    name: "Thần Sơn",
    class: "upper"
  },
  {
    id: 64,
    name: "Hỗn Độn",
    class: "upper"
  },
  {
    id: 73,
    name: "Thái Cổ",
    class: "upper"
  },
  {
    id: 68,
    name: "Hắc Ám Chi Địa",
    class: "middle"
  },
  {
    id: 41,
    name: "Tiểu Thiên U Cảnh",
    class: "middle"
  },
  {
    id: 71,
    name: "Vân Hải",
    class: "middle"
  },
  {
    id: 100001,
    name: "Âm Minh Chi Địa",
    class: "middle"
  },
  {
    id: 70,
    name: "Ám Nguyệt Tinh",
    class: "middle"
  },
  {
    id: 32,
    name: "Bất Diệt Sơn",
    class: "middle"
  },
  {
    id: 47,
    name: "Bất Tử Sơn",
    class: "middle"
  },
  {
    id: 35,
    name: "Càn Nguyên Tiên Vực",
    class: "middle"
  },
  {
    id: 59,
    name: "Chu Tước Tinh",
    class: "middle"
  },
  {
    id: 100000,
    name: "Côn Hư Tinh Vực",
    class: "middle"
  },
  {
    id: 67,
    name: "Cửu U Vực",
    class: "middle"
  },
  {
    id: 66,
    name: "Dao Trì Thánh Địa",
    class: "middle"
  },
  {
    id: 44,
    name: "Đế Thành Nguyên Thủy",
    class: "middle"
  },
  {
    id: 31,
    name: "Dị Vực",
    class: "middle"
  },
  {
    id: 46,
    name: "Diêu Quang Thánh Địa",
    class: "middle"
  },
  {
    id: 50,
    name: "Độ Tiên Môn",
    class: "middle"
  },
  {
    id: 42,
    name: "Đông Thắng Thần Châu",
    class: "middle"
  },
  {
    id: 37,
    name: "Huyền Thiên Tiên Vực",
    class: "middle"
  },
  {
    id: 100002,
    name: "Huyết Thiên Đại Lục",
    class: "middle"
  },
  {
    id: 43,
    name: "Khai Nguyên Tiên Vực",
    class: "middle"
  },
  {
    id: 74,
    name: "La Thiên Tinh Vực",
    class: "middle"
  },
  {
    id: 75,
    name: "Liên Minh Tinh Vực",
    class: "middle"
  },
  {
    id: 65,
    name: "Luân Hồi Vực",
    class: "middle"
  },
  {
    id: 49,
    name: "Ma Vực",
    class: "middle"
  },
  {
    id: 100004,
    name: "Man Sơn Thánh Địa",
    class: "middle"
  },
  {
    id: 72,
    name: "Nam Bình Sơn",
    class: "middle"
  },
  {
    id: 48,
    name: "Nguyên Cảnh Tiên Vực",
    class: "middle"
  },
  {
    id: 39,
    name: "Tam Thiên Đạo Châu",
    class: "middle"
  },
  {
    id: 33,
    name: "Táng Thần Chi Địa",
    class: "middle"
  },
  {
    id: 40,
    name: "Thái Cổ Thần Sơn",
    class: "middle"
  },
  {
    id: 100007,
    name: "Thâm Uyên Chi Hải",
    class: "middle"
  },
  {
    id: 38,
    name: "Thiên Cung Đại Lục",
    class: "middle"
  },
  {
    id: 36,
    name: "Thiên Hỏa Tiên Vực",
    class: "middle"
  },
  {
    id: 58,
    name: "Thiên Huyền Đại Lục",
    class: "middle"
  },
  {
    id: 34,
    name: "Thiên Tinh Tiên Vực",
    class: "middle"
  },
  {
    id: 100005,
    name: "Thiên Uyên Tiên Cảnh",
    class: "middle"
  },
  {
    id: 60,
    name: "Thông Thiên Kiếm Phái",
    class: "middle"
  },
  {
    id: 57,
    name: "Tiên Cương Đại Lục",
    class: "middle"
  },
  {
    id: 45,
    name: "Tiên Điện",
    class: "middle"
  },
  {
    id: 62,
    name: "Vạn Xà Cốc",
    class: "middle"
  },
  {
    id: 100006,
    name: "Vạn Yêu Sơn",
    class: "middle"
  },
  {
    id: 69,
    name: "Viễn Cổ Tiên Vực",
    class: "middle"
  },
  {
    id: 100003,
    name: "Vĩnh Tĩnh Chi Hải",
    class: "middle"
  },
  {
    id: 61,
    name: "Vũ Hóa Môn",
    class: "middle"
  },
  {
    id: 25,
    name: "Bách Đoạn Sơn",
    class: "lower"
  },
  {
    id: 9,
    name: "Cửu U Cốc",
    class: "lower"
  },
  {
    id: 10,
    name: "Dạ Lang Thôn",
    class: "lower"
  },
  {
    id: 4,
    name: "Hỏa Quốc",
    class: "lower"
  },
  {
    id: 3,
    name: "Hoang Vực",
    class: "lower"
  },
  {
    id: 11,
    name: "Khô Lâu Sơn",
    class: "lower"
  },
  {
    id: 12,
    name: "Lạc Nhật Cao Nguyên",
    class: "lower"
  },
  {
    id: 13,
    name: "Mai Cốt Chi Địa",
    class: "lower"
  },
  {
    id: 8,
    name: "Ngọc Thanh Môn",
    class: "lower"
  },
  {
    id: 18,
    name: "Phong Ma Cốc",
    class: "lower"
  },
  {
    id: 2,
    name: "Thạch Thôn",
    class: "lower"
  },
  {
    id: 5,
    name: "Thái Cổ Thánh Sơn",
    class: "lower"
  },
  {
    id: 1,
    name: "Thiên Hải",
    class: "lower"
  },
  {
    id: 6,
    name: "Tiên Cổ Giới",
    class: "lower"
  }
]

export { MIMES };