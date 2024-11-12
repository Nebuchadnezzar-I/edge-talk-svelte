<script lang="ts">
import { Button } from "$lib/components/ui/button/index.js";
import NewNegotiation from '$lib/components/modal/new-n.svelte';
import Header from '$lib/components/header/header.svelte';

let modalState = $state(false);
function toggleModal() {
    modalState = !modalState;
}
</script>

<div class="w-full h-full p-3 flex flex-col gap-3">
    <!-- Header -->
    <Header />

    <!-- Body -->
    <div class="body-content w-full h-full flex items-center justify-center">
        <Button class="rounded-full px-6" onclick={toggleModal}>
            New Negotiation
        </Button>
    </div>

    <!-- Modal -->
    <NewNegotiation toggleModal={toggleModal} modalState={modalState} />
</div>
