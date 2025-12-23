const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const QUESTION_ANSWERS = {
  "1 Trong 2 Admin của website HoatHinh3D là ai ? (Biệt danh chính xác ở web)": "Từ Dương",
  "Ai là huynh đệ và cũng là người thầy mà Vương Lâm trong Tiên Nghịch kính trọng nhất ?": "Tư Đồ Nam",
  "Ai là mẹ của Đường Tam?": "A Ngân",
  "Ai là người đứng đầu Vũ Hồn Điện?": "Bỉ Bỉ Đông",
  "Ai là nhân vật chính trong bộ phim hoạt hình trung quốc Thần Mộ ?": "Thần Nam",
  "Bách Lý Đông Quân là nhân vật trong bộ hoạt hình trung quốc nào sau đây ?": "Thiếu Niên Bạch Mã Tuý Xuân Phong",
  "Bạch Nguyệt Khôi là tên nhân vật chính trong bộ phim hoạt hình trung quốc nào sau đây ?": "Linh Lung",
  "Bạch Tiểu Thuần là nhân vật chính trong bộ hoạt hình trung quốc nào ?": "Nhất Niệm Vĩnh Hằng",
  "Bạch Tiểu Thuần trong Nhất Niệm Vĩnh Hằng luôn được ai âm thầm giúp đỡ ?": "Đỗ Lăng Phỉ",
  "Bộ phim nào sau đây thuộc tiểu thuyết của tác giả Thiên Tằm Thổ Đậu": "Tất cả đáp án",
  "Các cấp bậc nào sau đây thuộc phim Đấu Phá Thương Khung ?": "Đấu Tông",
  "Cháu dượng của Bạch Tiểu Thuần trong Nhất Niệm Vĩnh Hằng là ai ?": "Tống Khuyết",
  "Chủ nhân đời trước của Vẫn Lạc Tâm Viêm trong Đấu Phá Thương Khung là ai ?": "Diệu Thiên hoả",
  "Công pháp gì giúp Tiêu Viêm trong Đấu Phá Thương Khung hấp thụ nhiều loại dị hỏa ?": "Phần Quyết",
  "Công pháp nào sau đây là của Hàn Lập trong Phàm Nhân Tu Tiên ?": "Tất cả đáp án",
  "Cơ Tử Nguyệt là nhân vật trong các bộ hoạt hình trung quốc nào sau đây ?": "Già Thiên",
  "Dạ Táng còn là biệt danh của ai trong Nhất Niệm Vĩnh Hằng ?": "Bạch Tiểu Thuần",
  "Danh xưng Tàn Thi Bại Thuế là của nhân vật nào trong Hoạ Giang Hồ Chi Bất Lương Nhân ?": "Hàng Thần",
  "Diễm Linh Cơ là nhân vật trong phim hoạt hình trung quốc nào ?": "Thiên Hành Cửu Ca",
  "Diệp Phàm là nhân vật chính trong bộ hoạt hình trung quốc nào ?": "Già Thiên",
  "Diệp Thần trong Tiên Võ Đế Tôn gia nhập Tông Môn nào đầu tiên ?": "Chính Dương Tông",
  "Dược Trần trong Đấu Phá Thương Khung đã từng bị đồ đệ nào phản bội ?": "Hàn Phong",
  "Đại ca của Tiêu Viêm trong Đấu Phá Thương Khung tên gì ?": "Tiêu Đỉnh",
  "Đàm Vân là nhân vật chính trong bộ phim hoạt hình trung quốc nào sau đây ?": "Nghịch Thiên Chí Tôn",
  "Đạo lữ của Hàn Lập là ai ?": "Nam Cung Uyển",
  "Đâu là nhân vật chính trong phim Bách Luyện Thành Thần ?": "La Chinh",
  "Đâu là Thái Cổ Thập Hung trong phim Thế Giới Hoàn Mỹ ?": "Tất cả đáp án",
  "Đâu là tuyệt kỹ số 1 Hạo Thiên Tông mà Đường Hạo dạy cho con trai trong Đấu La Đại Lục ?": "Đại Tu Di Chùy",
  "Đấu Sát Toàn Viên Kiếm là một kỹ năng trong bộ phim hoạt hình trung quốc nào ?": "Thần Ấn Vương Tọa",
  "Độc Cô Bác trong Đấu La Đại Lục có vũ hồn gì ?": "Bích Lân Xà",
  "Em trai ruột của Thạch Hạo trong Thế Giới Hoàn Mỹ là ai ?": "Tần Hạo",
  "Hàn Lập sở hữu những vật phẩm nào dưới đây ?": "Thanh Trúc Phong Vân Kiếm",
  "Hàn Lập trong Phàm Nhân Tu Tiên đến Thất Huyền Môn bái ai làm thầy ?": "Mặc Đại Phu",
  "Hàn Lâp trong Phàm Nhân Tu Tiên gia nhập môn phái nào đầu tiên ?": "Thất Huyền Môn",
  "Hàn Lập trong Phàm Nhân Tu Tiên từng cứu ai mà bị hấp thụ tu vi giảm xuống Luyện Khí Kỳ ?": "Nam Cung Uyển",
  "Hoang Thiên Đế là nhân vật chính trong bộ phim hoạt hình trung quốc nổi tiếng nào ?": "Thế Giới Hoàn Mỹ",
  "Hoắc Vũ Hạo là hậu nhân của ai trong Sử Lai Khắc ?": "Đái Mộc Bạch",
  "Hồn hoàn màu nào mạnh nhất?": "Đỏ",
  "Huân Nhi là công chúa của bộ tộc nào?": "Cổ Tộc",
  "Khi ở Già Nam Học Viện, Tiêu Viêm thu phục được loại dị hỏa nào ?": "Vẫn Lạc Tâm Viêm",
  "Kính Huyền trong Quyến Tư Lượng là hậu duệ của tộc nào ?": "Thần Tộc",
  "Lạc Ly trong Đại Chúa Tể là nhân vật trong Tộc nào ?": "Lạc Thần Tộc",
  "Lâm Động trong Vũ Động Càn Khôn học được Linh Võ Học nào khi vào bia cổ Đại Hoang ?": "Đại Hoang Tù Thiên Chỉ",
  "Lâm Động trong Vũ Động Càn Khôn luyện hóa Tổ Phù nào đầu tiên ?": "Thôn Phệ Tổ Phù",
  "Lâm Động trong Vũ Động Càn Khôn sử dụng vũ khí loại nào sau đây ?": "Thương",
  "Lâm Phong là nhân vật trong bộ hoạt hình trung quốc nào sau đây ?": "Vạn Giới Độc Tôn",
  "Lâm Thất Dạ là nhân vật trong bộ hoạt hình trung quốc nào sau đây ?": "Trảm Thần",
  "Lâm Thất Dạ trong Trảm Thần sở hữu sức mạnh của vị thần nào ?": "Thiên Sứ",
  "Long Tuyền Kiếm xuất hiện trong bộ phim hoạt hình nào dưới đây ?": "Họa Giang Hồ Chi Bất Lương Nhân",
  "Lục Tuyết Kỳ trong Tru Tiên thuộc Phong nào trong Thanh Vân Môn?": "Tiểu Trúc Phong",
  "Lý Tinh Vân trong Họa Giang Hồ Chi Bất Lương Nhân sử dụng vũ khí nào sau đây ?": "Long Tuyền Kiếm",
  "Lý Trường Thọ trong Sư Huynh A Sư Huynh xuyên không về Hồng Hoang bái sư ở đâu ?": "Độ Tiên Môn",
  "Man Hồ Tử trong phim \"Phàm Nhân Tu Tiên\" tu luyện công pháp nào?": "Thác Thiên Ma Công",
  "Mẫu thân của La Phong trong Thôn Phệ Tinh Không tên là gì ?": "Cung Tâm Lan",
  "Mẹ của Mạnh Xuyên trong Thương Nguyên Đồ tên là gì ?": "Bạch Niệm Vân",
  "Mẹ của Tần Trần là ai ?": "Tần Nguyệt Trì",
  "Mẹ của Thạch Hạo trong Thế Giới Hoàn Mỹ tên là gì": "Tần Di Ninh",
  "Mối tình đầu của Diệp Thần trong Tiên Võ Đế Tôn là ai ?": "Cơ Ngưng Sương",
  "Mục đích tu luyện của Vương Lâm trong Tiên Nghịch theo diễn biến phim hiện tại là gì ?": "Báo Thù",
  "Mục Trần trong Đại Chúa Tể liên kết Huyết Mạch với ?": "Cửu U Tước",
  "Mục Vân là nhân vật trong bộ hoạt hình trung quốc nào sau đây ?": "Vô Thượng Thần Đế",
  "Nam chính trong bộ hoạt hình trung quốc Ám Hà Truyện là ai ?": "Tô Mộ Vũ",
  "Nam chính trong bộ Quyến Tư Lượng là ai ?": "Kính Huyền",
  "Nghịch Hà Tông là Tông Môn trong bộ hoạt hình trung quốc nào sau đây ?": "Nhất Niệm Vĩnh Hằng",
  "Nghịch Thiên Nhi Hành là một nhân vật trong bộ phim hh3d nào sau đây ?": "Vũ Canh Kỷ",
  "Ngụy Anh (Ngụy Vô Tiện) là nhân vật trong bộ hhtq nào sau đây ?": "Ma Đạo Tổ Sư",
  "Người bạn thuở nhỏ của Trương Tiểu Phàm trong Tru Tiên là ai ?": "Lâm Kinh Vũ",
  "Nhân vật Bách Lý Đồ Minh xuất hiện trong phim hoạt hình nào dưới đây ?": "Trảm Thần Chi Phàm Trần Thần Vực",
  "Nhân vật chính của \"Thần Ấn Vương Tọa\" là ai?": "Long Hạo Thần",
  "Nhân vật chính của Đấu La Đại Lục là ai?": "Đường Tam",
  "Nhân vật chính Lý Trường Thọ trong Sư Huynh A Sư Huynh đã tỏ tình với ai ?": "Vân Tiêu",
  "Nhân vật chính trong Thương Nguyên đồ là ai ?": "Mạnh Xuyên",
  "Nhân vật chính trong Yêu Thần Ký tên là gì ?": "Nhiếp Ly",
  "Nhân vật nào luôn bất bại trong phim Hoạt Hình Trung Quốc, được ví như One-Punch Man ?": "Từ Dương",
  "Nhân vật nào sau đây được mệnh danh là Vua Lỳ Đòn trong Đấu Phá Thương Khung ?": "Phượng Thanh Nhi",
  "Nhị ca của Tiêu Viêm trong Đấu Phá Thương Khung tên gì ?": "Tiêu Lệ",
  "Nhiếp Phong là nhân vật chính trong phim hoạt hình trung quốc nào ?": "Chân Võ Đỉnh Phong",
  "Ninh Diêu là một nhân vật trong bộ phim hoạt hình trung quốc nào sau đây ?": "Kiếm Lai",
  "Nữ chính cũng là vợ Đông Bá Tuyết Ưng trong Tuyết Ưng Lĩnh Chủ là ai sau đây ?": "Dư Tĩnh Thu",
  "Nữ chính trong bộ Quyến Tư Lượng là ai ?": "Đồ Lệ",
  "Ông nội của Lâm Động trong Vũ Động Càn Khôn là ai ?": "Lâm Chấn Thiên",
  "Phụ Thân của Lâm Động trong Vũ Động Càn Khôn là ai ?": "Lâm Khiếu",
  "Phương Hàn là nhân vật trong bộ hoạt hình trung quốc nào sau đây ?": "Vĩnh Sinh",
  "Phương Hàn trong Vĩnh Sinh nhận được Giao Phục Hoàng Tuyền Đồ từ ai ?": "Bạch Hải Thiện",
  "Phương Hàn trong Vĩnh Sinh xuất thân là gì ở nhà họ Phương ?": "Nô Bộc",
  "Phượng Thanh Nhi trong Đấu Phá Thương Khung thuộc chủng tộc nào ?": "Thiên Yêu Hoàng Tộc",
  "Số hiệu vị thần của main trong Trảm Thần: Phàm Trần Thần Vực là số mấy ?": "003",
  "Sử Lai Khắc Thất Quái đã từng đến nơi nào để luyện tập?": "Hải Thần Đảo",
  "Sư mẫu của Bạch Tiểu Thuần trong Nhất Niệm Vĩnh Hằng là ai ?": "Hứa Mị Nương",
  "Sư phụ của Bạch Tiểu Thuần trong Nhất Niệm Vĩnh Hằng là ai ?": "Lý Thanh Hậu",
  "Sư phụ của Lý Trường Thọ là ai ?": "Tề Nguyên",
  "Sư phụ mà Diệp Thần yêu trong Tiên Võ Đế Tôn là ai ?": "Sở Huyên Nhi",
  "Sư Phụ thứ 2 của Lý Trường Thọ trong phim": "Thái Thanh Thánh Nhân",
  "Tại sao Đường Tam bị Đường Môn truy sát ở tập đầu phim Đấu La Đại Lục ?": "Học trộm tuyệt học bổn môn",
  "Tần Vũ trong Tinh Thần Biến được tặng pháp bảo siêu cấp vip pro nào để tu luyện nhanh chóng ?": "Khương Lan Tháp",
  "Tần Vũ trong Tinh Thần Biến khiếm khuyết đan điền nhờ đâu mới có thể tu luyện ?": "Lưu Tinh Lệ",
  "Thánh nữ nào trong Già Thiên bị nhân vật chính Diệp Phàm lấy mất cái áo lót ?": "Diêu Hi",
  "Thần Thông Bí Cảnh xuất hiện trong bộ phim hoạt hình nào dưới đây ?": "Vĩnh Sinh",
  "Thần vị mà Đường Tam đạt được là gì?": "Hải Thần và Tu La Thần",
  "Thế lực nào là đối thủ lớn nhất của Tiêu Viêm trong Đấu Phá Thương Khung?": "Hồn Điện",
  "Thú cưng Thôn Thôn trong Nguyên Tôn sinh ra có sức mạnh ngang cảnh giới nào ?": "Thái Sơ Cảnh",
  "Tiêu Khinh Tuyết xuất hiện trong bộ hoạt hình nào dưới đây ?": "Tuyệt Thế Chiến Hồn",
  "Tiêu Viêm đã lập nên thế lực nào khi ở Học Viện Già Nam ?": "Bàn Môn",
  "Tiêu Viêm trong Đấu Phá Thương Khung đã Hẹn Ước 3 Năm với ai ?": "Nạp Lan Yên Nhiên",
  "Tiêu Viêm trong Đấu Phá Thương Khung sử dụng loại vũ khí nào sau đây ?": "Thước",
  "Tiêu Viêm trong Đấu Phá Thương Khung thuộc gia tộc nào?": "Tiêu gia",
  "Tình đầu của Diệp Phàm trong Già Thiên là ai ?": "Lý Tiểu Mạn",
  "Trần Bình An là nam chính trong bộ phim hoạt hình trung quốc nào ?": "Kiếm Lai",
  "Triệu Ngọc Chân là nhân vật trong bộ hoạt hình trung quốc nào sau đây ?": "Thiếu Niên Bạch Mã Tuý Xuân Phong",
  "Trong bộ Đấu Phá Thương Khung, Tiêu Viêm tìm đến ai để cứu Dược Lão ?": "Phong Tôn Giả",
  "Trong bộ Tiên Nghịch, nhân vật chính Vương Lâm khi ở quê nhà còn có tên khác là gì ?": "Thiết Trụ",
  "Trong Đấu La Đại Lục, Đường Hạo là gì của Đường Tam?": "Cha",
  "Trong Già Thiên, thể chất Diệp Phàm là thể chất gì ?": "Hoang Cổ Thánh Thể",
  "Trong Phàm Nhân Tu Tiên ai bị luyện thành khôi lỗi Khúc Hồn ?": "Trương Thiết",
  "Trong phim Tiên Nghịch, Vương Lâm vô tình có được pháp bảo nghịch thiên nào ?": "Thiên Nghịch Châu",
  "Trong Tiên Nghịch, Vương Lâm nhận được truyền thừa gì ở Cổ Thần Chi Địa ?": "Ký Ức",
  "Trong Tru Tiên, Điền Bất Dịch là thủ tọa của Phong nào?": "Đại Trúc Phong",
  "Trong Vĩnh Sinh - Phương Hàn hẹn ước 10 năm cùng với ai ?": "Hoa Thiên Đô",
  "Trước khi đến Linh Khê Tông, Bạch Tiểu Thuần trong Nhất Niệm Vĩnh Hằng ở đâu ?": "Mạo Nhi Sơn Thôn",
  "Trương Tiểu Phàm trong phim Tru Tiên còn có tên gọi là ?": "Quỷ Lệ",
  "Trương Tiểu Phàm trong Tru Tiên từng được nhận vào môn phái nào?": "Thanh Vân Môn",
  "Tử Nghiên trong Đấu Phá Thương Khung thuộc chủng tộc nào ?": "Thái Hư Cổ Long",
  "Vân Triệt là tên nhân vật chính trong bộ phim hoạt hình trung quốc nào sau đây ?": "Nghịch Thiên Tà Thần",
  "Vũ Canh là nhân vật trong bộ hoạt hình trung quốc nào sau đây ?": "Vũ Canh Kỷ",
  "Vũ hồn của Chu Trúc Thanh là gì?": "U Minh Linh Miêu",
  "Vũ hồn của Đới Mộc Bạch là gì?": "Bạch Hổ",
  "Vũ hồn của Mã Hồng Tuấn là gì?": "Hỏa Phượng Hoàng",
  "Vũ hồn của Tiểu Vũ là gì?": "Nhu Cốt Thỏ",
  "Vũ hồn thứ hai của Đường Tam là gì?": "Hạo Thiên Chùy",
  "Vũ khí của Đàm Vân trong Nghịch Thiên Chí Tôn là gì ?": "Hồng Mông Thần Kiếm",
  "Vũ khí mà Tiêu Viêm trong Đấu Phá Thương Khung luôn mang bên mình có tên gọi là gì ?": "Huyền Trọng Xích",
  "Vương Lâm trong phim Tiên Nghịch dựa vào gì để vô địch cùng cảnh giới ?": "Cực Cảnh",
  "Y Lai Khắc Tư là một nhân vật trong bộ phim hoạt hình trung quốc nào sau đây ?": "Cả 1 và 2",
  "Ai là người thầy của Đường Tam?": "Đại Sư",
  "Thiên Hoả Tôn Giả trong Đấu Phá Thương Khung dùng thi thể của ai để hồi sinh ?": "Vân Sơn",
  "Ám tinh giới được xuất hiện trong bộ phim hoạt hình nào dưới đây ?": "Tinh Thần Biến",
  "Tỉnh Cửu là nhân vật chính trong bộ phim hoạt hình trung quốc nào sau đây ?": "Đại Đạo Triều Thiên",
  "Lý Tinh Vân là một nhân vật trong bộ phim hoạt hình trung quốc nào sau đây ?": "Họa Giang Hồ Chi Bất Lương Nhân",
  "Tần Mục là nhân vật chính trong bộ phim hoạt hình trung quốc nào sau đây ?": "Mục Thần Ký",
  "Tiêu Thần là nhân vật chính trong bộ phim hoạt hình Trung Quốc nào sau đây ?": "Trường Sinh Giới",
  "Tần Nam là nhân vật chính trong bộ phim hoạt hình trung quốc nào sau đây ?": "Tuyệt Thế Chiến Hồn",
  "Mục đích chính tu luyện của Tần Vũ trong Tinh Thần Biến là gì ?": "Vì muốn được cưới Khương Lập",
  "Khô Lâu Đà Chủ xuất hiện trong bộ phim hoạt hình nào dưới đây ?": "Võ Thần Chúa Tể",
  "Nhân vật chính trong Man Hoang Tiên Giới là ai ?": "Lục Hàng Chi",
  "Nhân vật chính trong Quân Tử Vô Tật là ai?": "Dao Cơ",
  "Nhân vật chính trong Đấu Chiến Thiên Hạ là ai?": "Đại Phong",
  "Nhân vật chính trong Ta Có Thể Giác Ngộ Vô Hạn là ai?": "Tiêu Vân",
  "Tại sao Hàn Lập khi gặp Phong Hi không chạy mà ở lại giúp đỡ chế tạo Phong Lôi Sí ?": "Vì đánh không lại.",
  "Tần Nam là nhân vật chính trong bộ hoạt hình trung quốc nào sau đây ?": "Tuyệt Thế Chiến Hồn"
};

