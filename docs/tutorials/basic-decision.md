# Basic Decision

This tutorial will teach you how to create a basic decision which is available to your character under the `Decisions` tab.

## Folder Structure

* If you have not already, create a mod. See [Project Setup](/fundamentals/project-setup.md).
* Create a new folder under your `mod` folder called `common`.
* Create another folder under `common` called `decisions`. This is where all your decisions will be stored.

## Creating the File

Now that we have a decisions folder set up to handle all of our decisions, we can create a new file. For now, we can call this file `example_decision.txt`.

## Decision File Structure

This is a snippet from the information file you can find at `InstallationDirectory/Crusader Kings III/game/common/decisions/_decisions.info`, containing all the information needed for your decision file structure:

```
Decisions are sorted by the order in the script files (and thus the order of the script files themselves).

Major decisions are highlighted in the list, and will be considered important by default.
Important decisions will spawn an Action when they can be taken. The player can change whether or not a decision type is important to them.

my_decision = {
	title = <key> | { ... }			# override title, default: "<key>"; supports dynamic descriptions like in events (first_valid, ...); scope: character
	picture = "image_name.dds"		# set decision image

	major = yes/no					# See notes above. Default: no
	ai_goal = yes/no 				# If set, the AI will consider the decision a "goal" and consider it alongside major costs like title creation and holding construction. It will ignore ai_check_interval. Should only be used for things with such major costs that budgeting for it is important, as it is less performant than using a high ai_check_interval
	ai_check_frequency = 42			# How many months to go between each check of this decision. Has to be set, except if ai_goal = yes is set. An interval of 0 means the AI will never check this decision

	selection_tooltip = <key> | { ... } # override tooltip when selecting the decision from the decision list, default: "<key>_tooltip"; supports dynamic descriptions like in events (first_valid, ...); scope: character
	desc = <key> | { ... }			# override description, default: "<key>_desc"; supports dynamic descriptions like in events (first_valid, ...); scope: character
	confirm_text = <key> | { ... }	# override confirm_text, default: "<key>_confirm"; supports dynamic descriptions like in events (first_valid, ...); scope: character

	is_shown = { ... }				# is decision visible to the character; scope: character; default: { always = yes }
	is_valid_showing_failures_only = { ... }	# can execute decision; these will be shown in the confirm button tooltip if they fail; scope: character; default: { always = yes }
	is_valid = { ... }				# can execute decision; these will be shown in the detail view under Requirements; scope: character; default: { always = yes }

	cost = {						# cost values, default: 0
		gold = 42
		piety = 42
		prestige = 42
	}

	effect = { ... }				# effect to execute when decision is taken; scope: character

	ai_potential = { ... }			# trigger whether the AI should look at it or not
	ai_will_do = { ... }			# Returns the % chance of executing executing the decision. 0 will never execute it, 100 will alwasy execute it

	# Specify up to one custom widget to embed in the decision. See section about Custom Widgets below.
	widget = {
		# Name of the widget to use. Must be at the path <decision_view_widgets>/<widget_name>.gui
		gui = "<widget_name>"
		# Some widgets require a custom controller (see below). Default: default
		controller = "<controller_type>"
	}
	widget = "<controller_type>"	# alternative short syntax, gui will be "decision_view_widget_<controller_type>"
}
```