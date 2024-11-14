<script lang="ts">
interface Props {
    toggleModal: () => void;
    modalState: boolean;
}

let { toggleModal, modalState }: Props = $props();

import { Button } from "$lib/components/ui/button/index.js";
import CarouselElements from "./elements/elms.svelte";
import { X } from "lucide-svelte";

let state = $state({
    currentIndex: 0,
    isNavigationVisible: true,
});

const showNavigation = (s: boolean) =>
    state.isNavigationVisible = s;

const noNavigationElements = [ 1 ];
const setCurrentIndex = (idx: number) => {
    if (noNavigationElements.includes(idx)) showNavigation(false);
        else showNavigation(true);

    state.currentIndex = idx;
};

let container: HTMLElement;
const length = 52;
const swipeNext = () =>
    state.currentIndex < length - 1 && (
        setCurrentIndex(state.currentIndex + 1),
        scrollToIndex(state.currentIndex, container)
    );

const swipePrev = () =>
    state.currentIndex > 0 && (
        setCurrentIndex(state.currentIndex - 1),
        scrollToIndex(state.currentIndex, container)
    );

export function scrollToIndex(index: number, container: HTMLElement) {
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
    <div class="flex items-center justify-between">
        <h3 class="text-md font-semibold">New negotiation</h3>
        <Button variant="ghost" onclick={toggleModal}>
            <X />
        </Button>
    </div>

    <div bind:this={container} class="w-full h-full flex overflow-x-hidden snap-x snap-mandatory lg:w-[800px] lg:mx-auto">
        <CarouselElements {swipeNext} />
    </div>

    <div
        class="flex justify-between overflow-hidden transition-all duration-200"
        style="
        height: {state.isNavigationVisible ? '3rem' : '0px'}
        "
    >
        <Button
            variant="ghost"
            onclick={swipePrev}
            class="transition-all duration-200 overflow-hidden "
            style={`
                width: ${state.currentIndex === 0 ? '0px' : '80px'};
                padding: ${state.currentIndex === 0 ? '0px' : '0.5rem'};
                margin-right: ${state.currentIndex === 0 ? '0px' : '0.75rem'};
            `}
        >
            Back
        </Button>
        <Button onclick={swipeNext} class="w-full">
            Next
        </Button>
    </div>
</div>