function isValidHoatHinh3DPage(callback) {
  chrome.storage.sync.get(["hoathinh3dDomain"], (result) => {
    const savedDomain = result.hoathinh3dDomain;

    if (!savedDomain) {
      console.log("[HoatHinh3D] No domain configured. Please set a domain in the extension popup.");
      return;
    }

    const currentUrl = window.location.href;

    if (currentUrl.startsWith(savedDomain)) {
      console.log("[HoatHinh3D] Running on valid domain: " + savedDomain);
      callback();
    } else {
      console.log("[HoatHinh3D] Current URL (" + currentUrl + ") does not match saved domain (" + savedDomain + "). Skipping...");
    }
  });
}

function createAnswerOverlay() {
  let overlay = document.getElementById("answer-overlay");

  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "answer-overlay";
    overlay.style.position = "fixed";
    overlay.style.top = "60px";
    overlay.style.left = "10px";
    overlay.style.right = "10px";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    overlay.style.color = "#fff";
    overlay.style.padding = "10px";
    overlay.style.zIndex = "9999";
    overlay.style.borderRadius = "5px";
    overlay.style.fontFamily = "Arial, sans-serif";
    overlay.style.fontSize = "14px";
    overlay.style.maxHeight = "150px";
    overlay.style.overflowY = "auto";
    overlay.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.3)";
    document.body.appendChild(overlay);
  }

  return overlay;
}

