import { MIMES } from "./const.js";
import { $, $$ } from "./utils.js";

new TomSelect("#khoangMachSelectedId", {
  create: true,
  options: MIMES,
  optgroups: [
    { value: "upper", label: "Mỏ Thượng" },
    { value: "middle", label: "Mỏ Trung" },
    { value: "lower", label: "Mỏ Hạ" }
  ],
  optgroupField: "class",
  valueField: "id",
  labelField: "name",
  searchField: ["name", "id"],
  render: {
    option: function (data, escape) {
      return `<div>${escape(data.name)} (ID: ${escape(data.id)})</div>`;
    },
    optgroup_header: function (data, escape) {
      return `<div class="optgroup-header" style="font-weight: bold;">${escape(data.label)}</div>`;
    }
  }
});

// Function button handlers
const functionButtons = ["navGroup1", "navGroup2", "navGroup3", "navLuanVo", "navBangHoatDong", "navHoangVuc", "navKhoangMach"];

functionButtons.forEach((buttonId) => {
  $(`#${buttonId}`).addEventListener("click", (e) => {
    const button = e.target;
    button.style.transform = "scale(0.95)";

    setTimeout(() => {
      button.style.transform = "";
    }, 150);

    chrome.storage.sync.get(["hoathinh3dDomain"], (result) => {
      const domain = result.hoathinh3dDomain || "https://hoathinh3d.gg/"

      switch (buttonId) {
        case "navGroup1":
          chrome.tabs.create({ url: domain + "diem-danh" })
          chrome.tabs.create({ url: domain + "danh-sach-thanh-vien-tong-mon" })
          chrome.tabs.create({ url: domain + "van-dap-tong-mon" })
          break
        case "navGroup2":
          chrome.tabs.create({ url: domain + "phuc-loi-duong" })
          chrome.tabs.create({ url: domain + "bi-canh-tong-mon" })
          break
        case "navHoangVuc":
          chrome.tabs.create({ url: domain + "hoang-vuc" })
          break
        case "navGroup3":
          chrome.tabs.create({ url: domain + "thi-luyen-tong-mon-hh3d" })
          chrome.tabs.create({ url: domain + "do-thach-hh3d" })
          break
        case "navLuanVo":
          chrome.tabs.create({ url: domain + "luan-vo-duong" })
          break
        case "navBangHoatDong":
          chrome.tabs.create({ url: domain + "bang-hoat-dong-ngay" })
          break
        case "navKhoangMach":
          chrome.tabs.create({ url: domain + "khoang-mach" })
          break
      }
    })
  })
})

// Load saved domain on popup open
document.addEventListener("DOMContentLoaded", () => {
  const navTabs = $$(".nav-tab")
  const pages = $$(".page")

  navTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetPage = tab.getAttribute("data-page")

      // Remove active class from all tabs and pages
      navTabs.forEach((t) => t.classList.remove("active"))
      pages.forEach((p) => p.classList.remove("active"))

      // Add active class to clicked tab and target page
      tab.classList.add("active")
      $("#" + targetPage).classList.add("active")
    })
  })

  chrome.storage.sync.get(["hoathinh3dDomain"], (result) => {
    if (result.hoathinh3dDomain) {
      $("#domain").value = result.hoathinh3dDomain
    }
  })
})

// Load saved configuration on popup open
chrome.storage.sync.get(["memberType", "hoangvucStrategy", "khoangMachSelectedId"], (result) => {
  if (result.memberType) {
    $("#memberType").value = result.memberType
  }
  if (result.hoangvucStrategy) {
    $("#hoangvucStrategy").value = result.hoangvucStrategy
  }
  if (result.khoangMachSelectedId) {
    const tomSelectInstance = $("#khoangMachSelectedId").tomselect;
    if (tomSelectInstance) {
      tomSelectInstance.setValue(result.khoangMachSelectedId);
    }
  }
})

$("#runBtn").addEventListener("click", () => {
  chrome.storage.sync.get(["hoathinh3dDomain"], ({ hoathinh3dDomain }) => {
    const domain = hoathinh3dDomain || "https://hoathinh3d.gg/";

    // Gửi message đến background
    chrome.runtime.sendMessage({
      type: "WORKFLOW_START",
      domain: domain
    }, (response) => {
      if (chrome.runtime.lastError) {
        console.error('Error:', chrome.runtime.lastError);
        $(".status-container #run-status").textContent = "Lỗi kết nối background!";
      } else {
        console.log('Workflow started:', response);
        $(".status-container #run-status").textContent = "Đang khởi động...";
      }
    });
  });
});

chrome.runtime.onMessage.addListener((msg) => {
  console.log('Popup received:', msg);

  if (msg.type === "WORKFLOW_PROGRESS") {
    $(".status-container #run-status").textContent = `Đang chạy: ${msg.stepName} (${msg.current}/${msg.total})`;
  }
  if (msg.type === "WORKFLOW_FINISHED") {
    $(".status-container #run-status").textContent = `Hoàn tất ${msg.totalSteps} bước!`;
  }
});

$("#save").addEventListener("click", function () {
  let domainInput = $("#domain").value.trim()
  let memberType = $("#memberType").value.trim()
  let hoangvucStrategy = $("#hoangvucStrategy").value.trim()
  let khoangMachSelectedId = $("#khoangMachSelectedId").value.trim()

  const statusContainer = $(".status-container")

  statusContainer.innerHTML = ""

  // Add loading state
  this.classList.add("loading")
  this.disabled = true

  const urlPattern = /^https:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\//

  setTimeout(() => {
    try {
      const url = new URL(domainInput)
      domainInput = `${url.protocol}//${url.hostname}/`
      console.log(`[Popup] Parsed domain: ${domainInput}`)
    } catch (e) {
      statusContainer.innerHTML = `
        <div id="error">Domain không hợp lệ! Vui lòng nhập URL đúng định dạng.</div>
      `
      this.classList.remove("loading")
      this.disabled = false
      return
    }

    if (!urlPattern.test(domainInput)) {
      statusContainer.innerHTML = `
        <div id="error">Domain không hợp lệ! Vui lòng nhập URL đúng định dạng.</div>
      `
      this.classList.remove("loading")
      this.disabled = false
      return
    }

    chrome.storage.sync.set({
      hoathinh3dDomain: domainInput,
      memberType,
      hoangvucStrategy,
      khoangMachSelectedId
    }, () => {
      statusContainer.innerHTML = `
        <div id="status">✅ Lưu cấu hình thành công!</div>
      `
      this.classList.remove("loading")
      this.disabled = false

      setTimeout(() => {
        statusContainer.innerHTML = ""
      }, 3000)
    })
  }, 800) // Simulate loading time
})

const qrContainer = $("#qr-container")
const qrImage = $("#qr-image")
let isQrVisible = false
let currentQr = null

function toggleQR(type, imageSrc) {
  if (isQrVisible && currentQr === type) {
    qrContainer.style.display = "none"
    isQrVisible = false
    currentQr = null
  } else {
    qrImage.src = imageSrc
    qrContainer.style.display = "block"
    isQrVisible = true
    currentQr = type
  }
}

$("#contactBtn").addEventListener("click", (e) => {
  console.log("Contact button clicked")
  const button = e.target
  button.style.transform = "scale(0.95)"
  setTimeout(() => {
    button.style.transform = ""
  }, 150)

  toggleQR("zalo", "zalo.png")
})

$("#donate").addEventListener("click", (e) => {
  const button = e.target
  button.style.transform = "scale(0.95)"
  setTimeout(() => {
    button.style.transform = ""
  }, 150)

  toggleQR("momo", "momo.png")
})
