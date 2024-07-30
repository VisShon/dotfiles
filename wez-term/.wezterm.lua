local wezterm = require("wezterm")

local config = wezterm.config_builder()

config.colors = {
	foreground = "#CBE0F0",
	background = "#181524",
	cursor_bg = "#47FF9C",
	cursor_border = "#47FF9C",
	cursor_fg = "#011423",
	selection_bg = "#44FFB1",
	selection_fg = "#CBE0F0",
	ansi = { "#041409", "#E52E2E", "#44FFB1", "#FFE073", "#0f85ed", "#a277ff", "#24EAF7", "#44FFB1" },
	brights = { "#214969", "#E52E2E", "#44FFB1", "#FFE073", "#A277FF", "#a277ff", "#24EAF7", "#24EAF7" },
}

config.font = wezterm.font("Inconsolata Nerd Font")
config.font_size = 18

config.enable_tab_bar = false

config.window_decorations = "RESIZE"
config.window_background_opacity = 0.85
config.macos_window_background_blur = 30

return config
