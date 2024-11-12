<script lang="ts">
import * as Avatar from "$lib/components/ui/avatar/index.js";
import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
import { toggleMode } from "mode-watcher";
</script>

<div class="flex items-center justify-between">
    <h3 class="text-xl font-semibold">EdgeTalk.ai</h3>

    <DropdownMenu.Root>
        <DropdownMenu.Trigger>
            <Avatar.Root>
                <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
                <Avatar.Fallback>CN</Avatar.Fallback>
            </Avatar.Root>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content class="mr-3 w-56">
            <DropdownMenu.Group>
                <DropdownMenu.GroupHeading>My account</DropdownMenu.GroupHeading>
                <DropdownMenu.Separator />
                <DropdownMenu.Item onclick={toggleMode}>
                    Switch Theme
                </DropdownMenu.Item>
            </DropdownMenu.Group>
        </DropdownMenu.Content>
    </DropdownMenu.Root>
</div>
