# Configuration file for the Sphinx documentation builder.

# -- Project information

project = '无色物语'
copyright = '2025, ネオン様'
author = 'Eineon'

version = '1.0'

# -- General configuration
extensions = [
    'sphinx.ext.duration',
    'sphinx.ext.doctest',
    'sphinx.ext.autodoc',
    'sphinx.ext.autosummary',
    'sphinx.ext.intersphinx',
    'sphinx_markdown_tables',
    'sphinx_rtd_theme',
    'sphinx_wagtail_theme',
    'recommonmark',
]

intersphinx_mapping = {
    'python': ('https://docs.python.org/3/', None),
    'sphinx': ('https://www.sphinx-doc.org/en/master/', None),
}
intersphinx_disabled_domains = ['std']

templates_path = ['_templates']

# -- Options for HTML output
html_static_path = ['_end']
html_css_files = ['end-style.css']
html_js_files = ['end-script.js']

# -- HTML theme settings
extensions.append("sphinx_wagtail_theme")
html_theme = 'sphinx_wagtail_theme'
html_theme_options = dict(
    project_name = "无色物语 ~ 幻日序曲 ~",
    logo = "logo.svg",
    logo_alt = "回到首页",
    logo_height = 64,
    logo_width = 64,
    github_url = "https://github.com/Eineon/PalEnd/tree/main/docs/source",
    footer_links = ",".join([
        "Github|https://github.com/Eineon/PalEnd",
    ]),
)
html_last_updated_fmt = '%Y/%m/%d'

# -- Options for HTMLHelp output
htmlhelp_basename = '无色物语'

# -- Options for EPUB output
epub_show_urls = 'footnote'

# -- Options for PDF output
latex_engine = 'xelatex'
latex_use_xindy = False
latex_elements = {
    'preamble': '\\usepackage[UTF8]{ctex}\n',
}

source_parsers = {
    '.md': 'recommonmark.parser.CommonMarkParser',
}

source_suffix = ['.rst', '.md']