return {
	"Pocco81/auto-save.nvim",
	branch = "dev",
	dependencies = {
		"tjdevries/colorbuddy.nvim"
	},
	priority = 1000,
	config = function()
		require("andromeda").setup({
			preset = "andromeda",
			transparent_bg = true,
		})
  
		vim.cmd("colorscheme andromeda")
	end,
  }
  