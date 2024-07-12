-- import lualine plugin safely
local status, lualine = pcall(require, "lualine")
if not status then
	return
end

-- get lualine nightfly theme
local andromeda_lualine = require("andromeda.plugins.lualine")

require("lualine").setup({
	options = {
		theme = andromeda_lualine.theme,
	},
	sections = andromeda_lualine.sections,
	inactive_sections = andromeda_lualine.inactive_sections,
})
