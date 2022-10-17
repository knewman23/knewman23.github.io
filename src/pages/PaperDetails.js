import React, { useEffect, useState } from "react";
import Header from "../components/layouts/Header";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

function PaperDetails(props) {
  const urlTitle = props.match.params.urlTitle;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  const [toggleMenu, setToggleMenu] = useState(false);

  const headerToggler = (e) => {
    e.preventDefault();
    setToggleMenu(!toggleMenu);
  };

  document.addEventListener("click", function (e) {
    if (e.target.closest(".content")) {
      setToggleMenu(false);
    }
  });

  return (
    <>
      <Header
        logoSource="/images/logo-header.png"
        toggleMenu={toggleMenu}
        headerToggler={headerToggler}
      />
      <main class={toggleMenu ? "content open" : "content"}>
        <div class="spacer" data-height="96"></div>
        <div class="blog-page-section">
          <div class="container" style={{ maxWidth: "700px" }}>
            <div class="blog-single shadow-dark p-30 center">
              <Document
                file={`../../../papers/${urlTitle}.pdf`}
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <Page pageNumber={pageNumber} />
              </Document>
            </div>
          </div>
        </div>

        <div class="spacer" data-height="96"></div>
        <div class="page-controls">
          <button
            type="button"
            disabled={pageNumber <= 1}
            onClick={previousPage}
          >
            <i class="fas fa-angle-left"></i>
          </button>
          {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
          <button
            type="button"
            disabled={pageNumber >= numPages}
            onClick={nextPage}
          >
            <i class="fas fa-angle-right"></i>
          </button>
        </div>
      </main>
    </>
  );
}

export default PaperDetails;
