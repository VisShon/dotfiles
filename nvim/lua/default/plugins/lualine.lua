return {
	"nvim-lualine/lualine.nvim",
	dependencies = { "nvim-tree/nvim-web-devicons" },
	config = function()
		local colors = {
			black = "#011423",
			white = "#CBE0F0",
			red = "#c71616",
			grey = "#303340",
			main = "#47FF9C",
			background = "#24252E",
			accent = "#FFE073",
		}

		local bubbles_theme = {
			normal = {
				a = { fg = colors.black, bg = colors.main },
				b = { fg = colors.white, bg = colors.grey },
				c = { fg = colors.background },
			},

			insert = { a = { fg = colors.black, bg = colors.accent } },
			visual = { a = { fg = colors.black, bg = colors.main } },
			replace = { a = { fg = colors.black, bg = colors.red } },

			inactive = {
				a = { fg = colors.black, bg = colors.grey },
				b = { fg = colors.black, bg = colors.grey },
				c = { fg = colors.black },
			},
		}

		local lualine = require("lualine")

		-- configure lualine with modified theme
		lualine.setup({
			options = {
				theme = bubbles_theme,
				component_separators = "",
				section_separators = { left = "", right = "" },
			},
			sections = {
				lualine_a = {
					"mode",
				},
				lualine_b = {
					{ "filename", separator = { left = "", right = "" }, right_padding = 2 },
					{ "branch", separator = { left = "", right = "" }, right_padding = 2 },
				},
				lualine_y = {
					{ "filetype", separator = { right = "", left = "" }, left_padding = 2 },
					{ "progress", separator = { right = "", left = "" }, left_padding = 2 },
				},
				lualine_x = {},
				lualine_z = {
					"location",
				},
			},
			inactive_sections = {
				lualine_a = { "filename" },
				lualine_b = {},
				lualine_c = {},
				lualine_x = {},
				lualine_y = {},
				lualine_z = { "location" },
			},
			tabline = {},
			extensions = {},
		})
	end,
}
