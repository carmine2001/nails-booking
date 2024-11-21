<template>
    <div class="mt-[30px] w-[80%] m-auto text-[1.1rem]">
        <h1 class="text-3xl">Orari di apertura</h1>

        <div class=" border-gray-300 border-[1px] rounded mt-[20px] py-[20px]">

            <div class="hour">
                <p class="ml-[30px]">Lunedì</p> <p class="mr-[30px]">10:00 - 18:30</p>
            </div>

            <div class="hour">
                <p class="ml-[30px]">Martedì</p> <p class="mr-[30px]">10:00 - 13:00</p>
            </div>
            <div class="hour">
                <p class="ml-[30px]">Mercoledì</p> <p class="mr-[30px]">15:30 - 18:30</p>
            </div>

            <div class="hour">
                <p class="ml-[30px]">Giovedì</p> <p class="mr-[30px]">10:00 - 13:00</p>
            </div>

            <div class="hour">
                <p class="ml-[30px]">Venerdì</p> <p class="mr-[30px]">15:30 - 18:30</p>
            </div>

            <div class="hour">
                <p class="ml-[30px]">Sabato</p> <p class="mr-[30px]">15:30 - 18:30</p>
            </div>

            <div class="hour">
                <p class="ml-[30px]">Domenica</p> <p class="text-red-500 mr-[50px]">chiuso</p>
            </div>

        </div>
    </div>
</template>

<style scoped>
    .hour{
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }
</style>