function updateAnswerOverlay(question, answer, status) {
  const overlay = createAnswerOverlay();
  let content = `<strong>Câu hỏi:</strong> ${question}<br>`;

  if (answer) {
    content += `<strong>Đáp án:</strong> ${answer}<br>`;
  } else {
    content += "<strong>Đáp án:</strong> Không tìm thấy<br>";
  }

  content += `<strong>Trạng thái:</strong> ${status}`;
  overlay.innerHTML = content;
}

function createHoangVucOverlay() {
  let overlay = document.getElementById("hoang-vuc-overlay");

  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "hoang-vuc-overlay";
    overlay.style.position = "fixed";
    overlay.style.top = "60px";
    overlay.style.right = "10px";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    overlay.style.color = "#fff";
    overlay.style.padding = "15px";
    overlay.style.zIndex = "9999";
    overlay.style.borderRadius = "8px";
    overlay.style.fontFamily = "Arial, sans-serif";
    overlay.style.fontSize = "13px";
    overlay.style.minWidth = "250px";
    overlay.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.3)";
    overlay.style.border = "2px solid #4facfe";
    document.body.appendChild(overlay);
  }

  return overlay;
}

function updateHoangVucOverlay(content) {
  const overlay = createHoangVucOverlay();
  overlay.innerHTML = `
    <div style="text-align: center; margin-bottom: 10px;">
      <strong style="color: #4facfe;">⚔️ HOANG VỰC AUTO ⚔️</strong>
    </div>
    ${content}
  `;
}

function createKhoangMachOverlay() {
  let overlay = document.getElementById("khoang-mach-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "khoang-mach-overlay";
    overlay.style.position = "fixed";
    overlay.style.top = "60px";
    overlay.style.right = "10px";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    overlay.style.color = "#fff";
    overlay.style.padding = "15px";
    overlay.style.zIndex = "9999";
    overlay.style.borderRadius = "8px";
    overlay.style.fontFamily = "Arial, sans-serif";
    overlay.style.fontSize = "13px";
    overlay.style.minWidth = "280px";
    overlay.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.3)";
    overlay.style.border = "2px solid #ffd700";
    document.body.appendChild(overlay);
  }
  return overlay;
}

function updateKhoangMachOverlay(content) {
  const overlay = createKhoangMachOverlay();
  overlay.innerHTML = `
    <div style="text-align: center; margin-bottom: 10px;">
      <strong style="color: #ffd700;">⛏️ KHOÁNG MẠCH AUTO ⛏️</strong>
    </div>
    ${content}
  `;
}

function createPhucLoiOverlay() {
  let overlay = document.getElementById("phuc-loi-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "phuc-loi-overlay";
    overlay.style.position = "fixed";
    overlay.style.top = "60px";
    overlay.style.right = "10px";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    overlay.style.color = "#fff";
    overlay.style.padding = "15px";
    overlay.style.zIndex = "9999";
    overlay.style.borderRadius = "8px";
    overlay.style.fontFamily = "Arial, sans-serif";
    overlay.style.fontSize = "13px";
    overlay.style.minWidth = "280px";
    overlay.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.3)";
    overlay.style.border = "2px solid #ffd700";
    document.body.appendChild(overlay);
  }
  return overlay;
}

function updatePhucLoiOverlay(content) {
  const overlay = createPhucLoiOverlay();
  overlay.innerHTML = `
    <div style="text-align: center; margin-bottom: 10px;">
      <strong style="color: #ffd700;">⛏️ PHÚC LỢI AUTO ⛏️</strong>
    </div>
    ${content}
  `;
}

function checkDamageStatus() {
  const _0x1ee8fc = document.querySelector(".damage-info");
  if (!_0x1ee8fc) {
    return "unknown";
  }
  if (_0x1ee8fc.style.display === "none") {
    return "neutral";
  }
  if (_0x1ee8fc.querySelector(".increase-damage")) {
    return "buff";
  }
  if (_0x1ee8fc.querySelector(".decrease-damage")) {
    return "debuff";
  }
  return "unknown";
}
function getDamageStatusText(_0x37f898) {
  switch (_0x37f898) {
    case "buff":
      return "🔥 Tăng 15% Sát Thương";
    case "neutral":
      return "⚖️ Không Buff/Debuff";
    case "debuff":
      return "❄️ Giảm 15% Sát Thương";
    default:
      return "❓ Không Xác Định";
  }
}
async function resetElement() {
  return new Promise(_0x1a7675 => {
    const _0x57dd31 = document.querySelector("#change-element-button");
    if (!_0x57dd31) {
      console.log("[HoangVuc] Không tìm thấy nút reset linh căn");
      _0x1a7675(false);
      return;
    }
    updateHoangVucOverlay("<div>📊 Trạng thái: " + getDamageStatusText(checkDamageStatus()) + "</div><div style=\"margin-top: 8px;\">🔄 Đang reset linh căn...</div>");
    _0x57dd31.click();
    setTimeout(() => {
      const _0x4bbaa3 = document.querySelector(".swal2-confirm");
      if (_0x4bbaa3) {
        _0x4bbaa3.click();
        setTimeout(() => {
          _0x1a7675(true);
        }, 2000);
      } else {
        console.log("[HoangVuc] Không tìm thấy nút xác nhận");
        _0x1a7675(false);
      }
    }, 1000);
  });
}
function shouldReset(_0x3ce7bd, _0x415190) {
  switch (_0x3ce7bd) {
    case "none":
      return false;
    case "avoid":
      return _0x415190 === "debuff";
    case "buff":
      return _0x415190 !== "buff";
    default:
      return false;
  }
}
async function startBattle() {
  let battleInterval = setInterval(() => {
    const battleBtn = document.querySelector("#battle-button");
    const countdownTimer = document.querySelector("#countdown-timer");
    const remainingAttacks = document.querySelector(".remaining-attacks").innerText;

    const battleBtnDisplay = battleBtn.style.display === '' ? "block" : battleBtn.style.display;
    const countdownTimerDisplay = countdownTimer.style.display === '' ? "block" : countdownTimer.style.display;
    const doneBattles = remainingAttacks === "Lượt đánh còn lại: 0";

    if (battleBtnDisplay !== "none" && countdownTimerDisplay === "none" && !doneBattles) {
      updateHoangVucOverlay("<div>📊 Trạng thái: " + getDamageStatusText(checkDamageStatus()) + "</div><div style=\"margin-top: 8px;\">⚔️ Bắt đầu khiêu chiến...</div>");

      if (battleBtn) {
        battleBtn.click();
        clearInterval(battleInterval);

        setTimeout(() => {
          const attackBtn = document.querySelector(".attack-button");
          if (attackBtn) {
            attackBtn.click();
            setTimeout(() => {
              location.reload();
            }, 3000);
            updateHoangVucOverlay("<div>📊 Trạng thái: " + getDamageStatusText(checkDamageStatus()) + "</div><div style=\"margin-top: 8px;\">⚔️ Đã bắt đầu tấn công!</div><div style=\"margin-top: 5px; color: #4ade80;\">✅ Hoàn thành!</div>");
          }
        }, 2000);
      }
    }

    if (doneBattles) {
      clearInterval(battleInterval);
    }
  }, 5000);
}
function getStrategyText(_0x42d9e1) {
  switch (_0x42d9e1) {
    case "none":
      return "🚫 Không Reset";
    case "avoid":
      return "🛡️ Tránh Debuff";
    case "buff":
      return "⚡ Tìm Buff";
    default:
      return "❓ Không Xác Định";
  }
}
async function hoangVuc() {
  await sleep(1000);
  chrome.storage.sync.get(["hoangVucStrategy"], async _0x46d943 => {
    const _0x21e099 = _0x46d943.hoangVucStrategy;
    if (!_0x21e099 || !["none", "avoid", "buff"].includes(_0x21e099)) {
      updateHoangVucOverlay("<div>🎯 Chưa chọn chiến thuật</div><div style=\"margin-top: 8px;\">📋 Vui lòng chọn chiến thuật từ popup extension</div>");
      return;
    }
    let _0x1ac507 = 0;
    const _0x4b4b97 = 20;
    updateHoangVucOverlay("<div>🎯 Chiến thuật: " + getStrategyText(_0x21e099) + "</div><div style=\"margin-top: 8px;\">📊 Đang kiểm tra trạng thái...</div>");
    while (_0x1ac507 < _0x4b4b97) {
      const _0x579921 = checkDamageStatus();
      updateHoangVucOverlay("<div>🎯 Chiến thuật: " + getStrategyText(_0x21e099) + "</div><div style=\"margin-top: 8px;\">📊 Trạng thái: " + getDamageStatusText(_0x579921) + "</div><div style=\"margin-top: 5px;\">🔄 Lần reset: " + _0x1ac507 + "</div>");
      if (!shouldReset(_0x21e099, _0x579921)) {
        updateHoangVucOverlay("<div>🎯 Chiến thuật: " + getStrategyText(_0x21e099) + "</div><div style=\"margin-top: 8px;\">📊 Trạng thái: " + getDamageStatusText(_0x579921) + "</div><div style=\"margin-top: 5px; color: #4ade80;\">✅ Đã đạt yêu cầu!</div>");
        break;
      }
      const _0x20985b = await resetElement();
      if (!_0x20985b) {
        updateHoangVucOverlay("<div>🎯 Chiến thuật: " + getStrategyText(_0x21e099) + "</div><div style=\"margin-top: 8px;\">❌ Reset thất bại!</div>");
        break;
      }
      _0x1ac507++;
      await sleep(3000);
    }
    if (_0x1ac507 >= _0x4b4b97) {
      updateHoangVucOverlay("<div>🎯 Chiến thuật: " + getStrategyText(_0x21e099) + "</div><div style=\"margin-top: 8px;\">⚠️ Đã đạt giới hạn reset!</div><div style=\"margin-top: 5px;\">📊 Trạng thái: " + getDamageStatusText(checkDamageStatus()) + "</div>");
    }

    const remainingAttacks = document.querySelector(".remaining-attacks").innerText;
    const doneBattles = remainingAttacks === "Lượt đánh còn lại: 0";
    if (doneBattles) {
      updateHoangVucOverlay("<div>📊 Trạng thái: " + getDamageStatusText(checkDamageStatus()) + "</div><div style=\"margin-top: 8px;\">✅ Đã hoàn thành tất cả lượt đánh!</div>");
    } else {
      setTimeout(() => {
        startBattle();
      }, 2000);
    }
  });
}

