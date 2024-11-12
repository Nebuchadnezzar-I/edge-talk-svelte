<script lang="ts">
import * as Avatar from "$lib/components/ui/avatar/index.js";
import { Button } from "$lib/components/ui/button/index.js";
import NewNegotiation from '$lib/components/modal/new-n.svelte';

let isExpanded = $state(false);
</script>

<div class="w-full h-full p-3 flex flex-col gap-3">
    <!-- Header -->
    <div class="flex items-center justify-between">
        <h3 class="text-xl font-semibold">EdgeTalk.ai</h3>
        <Avatar.Root>
            <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
            <Avatar.Fallback>CN</Avatar.Fallback>
        </Avatar.Root>
    </div>

    <div class="body-content w-full h-full flex items-center justify-center">
        <Button class="rounded-full px-6" onclick={() => isExpanded = !isExpanded}>
            New Negotiation
        </Button>
    </div>

    <NewNegotiation {isExpanded} />
</div>
