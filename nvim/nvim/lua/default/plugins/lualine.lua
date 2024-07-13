return {
	"nvim-lualine/lualine.nvim",
	dependencies = { "nvim-tree/nvim-web-devicons" },
	config = function()
		local lualine = require("lualine")
		local lazy_status = require("lazy.status") -- to configure lazy pending updates count

		local andromeda_lualine = require("andromeda.plugins.lualine")

		-- configure lualine with modified theme
		lualine.setup({
			options = {
			theme = andromeda_lualine.theme,
			},
			sections = {
			lualine_x = {
				{
				lazy_status.updates,
				cond = lazy_status.has_updates,
				color = { fg = "#ff9e64" },
				},
				{ "encoding" },
				{ "fileformat" },
				{ "filetype" },
			},
			},
			inactive_sections = andromeda_lualine.inactive_sections,
		})
	end,
  }
  