async function khoangMach() {
  console.log("[KhoangMach] 🚀 Bắt đầu chức năng Khoáng Mạch");
  await sleep(1000);

  const minesUpper = [51, 52, 53, 54, 55, 56, 64, 73];
  const minesMid = [39, 100001, 70, 32, 47, 35, 59, 100000, 67, 66, 44, 31, 46, 50, 42, 68, 37, 100002, 43, 74, 75, 65, 49, 100004, 72, 48, 33, 40, 100007, 38, 36, 58, 34, 100005, 60, 57, 45, 41, 71, 62, 100006, 69, 100003, 61];

  console.log("[KhoangMach] 📋 Danh sách mỏ Thượng:", minesUpper);
  console.log("[KhoangMach] 📋 Danh sách mỏ Trung:", minesMid);

  chrome.storage.sync.get(["khoangMachSelectedId"], async (result) => {
    const selectedId = result.khoangMachSelectedId;
    console.log("[KhoangMach] 🎯 ID mỏ đã chọn:", selectedId);

    if (!selectedId) {
      console.log("[KhoangMach] ❌ Chưa chọn ID mỏ");
      updateKhoangMachOverlay(`
        <div>🎯 Chưa chọn ID mỏ</div>
        <div style="margin-top: 8px;">📋 Vui lòng chọn ID mỏ từ popup extension</div>
      `);
      return;
    }

    const mineIdNumber = parseInt(selectedId);
    console.log("[KhoangMach] 🔢 ID mỏ dạng số:", mineIdNumber);

    let mineType = "";
    let mineTypeName = "";

    if (minesUpper.includes(mineIdNumber)) {
      mineType = "gold";
      mineTypeName = "Thượng";
      console.log("[KhoangMach] ✅ Xác định loại mỏ: THƯỢNG");
    } else if (minesMid.includes(mineIdNumber)) {
      mineType = "silver";
      mineTypeName = "Trung";
      console.log("[KhoangMach] ✅ Xác định loại mỏ: TRUNG");
    } else {
      console.log("[KhoangMach] ❌ ID mỏ không hợp lệ:", selectedId);
      updateKhoangMachOverlay(`
        <div>❌ ID mỏ không hợp lệ: ${selectedId}</div>
        <div style="margin-top: 8px;">📋 Vui lòng chọn ID mỏ hợp lệ từ popup extension</div>
      `);
      return;
    }

    console.log("[KhoangMach] 📊 Thông tin mỏ:");
    console.log("  - ID:", selectedId);
    console.log("  - Loại:", mineTypeName);
    console.log("  - Data-mine-type:", mineType);

    updateKhoangMachOverlay(`
      <div>⛏️ Loại mỏ: ${mineTypeName}</div>
      <div>🎯 ID mỏ: ${selectedId}</div>
      <div style="margin-top: 8px;">📋 Đang tải trang...</div>
    `);

    console.log("[KhoangMach] 🌐 URL hiện tại:", window.location.href);
    console.log("[KhoangMach] 📄 Document ready state:", document.readyState);

    setTimeout(() => {
      console.log("[KhoangMach] 🔍 Bắt đầu tìm nút loại mỏ...");

      const buttonSelectors = [
        `button.mine-type-button[data-mine-type="${mineType}"]`,
        `button[data-mine-type="${mineType}"]`,
        `.mine-type-button[data-mine-type="${mineType}"]`,
        `[data-mine-type="${mineType}"]`
      ];

      let mineTypeButton = null;

      for (const selector of buttonSelectors) {
        console.log("[KhoangMach] 🔍 Thử selector:", selector);
        mineTypeButton = document.querySelector(selector);
        if (mineTypeButton) {
          console.log("[KhoangMach] ✅ Tìm thấy nút với selector:", selector);
          break;
        } else {
          console.log("[KhoangMach] ❌ Không tìm thấy với selector:", selector);
        }
      }

      const allMineButtons = document.querySelectorAll("button.mine-type-button, .mine-type-button, [class*='mine-type'], [class*='mine'], [data-mine-type]");
      console.log("[KhoangMach] 📋 Tìm thấy " + allMineButtons.length + " nút có liên quan đến mine:");
      allMineButtons.forEach((button, index) => {
        console.log(`${index + 1}. Classes: "${button.className}", Data-type: "${button.getAttribute("data-mine-type")}", ID: "${button.id}", Text: "${button.textContent.trim()}"`);
      });

      const allButtons = document.querySelectorAll("button");
      console.log("[KhoangMach] 🔘 Tổng số button trên trang: " + allButtons.length);
      allButtons.forEach((button, index) => {
        if (button.textContent.includes("Thượng") || button.textContent.includes("Trung") || button.textContent.includes("gold") || button.textContent.includes("silver")) {
          console.log(`Button ${index + 1}: "${button.textContent.trim()}" - Classes: "${button.className}" - Data: ${JSON.stringify(button.dataset)}`);
        }
      });

      if (mineTypeButton) {
        console.log("[KhoangMach] ✅ Tìm thấy nút loại mỏ:", mineTypeButton);
        console.log("[KhoangMach] 📊 Thông tin nút:");
        console.log("  - Tag:", mineTypeButton.tagName);
        console.log("  - Classes:", mineTypeButton.className);
        console.log("  - ID:", mineTypeButton.id);
        console.log("  - Text:", mineTypeButton.textContent.trim());
        console.log("  - Data-mine-type:", mineTypeButton.getAttribute("data-mine-type"));
        console.log("  - Disabled:", mineTypeButton.disabled);
        console.log("  - Style display:", mineTypeButton.style.display);
        console.log("  - Offset width:", mineTypeButton.offsetWidth);
        console.log("  - Offset height:", mineTypeButton.offsetHeight);
        console.log("[KhoangMach] 🖱️ Chuẩn bị nhấn nút loại mỏ...");

        try {
          mineTypeButton.click();
          console.log("[KhoangMach] ✅ Đã nhấn nút loại mỏ " + mineTypeName + " thành công!");
          updateKhoangMachOverlay(`
            <div>⛏️ Loại mỏ: ${mineTypeName}</div>
            <div>🎯 ID mỏ: ${selectedId}</div>
            <div style="margin-top: 8px;">✅ Đã chọn loại mỏ</div>
            <div style="margin-top: 5px;">📋 Đang tải danh sách mỏ...</div>
          `);

          setTimeout(() => {
            console.log("[KhoangMach] ⏰ Bắt đầu tìm mỏ sau khi chờ 4 giây...");
            startAutoMiningById(selectedId, mineTypeName);
          }, 4000);
        } catch (error) {
          console.error("[KhoangMach] ❌ Lỗi khi nhấn nút loại mỏ:", error);
          updateKhoangMachOverlay(`
            <div>⛏️ Loại mỏ: ${mineTypeName}</div>
            <div>🎯 ID mỏ: ${selectedId}</div>
            <div style="margin-top: 8px; color: #f56565;">❌ Lỗi khi nhấn nút loại mỏ!</div>
          `);
        }
      } else {
        console.log("[KhoangMach] ❌ Không tìm thấy nút loại mỏ nào!");
        updateKhoangMachOverlay(`
          <div>⛏️ Loại mỏ: ${mineTypeName}</div>
          <div>🎯 ID mỏ: ${selectedId}</div>
          <div style="margin-top: 8px; color: #f56565;">❌ Không tìm thấy nút loại mỏ!</div>
        `);
      }
    }, 2000);
  });
}

