window.onload = function () {
  document.getElementById("download").addEventListener("click", () => {
    const resume = this.document.getElementById("resume");

    var opt = {
      filename: "resume.pdf",
      image: { type: "pdf", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: {
        unit: "in",
        format: "a4",
        orientation: "portrait",
        fontSize: "12",
        lineHeight: "1.10",
      },
    };
    html2pdf().from(resume).set(opt).save();
  });
};
