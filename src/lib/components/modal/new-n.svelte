<script lang="ts">
import { Button } from "$lib/components/ui/button/index.js";
import { X } from "lucide-svelte";
let { isExpanded } = $props();
</script>

<style>
.modal {
    transition: all 200ms ease-in-out;
    z-index: 1000;
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    overflow: hidden;
}
</style>

<div
    class="modal bg-background flex flex-col gap-3 p-3"
    style="height: {isExpanded ? '100dvh' : '0dvh'};"
>
    <div class="flex items-center justify-between">
        <h3 class="text-md font-semibold">New negotiation</h3>
        <Button variant="ghost" onclick={() => isExpanded = !isExpanded}>
            <X />
        </Button>
    </div>

    <div class="w-full h-full">
        Content
    </div>
</div>
