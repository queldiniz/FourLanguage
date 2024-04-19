function initializarMenu() {
    
    var container = document.getElementById("container-menu");
    container.innerHTML = `
    <header
    class="Header-old header-logged-out js-details-container Details position-relative f4 py-3 snipcss-QNtmX"
    role="banner"
    data-color-mode="light"
    data-light-theme="light"
    data-dark-theme="dark"
  >
    <button
      type="button"
      class="Header-backdrop d-lg-none border-0 position-fixed top-0 left-0 width-full height-full js-details-target"
      aria-label="Toggle navigation"
    >
      <span class="d-none">Toggle navigation</span>
    </button>
    <div
      class="d-flex flex-column flex-lg-row flex-items-center p-responsive height-full position-relative z-1"
    >
      <div
        class="d-flex flex-justify-between flex-items-center width-full width-lg-auto snipcss0-2-4-5"
      >
        <a
          class="mr-lg-3 color-fg-inherit flex-order-2"
          href="index.html"
          aria-label="Homepage"
          data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark"
        >
          <img
            src="img/logo-four.png"
            alt=""
            height="50px"
            width="50px"
          />
          <!--img logo -->
        </a>
        <div class="flex-1 flex-order-2 text-right">
          <button
            aria-label="Toggle navigation"
            aria-expanded="false"
            type="button"
            data-view-component="true"
            class="js-details-target Button--link Button--medium Button d-lg-none color-fg-inherit p-1"
          >
            <span class="Button-content">
              <span class="Button-label">
                <div class="HeaderMenu-toggle-bar rounded my-1"></div>
                <div class="HeaderMenu-toggle-bar rounded my-1"></div>
                <div class="HeaderMenu-toggle-bar rounded my-1"></div>
              </span>
            </span>
          </button>
        </div>
      </div>
      <div
        class="HeaderMenu--logged-out p-responsive height-fit position-lg-relative d-lg-flex flex-column flex-auto pt-7 pb-4 top-0"
      >
        <div
          class="header-menu-wrapper d-flex flex-column flex-self-end flex-lg-row flex-justify-between flex-auto p-3 p-lg-0 rounded rounded-lg-0 mt-3 mt-lg-0"
        >
          <nav
            class="mt-0 px-3 px-lg-0 mb-3 mb-lg-0"
            aria-label="Global"
          >
            <ul class="d-lg-flex list-style-none">
              <li
                class="HeaderMenu-item position-relative flex-wrap flex-justify-between flex-items-center d-block d-lg-flex flex-lg-nowrap flex-lg-items-center js-details-container js-header-menu-item"
              >
                <button
                  type="button"
                  class="HeaderMenu-link border-0 width-full width-lg-auto px-0 px-lg-2 py-3 py-lg-2 no-wrap d-flex flex-items-center flex-justify-between js-details-target"
                  aria-expanded="false"
                  href=""
                >
                  Home
                </button>
              </li>
              <li
                class="HeaderMenu-item position-relative flex-wrap flex-justify-between flex-items-center d-block d-lg-flex flex-lg-nowrap flex-lg-items-center js-details-container js-header-menu-item"
              >
                <button
                  type="button"
                  class="HeaderMenu-link border-0 width-full width-lg-auto px-0 px-lg-2 py-3 py-lg-2 no-wrap d-flex flex-items-center flex-justify-between js-details-target"
                  aria-expanded="false"
                >
                  Review
                  <svg
                    opacity="0.5"
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                    class="octicon octicon-chevron-down HeaderMenu-icon ml-1"
                  >
                    <path
                      d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"
                    ></path>
                  </svg>
                </button>
                <div
                  class="HeaderMenu-dropdown dropdown-menu rounded m-0 p-0 py-2 py-lg-4 position-relative position-lg-absolute left-0 left-lg-n3 px-lg-4"
                >
                  <div class="border-bottom pb-3 mb-3">
                    <span
                      class="d-block h4 color-fg-default my-1"
                      id="solutions-for-heading"
                      href="revisao.html"
                      >Semesters</span
                    >
                    <ul
                      class="list-style-none f5"
                      aria-labelledby="solutions-for-heading"
                    >
                      <li>
                        <a
                          class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary"
                          data-analytics-event='{"category":"Header dropdown (logged out), Solutions","action":"click to go to Enterprise","label":"ref_cta:Enterprise;"} href='
                          href="revisao.html"
                        >
                          All
                        </a>
                      </li>
                      <li>
                        <a
                          class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary"
                          data-analytics-event='{"category":"Header dropdown (logged out), Solutions","action":"click to go to Teams","label":"ref_cta:Teams;"}'
                          href="saibamais.html"
                        >
                          1 Semester</a
                        >
                      </li>
                      <li>
                        <a
                          class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary"
                          data-analytics-event='{"category":"Header dropdown (logged out), Solutions","action":"click to go to Teams","label":"ref_cta:Teams;"}'
                          href="saibamais.html"
                        >
                          2 Semester</a
                        >
                      </li>
                      <li>
                        <a
                          class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary"
                          data-analytics-event='{"category":"Header dropdown (logged out), Solutions","action":"click to go to Teams","label":"ref_cta:Teams;"}'
                          href="saibamais_2ano.html"
                        >
                          3 Semester</a
                        >
                      </li>
                      <li>
                        <a
                          class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary"
                          data-analytics-event='{"category":"Header dropdown (logged out), Solutions","action":"click to go to Teams","label":"ref_cta:Teams;"}'
                          href="saibamais_2ano.html"
                        >
                          4 Semester</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li
                class="HeaderMenu-item position-relative flex-wrap flex-justify-between flex-items-center d-block d-lg-flex flex-lg-nowrap flex-lg-items-center js-details-container js-header-menu-item"
              >
                <button
                  type="button"
                  class="HeaderMenu-link border-0 width-full width-lg-auto px-0 px-lg-2 py-3 py-lg-2 no-wrap d-flex flex-items-center flex-justify-between js-details-target"
                  aria-expanded="false"
                >
                  Games
                  <svg
                    opacity="0.5"
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                    class="octicon octicon-chevron-down HeaderMenu-icon ml-1"
                  >
                    <path
                      d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"
                    ></path>
                  </svg>
                </button>
                <div
                  class="HeaderMenu-dropdown dropdown-menu rounded m-0 p-0 py-2 py-lg-4 position-relative position-lg-absolute left-0 left-lg-n3 px-lg-4"
                >
                  <ul>
                    <li>
                      <a
                        class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary"
                        data-analytics-event='{"category":"Header dropdown (logged out), Solutions","action":"click to go to Enterprise","label":"ref_cta:Enterprise;"} href='
                        href="tela_skills.html"
                      >
                        All
                      </a>
                    </li>
                  </ul>
                  <div class="">
                    <div class="">
                      <span
                        class="d-block h4 color-fg-default my-1"
                        id="open-source-repositories-heading"
                        >Writing</span
                      >
                      <ul
                        class="list-style-none f5"
                        aria-labelledby="open-source-repositories-heading"
                      >
                        <li>
                          <a
                            class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary"
                            data-analytics-event='{"category":"Header dropdown (logged out), Open Source","action":"click to go to Topics","label":"ref_cta:Topics;"}'
                            href="#"
                          >
                            Play
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!-- reading -->
                  <div class="">
                    <span
                      class="d-block h4 color-fg-default my-1"
                      id="open-source-repositories-heading"
                      >Reading</span
                    >
                    <ul
                      class="list-style-none f5"
                      aria-labelledby="open-source-repositories-heading"
                    >
                      <li>
                        <a
                          class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary"
                          data-analytics-event='{"category":"Header dropdown (logged out), Open Source","action":"click to go to Topics","label":"ref_cta:Topics;"}'
                          href="reading1.html"
                        >
                          Play
                        </a>
                      </li>
                    </ul>
                  </div>
                  <!-- listening -->
                  <div class="">
                    <span
                      class="d-block h4 color-fg-default my-1"
                      id="open-source-repositories-heading"
                      >Listening</span
                    >
                    <ul
                      class="list-style-none f5"
                      aria-labelledby="open-source-repositories-heading"
                    >
                      <li>
                        <a
                          class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary"
                          data-analytics-event='{"category":"Header dropdown (logged out), Open Source","action":"click to go to Topics","label":"ref_cta:Topics;"}'
                          href="listening1.html"
                        >
                          Play
                        </a>
                      </li>
                    </ul>
                  </div>
                  <!-- Speaking -->
                  <div class="">
                    <span
                      class="d-block h4 color-fg-default my-1"
                      id="open-source-repositories-heading"
                      >Speaking</span
                    >
                    <ul
                      class="list-style-none f5"
                      aria-labelledby="open-source-repositories-heading"
                    >
                      <li>
                        <a
                          class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary"
                          data-analytics-event='{"category":"Header dropdown (logged out), Open Source","action":"click to go to Topics","label":"ref_cta:Topics;"}'
                          href="speaking1.html"
                        >
                          Play</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li
                class="HeaderMenu-item position-relative flex-wrap flex-justify-between flex-items-center d-block d-lg-flex flex-lg-nowrap flex-lg-items-center js-details-container js-header-menu-item"
              >
                <a
                  class="HeaderMenu-link no-underline px-0 px-lg-2 py-3 py-lg-2 d-block d-lg-inline-block"
                  data-analytics-event='{"category":"Header menu top item (logged out)","action":"click to go to Pricing","label":"ref_cta:Pricing;"}'
                  href="/pricing"
                  >About</a
                >
              </li>
            </ul>
          </nav>
          <div
            class="d-lg-flex flex-items-center mb-3 mb-lg-0 text-center text-lg-left ml-3"
          >
            <qbsearch-input
              class="search-input"
              data-scope=""
              data-custom-scopes-path="/search/custom_scopes"
              data-delete-custom-scopes-csrf="thg2v0CeVadtl4ZWeC0sw1SpcQQcra52fK4dAoDA_UcvFsjdUVMgOSdc65AxenW1feNG4K0hWL71miTr728Xkw"
              data-max-custom-scopes="10"
              data-header-redesign-enabled="false"
              data-initial-value=""
              data-blackbird-suggestions-path="/search/suggestions"
              data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations"
              data-current-repository=""
              data-current-org=""
              data-current-owner=""
              data-logged-in="false"
              data-copilot-chat-enabled="false"
              data-blackbird-indexed-repo-csrf='<esi:include src="/_esi/rails_csrf_token_form_hidden?r=h7ddlJPG5YGauJIR7xaoqilH%2BMjJYqI97nYMoWtQhpFKSv8LuK0nWJaphdhHGwHI85g4uKIh5B%2FtXdhdVZ%2BmPqL7ZbPLTYY1ft1o8Rv8vkIu2o6%2ByIvnPdopJjy9mVH9TrbRGl2ARriqa4xLz%2F9gqPn5uDk0cqr2lxYJOmEalPTMR7gQyLwPqTPByZTXcL93QrlvdZzsgOWzyJpu696ifULwanRuqy%2Bh5E%2Fl0OVxXtJgHhPCFDxm3LTifxCquAhbEQWC7UFuplR9Bpyk9bYQMAZJ6BsQvqUjdF7oO7Ltn5L7td5aJvzpiAdKLCFfiCHF1tWN5DvRVxoo1XUURyESNW51XacO16zb3T6P6BTNbwqRmE5ENgx7TX%2FnRjcJ0oIYQNHp0hwB3QTTSzRbmlN9N8Ot5dpKqOtO%2BhGVXGVsL8rLNhKPDhywHxmPHobOZdz0hBUNYbz8KwAiop5uNrycj7bXBYiN35DJ7L8I%2Fh7gX%2Fr0uiJt7vE%3D--UFGSe8ZgQG3Gx2vB--XnAL6r8cQa9rpY8Z5ZSViw%3D%3D" />'
              data-catalyst=""
            >
              <div
                class="search-input-container search-with-dialog position-relative d-flex flex-row flex-items-center mr-4 rounded"
                data-action="click:qbsearch-input#searchInputContainerClicked"
              >
                <button
                  type="button"
                  class="header-search-button placeholder input-button form-control d-flex flex-1 flex-self-stretch flex-items-center no-wrap width-full py-0 pl-2 pr-0 text-left border-0 box-shadow-none"
                  data-target="qbsearch-input.inputButton"
                  placeholder="Search or jump to..."
                  data-hotkey="s,/"
                  autocapitalize="off"
                  data-action="click:qbsearch-input#handleExpand"
                >
                  <div class="mr-2 color-fg-muted">
                    <svg
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      class="octicon octicon-search"
                    >
                      <path
                        d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"
                      ></path>
                    </svg>
                  </div>
                  <span
                    class="flex-1"
                    data-target="qbsearch-input.inputButtonText"
                    >Search or jump to...</span
                  >
                  <div
                    class="d-flex"
                    data-target="qbsearch-input.hotkeyIndicator"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="20"
                      aria-hidden="true"
                      class="mr-1"
                    >
                      <path
                        fill="none"
                        stroke="#979A9C"
                        opacity=".4"
                        d="M3.5.5h12c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-13c0-1.7 1.3-3 3-3z"
                      ></path>
                      <path
                        fill="#979A9C"
                        d="M11.8 6L8 15.1h-.9L10.8 6h1z"
                      ></path>
                    </svg>
                  </div>
                </button>
                <input
                  type="hidden"
                  name="type"
                  class="js-site-search-type-field"
                />
                <div
                  class="Overlay--hidden"
                  data-modal-dialog-overlay=""
                >
                  <modal-dialog
                    data-action="close:qbsearch-input#handleClose cancel:qbsearch-input#handleClose"
                    data-target="qbsearch-input.searchSuggestionsDialog"
                    role="dialog"
                    id="search-suggestions-dialog"
                    aria-modal="true"
                    aria-labelledby="search-suggestions-dialog-header"
                    data-view-component="true"
                    class="Overlay Overlay--width-large Overlay--height-auto"
                  >
                    <h1
                      id="search-suggestions-dialog-header"
                      class="sr-only"
                    >
                      Search code, repositories, users, issues, pull
                      requests...
                    </h1>
                    <div class="Overlay-body Overlay-body--paddingNone">
                      <div data-view-component="true">
                        <div
                          class="search-suggestions position-fixed width-full color-shadow-large border color-fg-default color-bg-default overflow-hidden d-flex flex-column query-builder-container style-At8AN"
                          data-target="qbsearch-input.queryBuilderContainer"
                          hidden=""
                          id="style-At8AN"
                        >
                          <form
                            id="query-builder-test-form"
                            action=""
                            accept-charset="UTF-8"
                            method="get"
                          >
                            <query-builder
                              data-target="qbsearch-input.queryBuilder"
                              id="query-builder-query-builder-test"
                              data-filter-key=":"
                              data-view-component="true"
                              class="QueryBuilder search-query-builder"
                              data-min-width="300"
                              data-catalyst=""
                            >
                              <div class="FormControl FormControl--fullWidth">
                                <label
                                  id="query-builder-test-label"
                                  for="query-builder-test"
                                  class="FormControl-label sr-only"
                                >
                                  Search
                                </label>
                                <div
                                  class="QueryBuilder-StyledInput width-fit"
                                  data-target="query-builder.styledInput"
                                >
                                  <span
                                    id="query-builder-test-leadingvisual-wrap"
                                    class="FormControl-input-leadingVisualWrap QueryBuilder-leadingVisualWrap"
                                  >
                                    <svg
                                      aria-hidden="true"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      version="1.1"
                                      width="16"
                                      data-view-component="true"
                                      class="octicon octicon-search FormControl-input-leadingVisual"
                                    >
                                      <path
                                        d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"
                                      ></path>
                                    </svg>
                                  </span>
                                  <div
                                    data-target="query-builder.styledInputContainer"
                                    class="QueryBuilder-StyledInputContainer"
                                  >
                                    <div
                                      aria-hidden="true"
                                      class="QueryBuilder-StyledInputContent"
                                      data-target="query-builder.styledInputContent"
                                    ></div>
                                    <div class="QueryBuilder-InputWrapper">
                                      <div
                                        aria-hidden="true"
                                        class="QueryBuilder-Sizer"
                                        data-target="query-builder.sizer"
                                      >
                                        <span></span>
                                      </div>
                                      <input
                                        id="query-builder-test"
                                        name="query-builder-test"
                                        value=""
                                        autocomplete="off"
                                        type="text"
                                        role="combobox"
                                        spellcheck="false"
                                        aria-expanded="false"
                                        aria-describedby="validation-2ea6a6f0-b539-4714-b736-cbd12052d2c1"
                                        data-target="query-builder.input"
                                        data-action="
                                                             input:query-builder#inputChange
                                                             blur:query-builder#inputBlur
                                                             keydown:query-builder#inputKeydown
                                                             focus:query-builder#inputFocus
                                                             "
                                        data-view-component="true"
                                        class="FormControl-input QueryBuilder-Input FormControl-medium"
                                        aria-controls="query-builder-test-results"
                                        aria-autocomplete="list"
                                        aria-haspopup="listbox"
                                      />
                                    </div>
                                  </div>
                                  <span
                                    class="sr-only"
                                    id="query-builder-test-clear"
                                    >Clear</span
                                  >
                                  <button
                                    role="button"
                                    id="query-builder-test-clear-button"
                                    aria-labelledby="query-builder-test-clear query-builder-test-label"
                                    data-target="query-builder.clearButton"
                                    data-action="
                                                       click:query-builder#clear
                                                       focus:query-builder#clearButtonFocus
                                                       blur:query-builder#clearButtonBlur
                                                       "
                                    variant="small"
                                    hidden=""
                                    type="button"
                                    data-view-component="true"
                                    class="Button Button--iconOnly Button--invisible Button--medium mr-1 px-2 py-0 d-flex flex-items-center rounded-1 color-fg-muted"
                                  >
                                    <svg
                                      aria-hidden="true"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      version="1.1"
                                      width="16"
                                      data-view-component="true"
                                      class="octicon octicon-x-circle-fill Button-visual"
                                    >
                                      <path
                                        d="M2.343 13.657A8 8 0 1 1 13.658 2.343 8 8 0 0 1 2.343 13.657ZM6.03 4.97a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042L6.94 8 4.97 9.97a.749.749 0 0 0 .326 1.275.749.749 0 0 0 .734-.215L8 9.06l1.97 1.97a.749.749 0 0 0 1.275-.326.749.749 0 0 0-.215-.734L9.06 8l1.97-1.97a.749.749 0 0 0-.326-1.275.749.749 0 0 0-.734.215L8 6.94Z"
                                      ></path>
                                    </svg>
                                  </button>
                                </div>
                                <template id="search-icon">
                                  <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    class="octicon octicon-search"
                                  >
                                    <path
                                      d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"
                                    ></path>
                                  </svg>
                                </template>
                                <template id="code-icon">
                                  <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    class="octicon octicon-code"
                                  >
                                    <path
                                      d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"
                                    ></path>
                                  </svg>
                                </template>
                                <template id="file-code-icon">
                                  <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    class="octicon octicon-file-code"
                                  >
                                    <path
                                      d="M4 1.75C4 .784 4.784 0 5.75 0h5.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v8.586A1.75 1.75 0 0 1 14.25 15h-9a.75.75 0 0 1 0-1.5h9a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 10 4.25V1.5H5.75a.25.25 0 0 0-.25.25v2.5a.75.75 0 0 1-1.5 0Zm1.72 4.97a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l1.47-1.47-1.47-1.47a.75.75 0 0 1 0-1.06ZM3.28 7.78 1.81 9.25l1.47 1.47a.751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018l-2-2a.75.75 0 0 1 0-1.06l2-2a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Zm8.22-6.218V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"
                                    ></path>
                                  </svg>
                                </template>
                                <template id="history-icon">
                                  <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    class="octicon octicon-history"
                                  >
                                    <path
                                      d="m.427 1.927 1.215 1.215a8.002 8.002 0 1 1-1.6 5.685.75.75 0 1 1 1.493-.154 6.5 6.5 0 1 0 1.18-4.458l1.358 1.358A.25.25 0 0 1 3.896 6H.25A.25.25 0 0 1 0 5.75V2.104a.25.25 0 0 1 .427-.177ZM7.75 4a.75.75 0 0 1 .75.75v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5A.75.75 0 0 1 7.75 4Z"
                                    ></path>
                                  </svg>
                                </template>
                                <template id="repo-icon">
                                  <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    class="octicon octicon-repo"
                                  >
                                    <path
                                      d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"
                                    ></path>
                                  </svg>
                                </template>
                                <template id="bookmark-icon">
                                  <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    class="octicon octicon-bookmark"
                                  >
                                    <path
                                      d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                                    ></path>
                                  </svg>
                                </template>
                                <template id="plus-circle-icon">
                                  <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    class="octicon octicon-plus-circle"
                                  >
                                    <path
                                      d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm7.25-3.25v2.5h2.5a.75.75 0 0 1 0 1.5h-2.5v2.5a.75.75 0 0 1-1.5 0v-2.5h-2.5a.75.75 0 0 1 0-1.5h2.5v-2.5a.75.75 0 0 1 1.5 0Z"
                                    ></path>
                                  </svg>
                                </template>
                                <template id="circle-icon">
                                  <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    class="octicon octicon-dot-fill"
                                  >
                                    <path
                                      d="M8 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"
                                    ></path>
                                  </svg>
                                </template>
                                <template id="trash-icon">
                                  <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    class="octicon octicon-trash"
                                  >
                                    <path
                                      d="M11 1.75V3h2.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75ZM4.496 6.675l.66 6.6a.25.25 0 0 0 .249.225h5.19a.25.25 0 0 0 .249-.225l.66-6.6a.75.75 0 0 1 1.492.149l-.66 6.6A1.748 1.748 0 0 1 10.595 15h-5.19a1.75 1.75 0 0 1-1.741-1.575l-.66-6.6a.75.75 0 1 1 1.492-.15ZM6.5 1.75V3h3V1.75a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25Z"
                                    ></path>
                                  </svg>
                                </template>
                                <template id="team-icon">
                                  <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    class="octicon octicon-people"
                                  >
                                    <path
                                      d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"
                                    ></path>
                                  </svg>
                                </template>
                                <template id="project-icon">
                                  <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    class="octicon octicon-project"
                                  >
                                    <path
                                      d="M1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0ZM1.5 1.75v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25ZM11.75 3a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 .75-.75Zm-8.25.75a.75.75 0 0 1 1.5 0v5.5a.75.75 0 0 1-1.5 0ZM8 3a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 3Z"
                                    ></path>
                                  </svg>
                                </template>
                                <template id="pencil-icon">
                                  <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    class="octicon octicon-pencil"
                                  >
                                    <path
                                      d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z"
                                    ></path>
                                  </svg>
                                </template>
                                <template id="copilot-icon">
                                  <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    class="octicon octicon-copilot"
                                  >
                                    <path
                                      d="M7.998 15.035c-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.201-.508-.254-1.084-.254-1.656 0-.87.128-1.769.693-2.484.579-.733 1.494-1.124 2.724-1.261 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.053 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095v1.872c0 .766-3.351 3.795-8.002 3.795Zm0-1.485c2.28 0 4.584-1.11 5.002-1.433V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.059-.327-2.71-.991A3.222 3.222 0 0 1 8 6.303a3.24 3.24 0 0 1-.544.743c-.65.664-1.563.991-2.71.991-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433ZM6.762 2.83c-.193-.206-.637-.413-1.682-.297-1.019.113-1.479.404-1.713.7-.247.312-.369.789-.369 1.554 0 .793.129 1.171.308 1.371.162.181.519.379 1.442.379.853 0 1.339-.235 1.638-.54.315-.322.527-.827.617-1.553.117-.935-.037-1.395-.241-1.614Zm4.155-.297c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Z"
                                    ></path>
                                    <path
                                      d="M6.25 9.037a.75.75 0 0 1 .75.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 .75-.75Zm4.25.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 1.5 0Z"
                                    ></path>
                                  </svg>
                                </template>
                                <template id="workflow-icon">
                                  <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    class="octicon octicon-workflow"
                                  >
                                    <path
                                      d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 0 1 5.25 7H4v4a1 1 0 0 0 1 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0 1 14.25 16h-3.5A1.75 1.75 0 0 1 9 14.25v-.75H5A2.5 2.5 0 0 1 2.5 11V7h-.75A1.75 1.75 0 0 1 0 5.25Zm1.75-.25a.25.25 0 0 0-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25v-3.5a.25.25 0 0 0-.25-.25Zm9 9a.25.25 0 0 0-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25v-3.5a.25.25 0 0 0-.25-.25Z"
                                    ></path>
                                  </svg>
                                </template>
                                <template id="book-icon">
                                  <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    class="octicon octicon-book"
                                  >
                                    <path
                                      d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"
                                    ></path>
                                  </svg>
                                </template>
                                <template id="code-review-icon">
                                  <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    class="octicon octicon-code-review"
                                  >
                                    <path
                                      d="M1.75 1h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 13H8.061l-2.574 2.573A1.458 1.458 0 0 1 3 14.543V13H1.75A1.75 1.75 0 0 1 0 11.25v-8.5C0 1.784.784 1 1.75 1ZM1.5 2.75v8.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25Zm5.28 1.72a.75.75 0 0 1 0 1.06L5.31 7l1.47 1.47a.751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018l-2-2a.75.75 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.06 0Zm2.44 0a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L10.69 7 9.22 5.53a.75.75 0 0 1 0-1.06Z"
                                    ></path>
                                  </svg>
                                </template>
                                <template id="codespaces-icon">
                                  <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    class="octicon octicon-codespaces"
                                  >
                                    <path
                                      d="M0 11.25c0-.966.784-1.75 1.75-1.75h12.5c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm2-9.5C2 .784 2.784 0 3.75 0h8.5C13.216 0 14 .784 14 1.75v5a1.75 1.75 0 0 1-1.75 1.75h-8.5A1.75 1.75 0 0 1 2 6.75Zm1.75-.25a.25.25 0 0 0-.25.25v5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5a.25.25 0 0 0-.25-.25Zm-2 9.5a.25.25 0 0 0-.25.25v3c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-3a.25.25 0 0 0-.25-.25Z"
                                    ></path>
                                    <path
                                      d="M7 12.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm-4 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"
                                    ></path>
                                  </svg>
                                </template>
                                <template id="comment-icon">
                                  <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    class="octicon octicon-comment"
                                  >
                                    <path
                                      d="M1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0 1 13.25 12H9.06l-2.573 2.573A1.458 1.458 0 0 1 4 13.543V12H2.75A1.75 1.75 0 0 1 1 10.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h4.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"
                                    ></path>
                                  </svg>
                                </template>
                                <template id="comment-discussion-icon">
                                  <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    class="octicon octicon-comment-discussion"
                                  >
                                    <path
                                      d="M1.75 1h8.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 10.25 10H7.061l-2.574 2.573A1.458 1.458 0 0 1 2 11.543V10h-.25A1.75 1.75 0 0 1 0 8.25v-5.5C0 1.784.784 1 1.75 1ZM1.5 2.75v5.5c0 .138.112.25.25.25h1a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h3.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25Zm13 2a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1 0-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 14.25 12H14v1.543a1.458 1.458 0 0 1-2.487 1.03L9.22 12.28a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l2.22 2.22v-2.19a.75.75 0 0 1 .75-.75h1a.25.25 0 0 0 .25-.25Z"
                                    ></path>
                                  </svg>
                                </template>
                                <template id="organization-icon">
                                  <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    class="octicon octicon-organization"
                                  >
                                    <path
                                      d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z"
                                    ></path>
                                  </svg>
                                </template>
                                <template id="rocket-icon">
                                  <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    class="octicon octicon-rocket"
                                  >
                                    <path
                                      d="M14.064 0h.186C15.216 0 16 .784 16 1.75v.186a8.752 8.752 0 0 1-2.564 6.186l-.458.459c-.314.314-.641.616-.979.904v3.207c0 .608-.315 1.172-.833 1.49l-2.774 1.707a.749.749 0 0 1-1.11-.418l-.954-3.102a1.214 1.214 0 0 1-.145-.125L3.754 9.816a1.218 1.218 0 0 1-.124-.145L.528 8.717a.749.749 0 0 1-.418-1.11l1.71-2.774A1.748 1.748 0 0 1 3.31 4h3.204c.288-.338.59-.665.904-.979l.459-.458A8.749 8.749 0 0 1 14.064 0ZM8.938 3.623h-.002l-.458.458c-.76.76-1.437 1.598-2.02 2.5l-1.5 2.317 2.143 2.143 2.317-1.5c.902-.583 1.74-1.26 2.499-2.02l.459-.458a7.25 7.25 0 0 0 2.123-5.127V1.75a.25.25 0 0 0-.25-.25h-.186a7.249 7.249 0 0 0-5.125 2.123ZM3.56 14.56c-.732.732-2.334 1.045-3.005 1.148a.234.234 0 0 1-.201-.064.234.234 0 0 1-.064-.201c.103-.671.416-2.273 1.15-3.003a1.502 1.502 0 1 1 2.12 2.12Zm6.94-3.935c-.088.06-.177.118-.266.175l-2.35 1.521.548 1.783 1.949-1.2a.25.25 0 0 0 .119-.213ZM3.678 8.116 5.2 5.766c.058-.09.117-.178.176-.266H3.309a.25.25 0 0 0-.213.119l-1.2 1.95ZM12 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
                                    ></path>
                                  </svg>
                                </template>
                                <template id="shield-check-icon">
                                  <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    class="octicon octicon-shield-check"
                                  >
                                    <path
                                      d="m8.533.133 5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667l5.25-1.68a1.748 1.748 0 0 1 1.066 0Zm-.61 1.429.001.001-5.25 1.68a.251.251 0 0 0-.174.237V7c0 1.36.275 2.666 1.057 3.859.784 1.194 2.121 2.342 4.366 3.298a.196.196 0 0 0 .154 0c2.245-.957 3.582-2.103 4.366-3.297C13.225 9.666 13.5 8.358 13.5 7V3.48a.25.25 0 0 0-.174-.238l-5.25-1.68a.25.25 0 0 0-.153 0ZM11.28 6.28l-3.5 3.5a.75.75 0 0 1-1.06 0l-1.5-1.5a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l.97.97 2.97-2.97a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"
                                    ></path>
                                  </svg>
                                </template>
                                <template id="heart-icon">
                                  <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    class="octicon octicon-heart"
                                  >
                                    <path
                                      d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z"
                                    ></path>
                                  </svg>
                                </template>
                                <template id="server-icon">
                                  <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    class="octicon octicon-server"
                                  >
                                    <path
                                      d="M1.75 1h12.5c.966 0 1.75.784 1.75 1.75v4c0 .372-.116.717-.314 1 .198.283.314.628.314 1v4a1.75 1.75 0 0 1-1.75 1.75H1.75A1.75 1.75 0 0 1 0 12.75v-4c0-.358.109-.707.314-1a1.739 1.739 0 0 1-.314-1v-4C0 1.784.784 1 1.75 1ZM1.5 2.75v4c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-4a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25Zm.25 5.75a.25.25 0 0 0-.25.25v4c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-4a.25.25 0 0 0-.25-.25ZM7 4.75A.75.75 0 0 1 7.75 4h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 7 4.75ZM7.75 10h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5ZM3 4.75A.75.75 0 0 1 3.75 4h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 4.75ZM3.75 10h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z"
                                    ></path>
                                  </svg>
                                </template>
                                <template id="globe-icon">
                                  <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    class="octicon octicon-globe"
                                  >
                                    <path
                                      d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM5.78 8.75a9.64 9.64 0 0 0 1.363 4.177c.255.426.542.832.857 1.215.245-.296.551-.705.857-1.215A9.64 9.64 0 0 0 10.22 8.75Zm4.44-1.5a9.64 9.64 0 0 0-1.363-4.177c-.307-.51-.612-.919-.857-1.215a9.927 9.927 0 0 0-.857 1.215A9.64 9.64 0 0 0 5.78 7.25Zm-5.944 1.5H1.543a6.507 6.507 0 0 0 4.666 5.5c-.123-.181-.24-.365-.352-.552-.715-1.192-1.437-2.874-1.581-4.948Zm-2.733-1.5h2.733c.144-2.074.866-3.756 1.58-4.948.12-.197.237-.381.353-.552a6.507 6.507 0 0 0-4.666 5.5Zm10.181 1.5c-.144 2.074-.866 3.756-1.58 4.948-.12.197-.237.381-.353.552a6.507 6.507 0 0 0 4.666-5.5Zm2.733-1.5a6.507 6.507 0 0 0-4.666-5.5c.123.181.24.365.353.552.714 1.192 1.436 2.874 1.58 4.948Z"
                                    ></path>
                                  </svg>
                                </template>
                                <template id="issue-opened-icon">
                                  <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    class="octicon octicon-issue-opened"
                                  >
                                    <path
                                      d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                                    ></path>
                                    <path
                                      d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"
                                    ></path>
                                  </svg>
                                </template>
                                <template id="device-mobile-icon">
                                  <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    class="octicon octicon-device-mobile"
                                  >
                                    <path
                                      d="M3.75 0h8.5C13.216 0 14 .784 14 1.75v12.5A1.75 1.75 0 0 1 12.25 16h-8.5A1.75 1.75 0 0 1 2 14.25V1.75C2 .784 2.784 0 3.75 0ZM3.5 1.75v12.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM8 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                                    ></path>
                                  </svg>
                                </template>
                                <template id="package-icon">
                                  <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    class="octicon octicon-package"
                                  >
                                    <path
                                      d="m8.878.392 5.25 3.045c.54.314.872.89.872 1.514v6.098a1.75 1.75 0 0 1-.872 1.514l-5.25 3.045a1.75 1.75 0 0 1-1.756 0l-5.25-3.045A1.75 1.75 0 0 1 1 11.049V4.951c0-.624.332-1.201.872-1.514L7.122.392a1.75 1.75 0 0 1 1.756 0ZM7.875 1.69l-4.63 2.685L8 7.133l4.755-2.758-4.63-2.685a.248.248 0 0 0-.25 0ZM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432Zm6.25 8.271 4.625-2.683a.25.25 0 0 0 .125-.216V5.677L8.75 8.432Z"
                                    ></path>
                                  </svg>
                                </template>
                                <template id="credit-card-icon">
                                  <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    class="octicon octicon-credit-card"
                                  >
                                    <path
                                      d="M10.75 9a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5Z"
                                    ></path>
                                    <path
                                      d="M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25ZM14.5 6.5h-13v5.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Zm0-2.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25V5h13Z"
                                    ></path>
                                  </svg>
                                </template>
                                <template id="play-icon">
                                  <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    class="octicon octicon-play"
                                  >
                                    <path
                                      d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"
                                    ></path>
                                  </svg>
                                </template>
                                <template id="gift-icon">
                                  <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    class="octicon octicon-gift"
                                  >
                                    <path
                                      d="M2 2.75A2.75 2.75 0 0 1 4.75 0c.983 0 1.873.42 2.57 1.232.268.318.497.668.68 1.042.183-.375.411-.725.68-1.044C9.376.42 10.266 0 11.25 0a2.75 2.75 0 0 1 2.45 4h.55c.966 0 1.75.784 1.75 1.75v2c0 .698-.409 1.301-1 1.582v4.918A1.75 1.75 0 0 1 13.25 16H2.75A1.75 1.75 0 0 1 1 14.25V9.332C.409 9.05 0 8.448 0 7.75v-2C0 4.784.784 4 1.75 4h.55c-.192-.375-.3-.8-.3-1.25ZM7.25 9.5H2.5v4.75c0 .138.112.25.25.25h4.5Zm1.5 0v5h4.5a.25.25 0 0 0 .25-.25V9.5Zm0-4V8h5.5a.25.25 0 0 0 .25-.25v-2a.25.25 0 0 0-.25-.25Zm-7 0a.25.25 0 0 0-.25.25v2c0 .138.112.25.25.25h5.5V5.5h-5.5Zm3-4a1.25 1.25 0 0 0 0 2.5h2.309c-.233-.818-.542-1.401-.878-1.793-.43-.502-.915-.707-1.431-.707ZM8.941 4h2.309a1.25 1.25 0 0 0 0-2.5c-.516 0-1 .205-1.43.707-.337.392-.646.975-.879 1.793Z"
                                    ></path>
                                  </svg>
                                </template>
                                <template id="code-square-icon">
                                  <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    class="octicon octicon-code-square"
                                  >
                                    <path
                                      d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25Zm7.47 3.97a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L10.69 8 9.22 6.53a.75.75 0 0 1 0-1.06ZM6.78 6.53 5.31 8l1.47 1.47a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-2-2a.75.75 0 0 1 0-1.06l2-2a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"
                                    ></path>
                                  </svg>
                                </template>
                                <template id="device-desktop-icon">
                                  <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    class="octicon octicon-device-desktop"
                                  >
                                    <path
                                      d="M14.25 1c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0 1 14.25 12h-3.727c.099 1.041.52 1.872 1.292 2.757A.752.752 0 0 1 11.25 16h-6.5a.75.75 0 0 1-.565-1.243c.772-.885 1.192-1.716 1.292-2.757H1.75A1.75 1.75 0 0 1 0 10.25v-7.5C0 1.784.784 1 1.75 1ZM1.75 2.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25ZM9.018 12H6.982a5.72 5.72 0 0 1-.765 2.5h3.566a5.72 5.72 0 0 1-.765-2.5Z"
                                    ></path>
                                  </svg>
                                </template>
                                <div class="position-relative">
                                  <ul
                                    role="listbox"
                                    class="ActionListWrap QueryBuilder-ListWrap"
                                    aria-label="Suggestions"
                                    data-action="
                                                       combobox-commit:query-builder#comboboxCommit
                                                       mousedown:query-builder#resultsMousedown
                                                       "
                                    data-target="query-builder.resultsList"
                                    data-persist-list="false"
                                    id="query-builder-test-results"
                                  >
                                    <li
                                      role="presentation"
                                      class="ActionList-sectionDivider"
                                    >
                                      <h3
                                        role="presentation"
                                        class="ActionList-sectionDivider-title QueryBuilder-sectionTitle p-2 text-left"
                                        aria-hidden="true"
                                      >
                                        Explore
                                      </h3>
                                      <ul role="presentation">
                                        <li
                                          role="option"
                                          class="ActionListItem"
                                          data-type="url-result"
                                          id="query-builder-test-result-enterprise"
                                          data-value="Enterprise"
                                          aria-label="Enterprise, jump to this explore page"
                                        >
                                          <a
                                            href="/enterprise?ref_loc=search"
                                            data-action="click:query-builder#navigate"
                                            tabindex="-1"
                                            class="QueryBuilder-ListItem-link ActionListContent ActionListContent--visual16 QueryBuilder-ListItem"
                                          >
                                            <span
                                              id="query-builder-test-result-enterprise--leading"
                                              class="ActionListItem-visual ActionListItem-visual--leading"
                                            >
                                              <svg
                                                aria-hidden="true"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                version="1.1"
                                                width="16"
                                                data-view-component="true"
                                                class="octicon octicon-organization"
                                              >
                                                <path
                                                  d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z"
                                                ></path>
                                              </svg>
                                            </span>
                                            <span
                                              class="ActionListItem-descriptionWrap"
                                            >
                                              <span
                                                class="ActionListItem-label text-normal"
                                              >
                                                <span class=""
                                                  >Enterprise</span
                                                >
                                              </span>
                                            </span>
                                            <span
                                              aria-hidden="true"
                                              class="ActionListItem-description QueryBuilder-ListItem-trailing"
                                              >Learn More</span
                                            >
                                          </a>
                                        </li>
                                        <li
                                          role="option"
                                          class="ActionListItem"
                                          data-type="url-result"
                                          id="query-builder-test-result-security"
                                          data-value="Security"
                                          aria-label="Security, jump to this explore page"
                                        >
                                          <a
                                            href="/security?ref_loc=search"
                                            data-action="click:query-builder#navigate"
                                            tabindex="-1"
                                            class="QueryBuilder-ListItem-link ActionListContent ActionListContent--visual16 QueryBuilder-ListItem"
                                          >
                                            <span
                                              id="query-builder-test-result-security--leading"
                                              class="ActionListItem-visual ActionListItem-visual--leading"
                                            >
                                              <svg
                                                aria-hidden="true"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                version="1.1"
                                                width="16"
                                                data-view-component="true"
                                                class="octicon octicon-shield-check"
                                              >
                                                <path
                                                  d="m8.533.133 5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667l5.25-1.68a1.748 1.748 0 0 1 1.066 0Zm-.61 1.429.001.001-5.25 1.68a.251.251 0 0 0-.174.237V7c0 1.36.275 2.666 1.057 3.859.784 1.194 2.121 2.342 4.366 3.298a.196.196 0 0 0 .154 0c2.245-.957 3.582-2.103 4.366-3.297C13.225 9.666 13.5 8.358 13.5 7V3.48a.25.25 0 0 0-.174-.238l-5.25-1.68a.25.25 0 0 0-.153 0ZM11.28 6.28l-3.5 3.5a.75.75 0 0 1-1.06 0l-1.5-1.5a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l.97.97 2.97-2.97a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"
                                                ></path>
                                              </svg>
                                            </span>
                                            <span
                                              class="ActionListItem-descriptionWrap"
                                            >
                                              <span
                                                class="ActionListItem-label text-normal"
                                              >
                                                <span class="">Security</span>
                                              </span>
                                            </span>
                                            <span
                                              aria-hidden="true"
                                              class="ActionListItem-description QueryBuilder-ListItem-trailing"
                                              >Learn More</span
                                            >
                                          </a>
                                        </li>
                                        <li
                                          role="option"
                                          class="ActionListItem"
                                          data-type="url-result"
                                          id="query-builder-test-result-copilot"
                                          data-value="Copilot"
                                          aria-label="Copilot, jump to this explore page"
                                        >
                                          <a
                                            href="/features/copilot?ref_loc=search"
                                            data-action="click:query-builder#navigate"
                                            tabindex="-1"
                                            class="QueryBuilder-ListItem-link ActionListContent ActionListContent--visual16 QueryBuilder-ListItem"
                                          >
                                            <span
                                              id="query-builder-test-result-copilot--leading"
                                              class="ActionListItem-visual ActionListItem-visual--leading"
                                            >
                                              <svg
                                                aria-hidden="true"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                version="1.1"
                                                width="16"
                                                data-view-component="true"
                                                class="octicon octicon-copilot"
                                              >
                                                <path
                                                  d="M7.998 15.035c-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.201-.508-.254-1.084-.254-1.656 0-.87.128-1.769.693-2.484.579-.733 1.494-1.124 2.724-1.261 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.053 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095v1.872c0 .766-3.351 3.795-8.002 3.795Zm0-1.485c2.28 0 4.584-1.11 5.002-1.433V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.059-.327-2.71-.991A3.222 3.222 0 0 1 8 6.303a3.24 3.24 0 0 1-.544.743c-.65.664-1.563.991-2.71.991-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433ZM6.762 2.83c-.193-.206-.637-.413-1.682-.297-1.019.113-1.479.404-1.713.7-.247.312-.369.789-.369 1.554 0 .793.129 1.171.308 1.371.162.181.519.379 1.442.379.853 0 1.339-.235 1.638-.54.315-.322.527-.827.617-1.553.117-.935-.037-1.395-.241-1.614Zm4.155-.297c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Z"
                                                ></path>
                                                <path
                                                  d="M6.25 9.037a.75.75 0 0 1 .75.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 .75-.75Zm4.25.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 1.5 0Z"
                                                ></path>
                                              </svg>
                                            </span>
                                            <span
                                              class="ActionListItem-descriptionWrap"
                                            >
                                              <span
                                                class="ActionListItem-label text-normal"
                                              >
                                                <span class="">Copilot</span>
                                              </span>
                                            </span>
                                            <span
                                              aria-hidden="true"
                                              class="ActionListItem-description QueryBuilder-ListItem-trailing"
                                              >Learn More</span
                                            >
                                          </a>
                                        </li>
                                        <li
                                          role="option"
                                          class="ActionListItem"
                                          data-type="url-result"
                                          id="query-builder-test-result-pricing"
                                          data-value="Pricing"
                                          aria-label="Pricing, jump to this explore page"
                                        >
                                          <a
                                            href="/pricing?ref_loc=search"
                                            data-action="click:query-builder#navigate"
                                            tabindex="-1"
                                            class="QueryBuilder-ListItem-link ActionListContent ActionListContent--visual16 QueryBuilder-ListItem"
                                          >
                                            <span
                                              id="query-builder-test-result-pricing--leading"
                                              class="ActionListItem-visual ActionListItem-visual--leading"
                                            >
                                              <svg
                                                aria-hidden="true"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                version="1.1"
                                                width="16"
                                                data-view-component="true"
                                                class="octicon octicon-credit-card"
                                              >
                                                <path
                                                  d="M10.75 9a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5Z"
                                                ></path>
                                                <path
                                                  d="M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25ZM14.5 6.5h-13v5.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Zm0-2.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25V5h13Z"
                                                ></path>
                                              </svg>
                                            </span>
                                            <span
                                              class="ActionListItem-descriptionWrap"
                                            >
                                              <span
                                                class="ActionListItem-label text-normal"
                                              >
                                                <span class="">Pricing</span>
                                              </span>
                                            </span>
                                            <span
                                              aria-hidden="true"
                                              class="ActionListItem-description QueryBuilder-ListItem-trailing"
                                              >Learn More</span
                                            >
                                          </a>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                                <div
                                  class="FormControl-inlineValidation"
                                  id="validation-2ea6a6f0-b539-4714-b736-cbd12052d2c1"
                                  hidden="hidden"
                                >
                                  <span
                                    class="FormControl-inlineValidation--visual"
                                  >
                                    <svg
                                      aria-hidden="true"
                                      height="12"
                                      viewBox="0 0 12 12"
                                      version="1.1"
                                      width="12"
                                      data-view-component="true"
                                      class="octicon octicon-alert-fill"
                                    >
                                      <path
                                        d="M4.855.708c.5-.896 1.79-.896 2.29 0l4.675 8.351a1.312 1.312 0 0 1-1.146 1.954H1.33A1.313 1.313 0 0 1 .183 9.058ZM7 7V3H5v4Zm-1 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                                      ></path>
                                    </svg>
                                  </span>
                                  <span></span>
                                </div>
                              </div>
                              <div
                                data-target="query-builder.screenReaderFeedback"
                                aria-live="polite"
                                aria-atomic="true"
                                class="sr-only"
                              >
                                4 suggestions.
                              </div>
                            </query-builder>
                          </form>
                          <div
                            class="d-flex flex-row color-fg-muted px-3 text-small color-bg-default search-feedback-prompt"
                          >
                            <a
                              target="_blank"
                              href="https://docs.github.com/search-github/github-code-search/understanding-github-code-search-syntax"
                              data-view-component="true"
                              class="Link color-fg-accent text-normal ml-2"
                            >
                              Search syntax tips
                            </a>
                            <div class="d-flex flex-1"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </modal-dialog>
                </div>
              </div>
              <div
                data-action="click:qbsearch-input#retract"
                class="dark-backdrop position-fixed"
                hidden=""
                data-target="qbsearch-input.darkBackdrop"
              ></div>
              <div class="color-fg-default">
                <dialog-helper>
                  <dialog
                    data-target="qbsearch-input.feedbackDialog"
                    data-action="close:qbsearch-input#handleDialogClose cancel:qbsearch-input#handleDialogClose"
                    id="feedback-dialog"
                    aria-modal="true"
                    aria-labelledby="feedback-dialog-title"
                    aria-describedby="feedback-dialog-description"
                    data-view-component="true"
                    class="Overlay Overlay-whenNarrow Overlay--size-medium Overlay--motion-scaleFade"
                  >
                    <div
                      data-view-component="true"
                      class="Overlay-header"
                    >
                      <div class="Overlay-headerContentWrap">
                        <div class="Overlay-titleWrap">
                          <h1
                            class="Overlay-title"
                            id="feedback-dialog-title"
                          >
                            Provide feedback
                          </h1>
                        </div>
                        <div class="Overlay-actionWrap">
                          <button
                            data-close-dialog-id="feedback-dialog"
                            aria-label="Close"
                            type="button"
                            data-view-component="true"
                            class="close-button Overlay-closeButton"
                          >
                            <svg
                              aria-hidden="true"
                              height="16"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              data-view-component="true"
                              class="octicon octicon-x"
                            >
                              <path
                                d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <scrollable-region
                      data-labelled-by="feedback-dialog-title"
                      data-catalyst=""
                      id="style-rHd3K"
                      class="style-rHd3K"
                    >
                      <div
                        data-view-component="true"
                        class="Overlay-body"
                      >
                        <form
                          id="code-search-feedback-form"
                          data-turbo="false"
                          action="/search/feedback"
                          accept-charset="UTF-8"
                          method="post"
                        >
                          <input
                            type="hidden"
                            data-csrf="true"
                            name="authenticity_token"
                            value="QrSgQTA0vNnm5Bey25V2nzJ9ZVxjFUcsmUefner9+2cxmNe0128AmdhMYugdOM2oSIevP3SSctxrfRbcreNjuQ=="
                          />
                          <p>
                            We read every piece of feedback, and take your
                            input very seriously.
                          </p>
                          <textarea
                            name="feedback"
                            class="form-control width-full mb-2"
                            style="height: 120px"
                            id="feedback"
                          ></textarea>
                          <input
                            name="include_email"
                            id="include_email"
                            aria-label="Include my email address so I can be contacted"
                            class="form-control mr-2"
                            type="checkbox"
                          />
                          <label
                            for="include_email"
                            style="font-weight: normal"
                            >Include my email address so I can be
                            contacted</label
                          >
                        </form>
                      </div>
                    </scrollable-region>
                    <div
                      data-view-component="true"
                      class="Overlay-footer Overlay-footer--alignEnd"
                    >
                      <button
                        data-close-dialog-id="feedback-dialog"
                        type="button"
                        data-view-component="true"
                        class="btn"
                      >
                        Cancel
                      </button>
                      <button
                        form="code-search-feedback-form"
                        data-action="click:qbsearch-input#submitFeedback"
                        type="submit"
                        data-view-component="true"
                        class="btn-primary btn"
                      >
                        Submit feedback
                      </button>
                    </div>
                  </dialog>
                </dialog-helper>
                <custom-scopes
                  data-target="qbsearch-input.customScopesManager"
                  data-catalyst=""
                >
                  <dialog-helper>
                    <dialog
                      data-target="custom-scopes.customScopesModalDialog"
                      data-action="close:qbsearch-input#handleDialogClose cancel:qbsearch-input#handleDialogClose"
                      id="custom-scopes-dialog"
                      aria-modal="true"
                      aria-labelledby="custom-scopes-dialog-title"
                      aria-describedby="custom-scopes-dialog-description"
                      data-view-component="true"
                      class="Overlay Overlay-whenNarrow Overlay--size-medium Overlay--motion-scaleFade"
                    >
                      <div
                        data-view-component="true"
                        class="Overlay-header Overlay-header--divided"
                      >
                        <div class="Overlay-headerContentWrap">
                          <div class="Overlay-titleWrap">
                            <h1
                              class="Overlay-title"
                              id="custom-scopes-dialog-title"
                            >
                              Saved searches
                            </h1>
                            <h2
                              id="custom-scopes-dialog-description"
                              class="Overlay-description"
                            >
                              Use saved searches to filter your results more
                              quickly
                            </h2>
                          </div>
                          <div class="Overlay-actionWrap">
                            <button
                              data-close-dialog-id="custom-scopes-dialog"
                              aria-label="Close"
                              type="button"
                              data-view-component="true"
                              class="close-button Overlay-closeButton"
                            >
                              <svg
                                aria-hidden="true"
                                height="16"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                                data-view-component="true"
                                class="octicon octicon-x"
                              >
                                <path
                                  d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <scrollable-region
                        data-labelled-by="custom-scopes-dialog-title"
                        data-catalyst=""
                        id="style-o68Il"
                        class="style-o68Il"
                      >
                        <div
                          data-view-component="true"
                          class="Overlay-body"
                        >
                          <div
                            data-target="custom-scopes.customScopesModalDialogFlash"
                          ></div>
                          <div
                            hidden=""
                            class="create-custom-scope-form"
                            data-target="custom-scopes.createCustomScopeForm"
                          >
                            <form
                              id="custom-scopes-dialog-form"
                              data-turbo="false"
                              action="/search/custom_scopes"
                              accept-charset="UTF-8"
                              method="post"
                            >
                              <input
                                type="hidden"
                                data-csrf="true"
                                name="authenticity_token"
                                value="AUny1UxSOT7mljxBbs6EXTjcDuOyXluo/Hm8YYnL1xh+NSCRevJ9RLzxGbCwY1bErP7tzNcOWJYIixP/DFo+uA=="
                              />
                              <div
                                data-target="custom-scopes.customScopesModalDialogFlash"
                              ></div>
                              <input
                                type="hidden"
                                id="custom_scope_id"
                                name="custom_scope_id"
                                data-target="custom-scopes.customScopesIdField"
                              />
                              <div class="form-group">
                                <label for="custom_scope_name">Name</label>
                                <auto-check
                                  src="/search/custom_scopes/check_name"
                                  required=""
                                >
                                  <input
                                    type="text"
                                    name="custom_scope_name"
                                    id="custom_scope_name"
                                    data-target="custom-scopes.customScopesNameField"
                                    class="form-control"
                                    autocomplete="off"
                                    placeholder="github-ruby"
                                    required=""
                                    maxlength="50"
                                    spellcheck="false"
                                  />
                                  <input
                                    type="hidden"
                                    data-csrf="true"
                                    value="cmuTcal+htd3BgIHu+bFqc5OYJi5kvHePdL4dF4ziqfzz3WVIArn6H3D9qmcLYMfw5aoPSe3AS3F692QjJE3rw=="
                                  />
                                </auto-check>
                              </div>
                              <div class="form-group">
                                <label for="custom_scope_query">Query</label>
                                <input
                                  type="text"
                                  name="custom_scope_query"
                                  id="custom_scope_query"
                                  data-target="custom-scopes.customScopesQueryField"
                                  class="form-control"
                                  autocomplete="off"
                                  placeholder="(repo:mona/a OR repo:mona/b) AND lang:python"
                                  required=""
                                  maxlength="500"
                                />
                              </div>
                              <p class="text-small color-fg-muted">
                                To see all available qualifiers, see our
                                <a
                                  class="Link--inTextBlock"
                                  href="https://docs.github.com/search-github/github-code-search/understanding-github-code-search-syntax"
                                  >documentation</a
                                >.
                              </p>
                            </form>
                          </div>
                          <div
                            data-target="custom-scopes.manageCustomScopesForm"
                          >
                            <div data-target="custom-scopes.list"></div>
                          </div>
                        </div>
                      </scrollable-region>
                      <div
                        data-view-component="true"
                        class="Overlay-footer Overlay-footer--alignEnd Overlay-footer--divided"
                      >
                        <button
                          data-action="click:custom-scopes#customScopesCancel"
                          type="button"
                          data-view-component="true"
                          class="btn"
                        >
                          Cancel
                        </button>
                        <button
                          form="custom-scopes-dialog-form"
                          data-action="click:custom-scopes#customScopesSubmit"
                          data-target="custom-scopes.customScopesSubmitButton"
                          type="submit"
                          data-view-component="true"
                          class="btn-primary btn"
                        >
                          Create saved search
                        </button>
                      </div>
                    </dialog>
                  </dialog-helper>
                </custom-scopes>
              </div>
            </qbsearch-input>
            <input
              type="hidden"
              data-csrf="true"
              class="js-data-jump-to-suggestions-path-csrf"
              value="atvOh0C+3JJCCwLmVLIoQTWp5UBD2sBjQ6uqgqt8i9eLdE1t4YjAjMfUhknVin/zb1iTdJ8earJ//hw9Eu2KLg=="
            />
            <div class="position-relative mr-lg-3 d-lg-inline-block">
              <a
                href="/login"
                class="HeaderMenu-link HeaderMenu-link--sign-in flex-shrink-0 no-underline d-block d-lg-inline-block border border-lg-0 rounded rounded-lg-0 p-2 p-lg-0"
                data-hydro-click='{"event_type":"authentication.click","payload":{"location_in_page":"site header menu","repository_id":null,"auth_type":"SIGN_UP","originating_url":"https://github.com/","user_id":null}}'
                data-hydro-click-hmac="1ac0bd316eb4ecff0fd1f338bc397cea8b5025ce78fffb7ade6ffdd600360286"
                data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in"
              >
                Sign in
              </a>
            </div>
            <a
              href="/signup?ref_cta=Sign+up&amp;ref_loc=header+logged+out&amp;ref_page=%2F&amp;source=header-home"
              class="HeaderMenu-link HeaderMenu-link--sign-up flex-shrink-0 d-none d-lg-inline-block no-underline border color-border-default rounded px-2 py-1"
              data-hydro-click='{"event_type":"authentication.click","payload":{"location_in_page":"site header menu","repository_id":null,"auth_type":"SIGN_UP","originating_url":"https://github.com/","user_id":null}}'
              data-hydro-click-hmac="1ac0bd316eb4ecff0fd1f338bc397cea8b5025ce78fffb7ade6ffdd600360286"
              data-analytics-event='{"category":"Sign up","action":"click to sign up for account","label":"ref_page:/;ref_cta:Sign up;ref_loc:header logged out"}'
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>

    `;
}

// Call the function to initialize the page
initializarMenu();