let isEntering = false;

function startAutoMiningById(mineId, mineTypeName) {
  console.log("[KhoangMach] 🎯 Bắt đầu tìm mỏ ID:", mineId);
  let attemptCount = 0;

  updateKhoangMachOverlay(`
    <div>⛏️ Loại mỏ: ${mineTypeName}</div>
    <div>🎯 ID mỏ: ${mineId}</div>
    <div style="margin-top: 8px;">🔄 Đang thử vào mỏ...</div>
    <div>📊 Lần thử: ${attemptCount}</div>
  `);

  const attemptEnterMine = () => {
    if (isEntering) {
      console.log("[KhoangMach] ⏸️ Đang xử lý, bỏ qua lần thử này");
      return;
    }

    // Check if already in mine
    let leaveMineButton = document.querySelector(`button.leave-mine[data-mine-id="${mineId}"]`) ||
      document.querySelector(`[data-mine-id="${mineId}"] button.leave-mine`);

    if (leaveMineButton) {
      console.log("[KhoangMach] 🛑 Phát hiện đã ở trong mỏ, dừng spam interval");
      if (window.khoangMachSpamInterval) {
        clearInterval(window.khoangMachSpamInterval);
        window.khoangMachSpamInterval = null;
      }
      return;
    }

    attemptCount++;
    console.log(`[KhoangMach] 🔄 === LẦN THỬ ${attemptCount} ===`);
    console.log(`[KhoangMach] 🎯 Tìm mỏ ID: ${mineId}`);

    updateKhoangMachOverlay(`
      <div>⛏️ Loại mỏ: ${mineTypeName}</div>
      <div>🎯 ID mỏ: ${mineId}</div>
      <div style="margin-top: 8px;">🔄 Đang thử vào mỏ...</div>
      <div>📊 Lần thử: ${attemptCount}</div>
    `);

    // Log all elements with data-mine-id
    console.log("[KhoangMach] 🔍 Kiểm tra DOM hiện tại...");
    const allMineElements = document.querySelectorAll("[data-mine-id]");
    console.log(`[KhoangMach] 📋 Tìm thấy ${allMineElements.length} element có data-mine-id:`);
    allMineElements.forEach((element, index) => {
      const id = element.getAttribute("data-mine-id");
      const tag = element.tagName;
      const classes = element.className;
      const text = element.textContent.trim().substring(0, 50);
      console.log(`  ${index + 1}. ID: ${id}, Tag: ${tag}, Classes: "${classes}", Text: "${text}..."`);
    });

    // Find mine element
    const mineElement = document.querySelector(`[data-mine-id="${mineId}"]`);
    console.log(`[KhoangMach] 🔍 Tìm element mỏ với ID ${mineId}:`, mineElement);

    if (mineElement) {
      console.log("[KhoangMach] ✅ Tìm thấy element mỏ!");
      console.log("  - Tag:", mineElement.tagName);
      console.log("  - Classes:", mineElement.className);
      console.log("  - Text:", mineElement.textContent.trim());

      // Check if mine is in peace mode
      const isPeaceMode = mineElement.querySelector(".peace-icon") !== null;
      const mineName = mineElement.querySelector(".mine-name")?.textContent.trim() || `Mỏ ${mineId}`;

      console.log(`[KhoangMach] 🕊️ Kiểm tra hòa bình: ${isPeaceMode}`);
      console.log(`[KhoangMach] 📛 Tên mỏ: "${mineName}"`);

      if (isPeaceMode) {
        console.log("[KhoangMach] ❌ Mỏ đã bị hòa bình, dừng auto mining");
        updateKhoangMachOverlay(`
          <div>⛏️ Loại mỏ: ${mineTypeName}</div>
          <div>🎯 ID mỏ: ${mineId}</div>
          <div style="margin-top: 8px; color: #f56565;">🕊️ Mỏ "${mineName}" đã bị hòa bình!</div>
          <div style="margin-top: 5px; font-size: 11px;">Vui lòng chọn mỏ khác từ popup extension</div>
        `);
        if (window.khoangMachSpamInterval) {
          clearInterval(window.khoangMachSpamInterval);
        }
        return;
      }
    } else {
      console.log("[KhoangMach] ❌ Không tìm thấy element mỏ");
    }

    // Double check if already in mine
    console.log("[KhoangMach] 🔍 Kiểm tra trạng thái hiện tại...");
    leaveMineButton = document.querySelector(`button.leave-mine[data-mine-id="${mineId}"]`) ||
      document.querySelector(`[data-mine-id="${mineId}"] button.leave-mine`) ||
      document.querySelector(`[data-mine-id="${mineId}"] .leave-mine`);

    if (leaveMineButton) {
      console.log("[KhoangMach] ✅ Đã ở trong mỏ (tìm thấy nút rời mỏ), dừng auto mining");
      const mineName = document.querySelector(`[data-mine-id="${mineId}"] .mine-name`)?.textContent.trim() || `Mỏ ${mineId}`;
      updateKhoangMachOverlay(`
        <div>⛏️ Loại mỏ: ${mineTypeName}</div>
        <div>🎯 ID mỏ: ${mineId}</div>
        <div style="margin-top: 8px; color: #4ade80;">✅ Đã ở trong mỏ "${mineName}"!</div>
        <div style="margin-top: 5px; font-size: 11px;">🎉 Auto mining hoàn thành!</div>
      `);
      if (window.khoangMachSpamInterval) {
        clearInterval(window.khoangMachSpamInterval);
        window.khoangMachSpamInterval = null;
      }
      isEntering = false;
      return;
    }

    // Find enter mine button
    console.log("[KhoangMach] 🔍 Tìm nút vào mỏ...");
    const enterButtonSelectors = [
      `button.enter-mine[data-mine-id="${mineId}"]`,
      `button[data-mine-id="${mineId}"]`,
      `.enter-mine[data-mine-id="${mineId}"]`,
      `[data-mine-id="${mineId}"] button.enter-mine`,
      `[data-mine-id="${mineId}"] button`,
      `[data-mine-id="${mineId}"] .enter-mine`
    ];

    let enterButton = null;
    let matchedSelector = "";

    for (const selector of enterButtonSelectors) {
      console.log("[KhoangMach] 🔍 Thử selector nút vào:", selector);
      enterButton = document.querySelector(selector);
      if (enterButton) {
        matchedSelector = selector;
        console.log("[KhoangMach] ✅ Tìm thấy nút vào với selector:", selector);
        break;
      } else {
        console.log("[KhoangMach] ❌ Không tìm thấy với selector:", selector);
      }
    }

    // Log all potential enter buttons
    const allEnterButtons = document.querySelectorAll("button.enter-mine, .enter-mine, [class*='enter'], button[data-mine-id]");
    console.log(`[KhoangMach] 📋 Tìm thấy ${allEnterButtons.length} nút có liên quan đến enter:`);
    allEnterButtons.forEach((button, index) => {
      const classes = button.className;
      const dataId = button.getAttribute("data-mine-id");
      const text = button.textContent.trim();
      console.log(`  ${index + 1}. Classes: "${classes}", Data-ID: "${dataId}", Text: "${text}"`);
    });

    if (enterButton) {
      console.log("[KhoangMach] ✅ Tìm thấy nút vào mỏ!");
      console.log("  - Tag:", enterButton.tagName);
      console.log("  - Classes:", enterButton.className);
      console.log("  - Text:", enterButton.textContent.trim());
      console.log("  - Data-mine-id:", enterButton.getAttribute("data-mine-id"));
      console.log("  - Disabled:", enterButton.disabled);
      console.log("  - Style display:", enterButton.style.display);

      isEntering = true;
      console.log(`[KhoangMach] 🖱️ Nhấn nút vào mỏ ID: ${mineId}`);

      try {
        enterButton.click();
        console.log("[KhoangMach] ✅ Đã nhấn nút vào mỏ thành công!");

        setTimeout(() => {
          console.log("[KhoangMach] 🔍 Tìm popup xác nhận...");
          const confirmSelectors = [
            ".swal2-confirm.swal2-styled",
            ".swal2-confirm",
            "button.swal2-confirm",
            "[class*='swal2-confirm']",
            "button[class*='confirm']"
          ];

          let confirmButton = null;
          for (const selector of confirmSelectors) {
            console.log("[KhoangMach] 🔍 Thử selector confirm:", selector);
            confirmButton = document.querySelector(selector);
            if (confirmButton) {
              console.log("[KhoangMach] ✅ Tìm thấy nút confirm với selector:", selector);
              break;
            }
          }

          console.log("[KhoangMach] 🔍 Nút xác nhận:", confirmButton);

          if (confirmButton) {
            const buttonText = confirmButton.textContent.trim();
            console.log(`[KhoangMach] 📝 Text nút xác nhận: "${buttonText}"`);

            if (buttonText.includes("Có") || buttonText.includes("vào") ||
              buttonText.includes("OK") || buttonText.includes("Xác nhận")) {
              console.log("[KhoangMach] 🖱️ Nhấn nút xác nhận");
              confirmButton.click();
              console.log("[KhoangMach] ✅ Đã nhấn nút xác nhận!");

              setTimeout(() => {
                console.log("[KhoangMach] 🔍 Kiểm tra kết quả...");
                checkMiningResult(mineId, mineTypeName);
              }, 3000);
            } else {
              console.log("[KhoangMach] ❌ Text nút xác nhận không đúng");
              isEntering = false;
            }
          } else {
            console.log("[KhoangMach] ❌ Không tìm thấy nút xác nhận");

            // Log all potential confirm buttons
            const allButtons = document.querySelectorAll("button, [role='button']");
            console.log("[KhoangMach] 📋 Tất cả button có thể là confirm:");
            allButtons.forEach((button, index) => {
              const text = button.textContent.trim();
              const classes = button.className;
              if (text.includes("Có") || text.includes("vào") ||
                text.includes("OK") || text.includes("Xác nhận") ||
                classes.includes("confirm")) {
                console.log(`  ${index + 1}. Text: "${text}", Classes: "${classes}"`);
              }
            });

            isEntering = false;
          }
        }, 2000);
      } catch (error) {
        console.error("[KhoangMach] ❌ Lỗi khi nhấn nút vào mỏ:", error);
        isEntering = false;
      }
    } else {
      console.log(`[KhoangMach] ❌ Không tìm thấy nút vào mỏ ID: ${mineId}`);
    }
  };

  // Start first attempt after 2 seconds
  setTimeout(() => {
    console.log("[KhoangMach] ⏰ Bắt đầu thử vào mỏ sau 2 giây...");
    attemptEnterMine();
  }, 2000);

  // Set up spam interval
  const spamInterval = setInterval(() => {
    if (!isEntering) {
      console.log("[KhoangMach] 🔄 Spam interval - thử lại...");
      attemptEnterMine();
    } else {
      console.log("[KhoangMach] ⏸️ Spam interval - đang xử lý, bỏ qua...");
    }
  }, 8000);

  window.khoangMachSpamInterval = spamInterval;
  console.log("[KhoangMach] ✅ Đã thiết lập spam interval");
}

