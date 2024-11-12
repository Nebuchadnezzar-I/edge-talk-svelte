<script lang="ts">
import { Button } from "$lib/components/ui/button/index.js";
import { X } from "lucide-svelte";
export let modalState: boolean;
export let toggleModal: () => void;

let container: HTMLElement;
let currentIndex: number = 0;
const length: number = 3;

function swipeNext() {
    if (currentIndex < length - 1) {
        currentIndex++;
        scrollToIndex(currentIndex);
    }
}

function swipePrev() {
    if (currentIndex > 0) {
        currentIndex--;
        scrollToIndex(currentIndex);
    }
}

function scrollToIndex(index: number) {
    if (container) {
        const width = container.clientWidth;
        container.scrollTo({
            left: width * index,
            behavior: 'smooth'
        });
    }
}
</script>

<div
    class="
    modal bg-background w-full flex flex-col
    gap-3 p-3 duration-200 z-10 fixed bottom-0 left-0
    "
    style="height: {modalState ? '100dvh' : '0dvh'};"
>
    <!-- Header -->
    <div class="flex items-center justify-between">
        <h3 class="text-md font-semibold">New negotiation</h3>
        <Button variant="ghost" onclick={toggleModal}>
            <X />
        </Button>
    </div>

    <!-- Container -->
    <div bind:this={container} class="w-full h-full flex overflow-x-auto snap-x snap-mandatory">
        <!-- TODO: Add more -->
        <div class="min-w-full snap-start">
            133
        </div>
        <div class="min-w-full snap-start">
            133
        </div>
        <div class="min-w-full snap-start">
            133
        </div>
    </div>

    <!-- Controls -->
    <div class="flex justify-between">
        <Button variant="ghost" onclick={swipePrev}>
            Back
        </Button>
        <Button onclick={swipeNext} class="w-full">
            Next
        </Button>
    </div>
</div>
