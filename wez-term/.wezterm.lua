-- Import the wezterm API
local wezterm = require("wezterm")

-- Create a configuration object using the config builder API
local config = wezterm.config_builder()

-- --- Color Configuration ---
config.colors = {
	-- Foreground color (text color)
	foreground = "#CBE0F0",

	-- Background color of the terminal
	background = "#24252E",

	-- Cursor color when focusaed on the terminal
	cursor_bg = "#47FF9C",

	-- Cursor border color (used around the cursor)
	cursor_border = "#47FF9C",

	-- Foreground color of the cursor (text under the cursor)
	cursor_fg = "#011423",

	-- Background color of selected text
	selection_bg = "#44FFB1",

	-- Foreground color of selected text
	selection_fg = "#04140d",

	-- ANSI color palette (standard colors used by terminal applications)
	ansi = {
		"#041409", -- Black
		"#c71616", -- Red
		"#27d679", -- Green
		"#FFE073", -- Yellow
		"#0f85ed", -- Blue
		"#7743e8", -- Magenta
		"#24EAF7", -- Cyan
		"#44FFB1", -- Light Green
	},

	-- Bright color palette (brighter versions of the ANSI colors)
	brights = {
		"#214969", -- Bright Black (dark gray)
		"#E52E2E", -- Bright Red
		"#44FFB1", -- Bright Green
		"#FFE073", -- Bright Yellow
		"#A277FF", -- Bright Blue
		"#3e7eed", -- Bright Magenta
		"#24EAF7", -- Bright Cyan
		"#24EAF7", -- Bright White
	},
}

-- --- Font Configuration ---
-- Set the font to 'Inconsolata Nerd Font'
config.font = wezterm.font("Inconsolata Nerd Font")

-- Set the font size to 18 points
config.font_size = 18

-- --- UI Configuration ---
-- Disable the tab bar (useful if you only use single panes or external tab management)
config.enable_tab_bar = false

-- Set window decorations to only allow resizing (hides the title bar)
config.window_decorations = "RESIZE"

-- Set the window background opacity (transparency level)
config.window_background_opacity = 1

-- Apply a blur effect to the window background on macOS
-- config.macos_window_background_blur = 50

-- Return the final configuration to WezTerm
return config