function checkMiningResult(mineId, mineTypeName) {
  console.log(`[KhoangMach] Kiểm tra kết quả vào mỏ ID: ${mineId}`);

  setTimeout(() => {
    const successNotification = document.querySelector(".notifications .toast.success span");
    console.log("[KhoangMach] Thông báo thành công:", successNotification?.textContent);

    if (successNotification && successNotification.textContent.includes("Đã di chuyển sang khoáng mạch")) {
      const mineName = successNotification.textContent.match(/"([^"]+)"/)?.[1] || `Mỏ ${mineId}`;
      updateKhoangMachOverlay(`
        <div>⛏️ Loại mỏ: ${mineTypeName}</div>
        <div>🎯 ID mỏ: ${mineId}</div>
        <div style="margin-top: 8px; color: #4ade80;">✅ Đã vào mỏ "${mineName}" thành công!</div>
      `);

      if (window.khoangMachSpamInterval) {
        clearInterval(window.khoangMachSpamInterval);
        window.khoangMachSpamInterval = null;
      }
      isEntering = false;
      return;
    }

    setTimeout(() => {
      const leaveMineButton = document.querySelector(`button.leave-mine[data-mine-id="${mineId}"]`) ||
        document.querySelector(`[data-mine-id="${mineId}"] button.leave-mine`) ||
        document.querySelector(`[data-mine-id="${mineId}"] .leave-mine`);

      if (leaveMineButton) {
        console.log("[KhoangMach] ✅ Phát hiện nút rời mỏ - xác nhận đã vào mỏ thành công!");
        const mineName = document.querySelector(`[data-mine-id="${mineId}"] .mine-name`)?.textContent.trim() || `Mỏ ${mineId}`;
        updateKhoangMachOverlay(`
          <div>⛏️ Loại mỏ: ${mineTypeName}</div>
          <div>🎯 ID mỏ: ${mineId}</div>
          <div style="margin-top: 8px; color: #4ade80;">✅ Đã vào mỏ "${mineName}" thành công!</div>
          <div style="margin-top: 5px; font-size: 11px;">🎉 Auto mining hoàn thành!</div>
        `);

        if (window.khoangMachSpamInterval) {
          clearInterval(window.khoangMachSpamInterval);
          window.khoangMachSpamInterval = null;
        }
        isEntering = false;
        return;
      }
    }, 1000);

    const errorNotification = document.querySelector(".notifications .toast.error span");
    console.log("[KhoangMach] Thông báo lỗi:", errorNotification?.textContent);

    if (errorNotification) {
      if (errorNotification.textContent.includes("Khoáng Mạch đã đầy")) {
        updateKhoangMachOverlay(`
          <div>⛏️ Loại mỏ: ${mineTypeName}</div>
          <div>🎯 ID mỏ: ${mineId}</div>
          <div style="margin-top: 8px; color: #fbbf24;">⚠️ Mỏ đầy, đang thử lại...</div>
        `);
        isEntering = false;
        return;
      }

      if (errorNotification.textContent.includes("Phiên đã hết hạn")) {
        updateKhoangMachOverlay(`
          <div>⛏️ Loại mỏ: ${mineTypeName}</div>
          <div>🎯 ID mỏ: ${mineId}</div>
          <div style="margin-top: 8px; color: #f56565;">🔄 Phiên hết hạn, đang reload...</div>
        `);

        if (window.khoangMachSpamInterval) {
          clearInterval(window.khoangMachSpamInterval);
        }

        setTimeout(() => {
          location.reload();
        }, 2000);
        return;
      }
    }

    console.log("[KhoangMach] Không có thông báo rõ ràng, tiếp tục thử");
    isEntering = false;
  }, 2000);
}

