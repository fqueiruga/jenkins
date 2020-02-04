import $ from 'jquery';
import jsModules from 'jenkins-js-modules';

/*
 * Page initialisation tasks.
 */

$(function() {
    loadScripts();
    loadCSS();
});

function loadScripts() {
    $('.jenkins-js-load').each(function () {
        var scriptUrl = $(this).attr('data-src');
        if (scriptUrl) {
            // jsModules.addScript will ensure that the script is
            // loaded once and once only. So, this can be considered
            // analogous to a client-side adjunct.
            jsModules.addScript(scriptUrl);
            $(this).remove();
        }
    });
}

function loadCSS() {
    $('.jenkins-css-load').each(function () {
        var cssUrl = $(this).attr('data-src');
        if (cssUrl) {
            // jsModules.addCSSToPage will ensure that the CSS is
            // loaded once and once only. So, this can be considered
            // analogous to a client-side adjunct.
            jsModules.addCSSToPage(cssUrl);
            $(this).remove();
        }
    });
}


$(document).ready(function() {
    const mainPanel = document.getElementById('main-panel');
    const jobContent = document.querySelector('.job-main__content-wrapper');
    const sidebar = document.querySelector('.job-main__sidebar');

    const isSidebarEmpty = sidebar.innerHTML.trim().length === 0;
    if (isSidebarEmpty) {
        document.querySelector('.job-main__tabbar')
            .style.display = 'none';
        return;
    }

    mainPanel.classList.add('job-main__panel')
    jobContent.setAttribute('id', 'job-information');
    sidebar.setAttribute('id', 'job-trends');
    mainPanel.appendChild(sidebar);

    const tabs = [jobContent, sidebar];
    let currentTabId;
    for (const tab of tabs) {
        if (tab.classList.contains('is-active')) {
            currentTabId = tab.getAttribute('id');
            break;
        }
    }

    $(document).on('click', '.job-main__tabbar a', (e) => {
        e.preventDefault();
        e.stopPropagation();

        const href = e.target.getAttribute('href');
        const targetTabId = href.replace(/#/, '');
        if (currentTabId === targetTabId) return;

        // toggle tab content
        tabs.forEach(tab => {
            tab.classList.toggle('is-active', tab.getAttribute('id') === targetTabId);
        });

        // toggle tab links
        document.querySelectorAll('.job-main__tabbar a').forEach(tabLink => {
            const parentTab = $(tabLink).closest('.tab')[0];
            const tabRadio = $(parentTab).find('input[type=radio]')[0];

            const isActive = tabLink.href === '#' + targetTabId;
            parentTab.classList.toggle('active', isActive);
            tabRadio.setAttribute('checked', isActive ? 'true' : 'false');
        })

        // change current id
        currentTabId = targetTabId;
    });
});
