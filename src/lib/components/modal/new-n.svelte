<script lang="ts">
import { Button } from "$lib/components/ui/button/index.js";
import CarouselElements from "./elements/elms.svelte";
import { X } from "lucide-svelte";
export let modalState: boolean;
export let toggleModal: () => void;

let container: HTMLElement;
let currentIndex: number = 0;
const length: number = 52;

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
    bg-background w-full flex flex-col overflow-hidden
    gap-3 p-3 duration-200 z-10 fixed bottom-0 left-0
    "
    style="
        height: {modalState ? '100dvh' : '0'};
        padding-bottom: {modalState ? '1.5rem' : '0'};
    "
>
    <!-- Header -->
    <div class="flex items-center justify-between">
        <h3 class="text-md font-semibold">New negotiation</h3>
        <Button variant="ghost" onclick={toggleModal}>
            <X />
        </Button>
    </div>

    <!-- Container -->
    <div bind:this={container} class="w-full h-full flex overflow-x-hidden snap-x snap-mandatory lg:w-[800px] lg:mx-auto">
        <!-- TODO: Add more -->
        <CarouselElements />
    </div>

    <!-- Controls -->
    <div class="flex justify-between">
        <Button
            variant="ghost"
            onclick={swipePrev}
            class="transition-all duration-200 overflow-hidden"
            style={`
                width: ${currentIndex === 0 ? '0px' : '80px'};
                padding: ${currentIndex === 0 ? '0px' : '0.5rem'};
                margin-right: ${currentIndex === 0 ? '0px' : '0.75rem'};
            `}
        >
            Back
        </Button>
        <Button onclick={swipeNext} class="w-full">
            Next
        </Button>
    </div>
</div>