isValidHoatHinh3DPage(() => {
  function _0x45aef8() {
    const _0x40c918 = window.location.href;
    if (!_0x40c918.includes("/phong-cuoi")) {
      console.log("[MuteAllAudio] Not muting audio - URL does not contain /phong-cuoi");
      return;
    }
    console.log("[MuteAllAudio] Muting audio on /phong-cuoi page...");
    const _0x5ee41c = () => {
      document.querySelectorAll("audio, video").forEach(_0x172126 => {
        _0x172126.muted = true;
        _0x172126.volume = 0;
      });
      const _0x3c44d8 = window.Audio && window.Audio.prototype;
      if (_0x3c44d8 && !_0x3c44d8._play) {
        _0x3c44d8._play = _0x3c44d8.play;
        _0x3c44d8.play = function () {
          this.muted = true;
          this.volume = 0;
          return this._play.call(this);
        };
      }
    };
    _0x5ee41c();
    setInterval(_0x5ee41c, 1000);
  }

  async function vanDapTongMon() {
    let retryTimeout = null;

    const startQuizButton = $("#start-quiz-button");

    if (startQuizButton) {
      updateAnswerOverlay(null, null, "Nút bắt đầu đã có sẵn, sẽ nhấn ngay bây giờ...");
      startQuizButton.click();
      await processQuestion();
    }

    async function processQuestion() {
      if (retryTimeout) {
        clearTimeout(retryTimeout);
      }

      await sleep(3000);

      const questionElement = $("#question");
      const questionText = questionElement.textContent.trim();

      if (!questionText) {
        updateAnswerOverlay(questionText, null, "Câu hỏi trống, thử lại...");
        return;
      }

      const correctAnswer = QUESTION_ANSWERS[questionText];
      if (!correctAnswer) {
        updateAnswerOverlay(questionText, null, "Không tìm thấy câu trả lời trong dữ liệu, thử lại...");
        return;
      }

      updateAnswerOverlay(questionText, correctAnswer, "Đang tìm tùy chọn...");
      const options = $$(".options .option");
      let answered = false;

      options.forEach((option) => {
        if (option.textContent.trim() === correctAnswer) {
          option.click();
          answered = true;
          updateAnswerOverlay(questionText, correctAnswer, "Đã chọn tùy chọn khớp chính xác");
        }
      });

      if (!answered) {
        updateAnswerOverlay(questionText, correctAnswer, "Không tìm thấy tùy chọn khớp chính xác, thử lại...");
        return;
      }

      processQuestion();
    }
  }

  // ======== Điểm danh ========
  async function diemDanh() {
    waitForElement("#checkInButton", async (checkInButton) => {
      console.log("Đã nhấn nút Điểm Danh!");
      checkInButton.click();

      await sleep(1000);

      chrome.runtime.sendMessage({
        type: "WORKFLOW_STEP_DONE",
        domain: "https://hoathinh3d.gg/"
      }, (resp) => {
        if (chrome.runtime.lastError) {
          console.error('Error:', chrome.runtime.lastError);
          $(".status-container #run-status").textContent = "Lỗi khi cập nhật bước workflow";
        } else {
          console.log('Workflow step done:', resp);
          $(".status-container #run-status").textContent = "Hoàn thành " + resp.stepName;
        }
      });
    });
  }

  // ======= Phúc Lợi Đường ========
  function phucLoiDuong() {
    let chestTimeout = null;

    updatePhucLoiOverlay("🔍 Đang kiểm tra rương...");

    // ** Logic tự động mở rương tuần tự **
    // -- Kiểm tra còn rương nào chưa mở không
    // ---- Nếu có, kiểm tra thời gian mở rương tiếp theo.
    // ------ Nếu chưa đến, dừng và chờ đến thời gian đó.
    // ------ Nếu đã đến hoặc quá thời gian đó,
    //        mở rương đầu tiên và cập nhật thời gian mở rương tiếp theo.
    // ---- Nếu không còn rương nào chưa mở, dừng.
    function autoOpenChestsSequentially() {
      clearTimeout(chestTimeout);

      const chests = document.querySelectorAll(".chest-box");
      const unopenedChests = Array.from(chests).filter(chest => chest.classList.contains("shake") || !chest.classList.contains("opened"));

      if (unopenedChests.length === 0) {
        console.log("Tất cả rương đã được mở.");
        updatePhucLoiOverlay("📦 Tất cả rương đã được mở.");
        return;
      }

      chrome.storage.sync.get(["nextChestOpenTime"], (result) => {
        const currentTime = Date.now();


        if (!result.nextChestOpenTime || currentTime >= result.nextChestOpenTime) {
          const chestToOpen = unopenedChests[0];
          chestToOpen.click();

          setTimeout(() => {
            const unopenedChestsNew = Array.from(chests).filter(chest => chest.classList.contains("shake") || !chest.classList.contains("opened"));

            if (unopenedChestsNew.length === 0) {
              console.log("Tất cả rương đã được mở.");
              updatePhucLoiOverlay("📦 Tất cả rương đã được mở.");
              return;
            }

            if (unopenedChestsNew.length >= unopenedChests.length) {
              console.log("Không thể mở rương, có thể do rương chưa sẵn sàng. Sẽ thử lại sau 15 giây.");
              chestTimeout = setTimeout(autoOpenChestsSequentially, 15 * 1000);
              return;
            }

            // Cập nhật thời gian mở rương tiếp theo (30 phút sau)
            const nextOpenTime = currentTime + 30 * 60 * 1000 + 1000;
            chrome.storage.sync.set({ nextChestOpenTime: nextOpenTime }, () => {
              console.log("Cập nhật thời gian mở rương tiếp theo:", new Date(nextOpenTime).toLocaleTimeString());
              updatePhucLoiOverlay(`
                <div>📦 Còn ${unopenedChestsNew.length} rương chưa mở.</div>
                <div>⏰ Thời gian mở rương tiếp theo: ${new Date(nextOpenTime).toLocaleTimeString()}</div>
              `);
              chestTimeout = setTimeout(autoOpenChestsSequentially, 30 * 60 * 1000 + 1000); // Đặt timeout để mở rương tiếp theo sau 30 phút
            });
          }, 1000);
        } else {
          const waitTime = Math.ceil((result.nextChestOpenTime - currentTime) / 1000);
          console.log(`Chưa đến thời gian mở rương tiếp theo. Vui lòng chờ ${waitTime + 1} giây.`);
          updatePhucLoiOverlay(`
            <div>📦 Còn ${unopenedChests.length} rương chưa mở.</div>
            <div>⏰ Thời gian mở rương tiếp theo: ${new Date(result.nextChestOpenTime).toLocaleTimeString()}</div>
          `);
          chestTimeout = setTimeout(autoOpenChestsSequentially, waitTime * 1000 + 1000);
          return;
        }
      });
    }

    waitForElement(".chest-progress-container", () => {
      autoOpenChestsSequentially();
    }, 3000);
  }

  function _0x3063d0() {
    function _0x2099f5() {
      const _0x2d37ed = document.querySelector("#chestImage");
      if (_0x2d37ed && _0x2d37ed.classList.contains("chest-close")) {
        console.log("Thí Luyện: Nhấn mở rương...");
        _0x2d37ed.click();
      } else {
        console.log("Thí Luyện: Rương chưa sẵn sàng hoặc đã mở.");
      }
      setTimeout(_0x2099f5, 15000);
    }
    waitForElement("#chestImage", () => {
      _0x2099f5();
    });
  }

  async function _0x5047ed() {
    await sleep(1000);
    await _0x4194f0();
    const _0x4ba539 = Array.from(document.querySelectorAll(".stone-item"));
    const _0xf25d8a = _0x4ba539.map(_0x41eb8e => {
      const _0x5f5430 = _0x41eb8e.querySelector(".reward-multiplier span")?.textContent.trim() || "";
      const _0x55383d = Number.parseInt(_0x5f5430.replace("x", "")) || 0;
      const _0x59a2b1 = _0x41eb8e.querySelector(".select-stone-button");
      return {
        multiplier: _0x55383d,
        button: _0x59a2b1
      };
    });
    const _0x4818dd = _0xf25d8a.sort((_0x1947cd, _0x35fa9e) => _0x35fa9e.multiplier - _0x1947cd.multiplier);
    const _0x4fb7cc = _0x4818dd.slice(0, 2);
    for (const _0x5a3434 of _0x4fb7cc) {
      if (!_0x5a3434.button) {
        continue;
      }
      _0x5a3434.button.click();
      await sleep(500);
      const _0x21f30c = document.querySelector("#bet-amount");
      const _0x3caad4 = document.querySelector("#confirm-bet");
      if (_0x21f30c && _0x3caad4) {
        _0x21f30c.value = "20";
        _0x21f30c.dispatchEvent(new Event("input", {
          bubbles: true
        }));
        await sleep(300);
        _0x3caad4.click();
        await sleep(1000);
      }
    }
    async function _0x4194f0() {
      const _0xf31ec1 = document.querySelector("#claim-reward-button.claim-reward-button");
      if (_0xf31ec1) {
        _0xf31ec1.click();
        await sleep(1000);
      }
    }
  }

  async function _0x19bde5() {
    const _0xcbadf9 = setInterval(async () => {
      const _0x32e672 = document.querySelector(".blessing-section");
      if (_0x32e672 && _0x32e672.innerText.includes("Đạo hạo hết Đạo đã gửi lần chúc phúc cho cấp Đội ngày")) {
        console.log("Đã gửi chúc phúc thành công! Ngừng script.");
        clearInterval(_0xcbadf9);
        return;
      }
      const _0x56d6ff = document.querySelector("#blessing-default-options");
      const _0x51ff62 = document.querySelector(".blessing-button");
      if (!_0x56d6ff || !_0x51ff62) {
        console.log("Không tìm thấy phần thiên chúc phúc!");
        return;
      }
      if (_0x56d6ff.selectedIndex <= 0) {
        const _0x45b469 = _0x56d6ff.options.length;
        const _0x15249b = Math.floor(Math.random() * (_0x45b469 - 1)) + 1;
        _0x56d6ff.selectedIndex = _0x15249b;
        _0x56d6ff.dispatchEvent(new Event("change", {
          bubbles: true
        }));
        console.log("Đã chọn lần chúc:", _0x56d6ff.options[_0x15249b].textContent.trim());
      }
      _0x51ff62.click();
      console.log("Nhấn \"Gửi Chúc Phúc\"...");
      await sleep(500);
      const _0x2cc4d2 = document.querySelector(".custom-modal-button.confirm");
      if (_0x2cc4d2) {
        _0x2cc4d2.click();
        console.log("Đã xác nhận thành công!");
      } else {
        console.log("Chưa hiện nút xác nhận (có thể do chưa qua captcha).");
      }
    }, 1500);
  }

  function bangHoatDongNgay() {
    waitForElement(".reward-box", () => {
      const rewardBoxes = document.querySelectorAll(".reward-box");

      if (!rewardBoxes.length) {
        console.log("[AutoClaimRewards] Không tìm thấy rương phần thưởng.");
        return;
      }

      console.log(`[AutoClaimRewards] Tìm thấy ${rewardBoxes.length} rương phần thưởng.`);

      let claimedCount = 0;
      const MAX_CLAIMS = 2;

      rewardBoxes.forEach((box, index) => {
        const boxId = box.getAttribute("id") || `box-${index}`;
        const isUnlocked = box.classList.contains("unlocked");
        const isClaimed = box.classList.contains("claimed");

        console.log(`[AutoClaimRewards] Rương ${boxId} - Unlocked: ${isUnlocked}, Claimed: ${isClaimed}`);

        if (!isUnlocked) {
          console.log(`[AutoClaimRewards] Rương ${boxId} chưa được mở khóa.`);
          return;
        }

        if (isClaimed) {
          console.log(`[AutoClaimRewards] Rương ${boxId} đã được nhận.`);
          return;
        }

        if (claimedCount >= MAX_CLAIMS) {
          console.log(`[AutoClaimRewards] Đã nhận đủ ${MAX_CLAIMS} rương.`);
          return;
        }

        const rewardImage = box.querySelector(".reward-image");
        const claimButton = box.querySelector("button, .claim-btn, [onclick]");

        const elementToClick = rewardImage || claimButton || box;
        const elementType = rewardImage ? "reward-image" : claimButton ? "claim button" : "rương";

        console.log(`[AutoClaimRewards] Nhấn ${elementType} cho rương ${boxId}`);

        ++claimedCount;

        setTimeout(() => {
          elementToClick.click();
        }, claimedCount * 1000);
      });

      console.log(`[AutoClaimRewards] Đã lên lịch nhận ${Math.min(claimedCount, MAX_CLAIMS)} rương.`);
    }, 5000);
  }

  // ======== Tế Lễ ========
  async function teLe() {
    await sleep(1000);

    const teLButton = document.querySelector("#te-le-button");
    if (!teLButton) {
      console.log("Không tìm thấy nút Tế Lễ.");
      return;
    }

    console.log("Đã nhấn nút Tế Lễ.");
    teLButton.click();

    await sleep(1000);

    const confirmButton = document.querySelector(".swal2-confirm.swal2-styled");
    if (confirmButton) {
      confirmButton.click();
      console.log("Đã xác nhận Tế Lễ.");
    } else {
      console.log("Không tìm thấy nút xác nhận.");
    }

    chrome.runtime.sendMessage({
      type: "WORKFLOW_STEP_DONE",
      domain: "https://hoathinh3d.gg/"
    });
  }

  function _0x5095ce() {
    waitForElement("#openButton.lixi-open-button", _0x944a5b => {
      console.log("Phát hiện nút Mở Lì Xì, sẽ nhấn sau 1 giây...");
      setTimeout(() => {
        _0x944a5b.click();
        console.log("Đã nhấn nút Mở Lì Xì!");
      }, 1000);
    }, 3000);
    setInterval(() => {
      const _0x42e581 = document.querySelector("#openButton.lixi-open-button");
      if (_0x42e581) {
        console.log("Phát hiện nút Mở Lì Xì, sẽ nhấn sau 1 giây...");
        setTimeout(() => {
          _0x42e581.click();
          console.log("Đã nhấn nút Mở Lì Xì!");
        }, 1000);
      }
    }, 5000);
  }

  function _0x426c95() {
    waitForElement("#claim-reward-btn", (claimRewardBtn) => {
      console.log("Phát hiện nút Nhận Thưởng, sẽ nhấn sau 1 giây...");
      setTimeout(() => {
        claimRewardBtn.click();
        console.log("Đã nhấn nút Nhận Thưởng!");
      }, 1000);
    });

    waitForElement("#challenge-boss-btn", _0x4ae1de => {
      if (_0x4ae1de.textContent.includes("KHIÊU CHIẾN")) {
        console.log("Phát hiện nút Khiêu Chiến, sẽ nhấn sau 1 giây...");
        setTimeout(() => {
          _0x4ae1de.click();
          console.log("Đã nhấn nút Khiêu Chiến!");
          waitForElement("#attack-boss-btn", _0x499b84 => {
            if (_0x499b84.textContent.includes("Tấn Công")) {
              console.log("Phát hiện nút Tấn Công, sẽ nhấn sau 1 giây...");
              setTimeout(() => {
                _0x499b84.click();
                setTimeout(() => {
                  location.reload();
                }, 3000);
                console.log("Đã nhấn nút Tấn Công!");
              }, 1000);
            }
          }, 3000);
        }, 1000);
      }
    }, 3000);

    setInterval(() => {
      const _0x13e2e3 = document.querySelector("#challenge-boss-btn");
      if (_0x13e2e3 && _0x13e2e3.textContent.includes("KHIÊU CHIẾN")) {
        console.log("Phát hiện nút Khiêu Chiến, sẽ nhấn sau 1 giây...");
        setTimeout(() => {
          _0x13e2e3.click();
          console.log("Đã nhấn nút Khiêu Chiến!");
          const _0x17273b = document.querySelector("#attack-boss-btn");
          if (_0x17273b && _0x17273b.textContent.includes("Tấn Công")) {
            console.log("Phát hiện nút Tấn Công, sẽ nhấn sau 1 giây...");
            setTimeout(() => {
              _0x17273b.click();
              setTimeout(() => {
                location.reload();
              }, 3000);
              console.log("Đã nhấn nút Tấn Công!");
            }, 1000);
          }
        }, 1000);
      }
    }, 5000);
  }

  function _0x1825d0() {
    waitForElement("#joinBattleImg", _0x148d71 => {
      console.log("Phát hiện nút Gia Nhập, sẽ nhấn sau 1 giây...");
      setTimeout(() => {
        _0x148d71.click();
        console.log("Đã nhấn nút Gia Nhập!");
        waitForElement(".swal2-confirm.swal2-styled", _0x4dff34 => {
          if (_0x4dff34.textContent.includes("Tham gia")) {
            console.log("Phát hiện nút Tham gia, sẽ nhấn sau 1 giây...");
            setTimeout(() => {
              _0x4dff34.click();
              console.log("Đã nhấn nút Tham gia!");
              const _0x155a25 = document.querySelector("#auto_accept_toggle");
              if (_0x155a25 && !_0x155a25.checked) {
                console.log("Phát hiện nút auto accept, sẽ nhấn sau 1 giây...");
                setTimeout(() => {
                  _0x155a25.click();
                  console.log("Đã kích hoạt auto accept toggle!");
                }, 1000);
              }
            }, 1000);
          }
        }, 3000);
      }, 1000);
    }, 3000);

    setInterval(() => {
      const _0x161ff6 = document.querySelector("#joinBattleImg");
      if (_0x161ff6) {
        console.log("Phát hiện nút Gia Nhập, sẽ nhấn sau 1 giây...");
        setTimeout(() => {
          _0x161ff6.click();
          console.log("Đã nhấn nút Gia Nhập!");
          const _0x3b8e40 = document.querySelector(".swal2-confirm.swal2-styled");
          if (_0x3b8e40 && _0x3b8e40.textContent.includes("Tham gia")) {
            console.log("Phát hiện nút Tham gia, sẽ nhấn sau 1 giây...");
            setTimeout(() => {
              _0x3b8e40.click();
              console.log("Đã nhấn nút Tham gia!");
              const _0x3bc149 = document.querySelector("#auto_accept_toggle");
              if (_0x3bc149 && !_0x3bc149.checked) {
                console.log("Phát hiện nút auto accept, sẽ nhấn sau 1 giây...");
                setTimeout(() => {
                  _0x3bc149.click();
                  console.log("Đã kích hoạt auto accept toggle!");
                }, 1000);
              }
            }, 1000);
          }
        }, 1000);
      }
    }, 5000);
  }

  const _0x43df6c = window.location.href;
  if (_0x43df6c.includes("/phong-cuoi")) {
    _0x45aef8();
    _0x19bde5();
    _0x5095ce();
  } else if (_0x43df6c.includes("/bi-canh-tong-mon")) {
    _0x426c95();
  } else if (_0x43df6c.includes("/luan-vo-duong")) {
    _0x1825d0();
  } else if (_0x43df6c.includes("/van-dap-tong-mon")) {
    vanDapTongMon();
  } else if (_0x43df6c.includes("/diem-danh")) {
    diemDanh();
  } else if (_0x43df6c.includes("/phuc-loi-duong")) {
    phucLoiDuong();
  } else if (_0x43df6c.includes("/thi-luyen-tong-mon-hh3d")) {
    _0x3063d0();
  } else if (_0x43df6c.includes("/do-thach-hh3d")) {
    _0x5047ed();
  } else if (_0x43df6c.includes("/danh-sach-thanh-vien-tong-mon")) {
    teLe();
  } else if (_0x43df6c.includes("/bang-hoat-dong-ngay")) {
    console.log("[HoatHinh3D] Chạy auto nhận thưởng bảng hoạt động...");
    bangHoatDongNgay();
  } else if (_0x43df6c.includes("/hoang-vuc")) {
    console.log("[HoatHinh3D] Chạy auto Hoang Vực...");
    hoangVuc();
  } else if (_0x43df6c.includes("/khoang-mach")) {
    console.log("[HoatHinh3D] Chạy auto Khoáng Mạch...");
    khoangMach();
  }
});

function sleep(_0x1c15f3) {
  return new Promise(_0x203f66 => setTimeout(_0x203f66, _0x1c15f3));
}

function fuzzyMatch(_0x4b66ee, _0x273006) {
  const _0x1eec5d = _0x4b66ee.toLowerCase();
  const _0x42f904 = _0x273006.toLowerCase();
  const _0x51ec17 = Array(_0x1eec5d.length + 1).fill(null).map(() => Array(_0x42f904.length + 1).fill(0));
  for (let _0xbafd71 = 0; _0xbafd71 <= _0x1eec5d.length; _0xbafd71++) {
    for (let _0x3e75d3 = 0; _0x3e75d3 <= _0x42f904.length; _0x3e75d3++) {
      if (_0xbafd71 === 0 || _0x3e75d3 === 0) {
        _0x51ec17[_0xbafd71][_0x3e75d3] = 0;
      } else if (_0x1eec5d[_0xbafd71 - 1] === _0x42f904[_0x3e75d3 - 1]) {
        _0x51ec17[_0xbafd71][_0x3e75d3] = _0x51ec17[_0xbafd71 - 1][_0x3e75d3 - 1] + 1;
      } else {
        _0x51ec17[_0xbafd71][_0x3e75d3] = Math.max(_0x51ec17[_0xbafd71 - 1][_0x3e75d3], _0x51ec17[_0xbafd71][_0x3e75d3 - 1]);
      }
    }
  }
  const _0x432f5b = _0x51ec17[_0x1eec5d.length][_0x42f904.length];
  return _0x432f5b / Math.max(_0x1eec5d.length, _0x42f904.length);
}

function waitForElement(selector, callback, timeout = 5000) {
  let element = document.querySelector(selector);

  if (element) {
    callback(element);
    return;
  }

  const observer = new MutationObserver(() => {
    element = document.querySelector(selector);
    if (element) {
      callback(element);
      observer.disconnect();
    }
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });

  setTimeout(() => {
    observer.disconnect();
    console.log(`Không tìm thấy element "${selector}" sau ${timeout}ms.`);
  }, timeout);
}

chrome.runtime.onMessage.addListener((_0x426020, _0x31b527, _0xaf859f) => {
  if (_0x426020.message === "clicked_browser_action") {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, _0x1abb27 => {
      var _0x3e8a4a = _0x1abb27[0].url;
      if (_0x3e8a4a.includes("/tu-luyen")) {
        console.log("Đang ở trang Tu Luyện");
      } else if (_0x3e8a4a.includes("/the-gioi")) {
        console.log("Đang ở trang Thế Giới");
      } else if (_0x3e8a4a.includes("/hoang-vuc")) {
        hoangVuc();
      } else if (_0x3e8a4a.includes("/khoang-mach")) {
        khoangMach();
      }
    });
  }
});