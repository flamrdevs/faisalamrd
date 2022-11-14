/** @jsxImportSource solid-js */

import { createEffect, createSignal, Show } from "solid-js";
import type { Component } from "solid-js";

import { Motion, Presence } from "@motionone/solid";

import { useStore } from "@nanostores/solid";

import SelectedPhotoStore, { removePhoto } from "~/stores/selected-photo";

function useSelectedPhotoStore() {
  return useStore(SelectedPhotoStore);
}

function handlePreventDefaultStopPropagation(event: MouseEvent) {
  event.preventDefault();
  event.stopPropagation();
}

const PhotoModal: Component = () => {
  const photo = useSelectedPhotoStore();

  return (
    <Presence exitBeforeEnter>
      <Show when={photo()}>
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          class="fixed inset-0 flex justify-center items-center p-8 bg-neutral-900/50 backdrop-blur"
          onClick={removePhoto}
        >
          <Motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            class="relative overflow-hidden rounded md:rounded-lg xl:rounded-2xl"
            onClick={handlePreventDefaultStopPropagation}
          >
            <img
              class="w-full h-full max-h-[77vh] aspect-square object-cover group-hover:scale-110 transition-transform duration-300"
              src={photo().src}
              alt={photo().id}
            />
          </Motion.div>
        </Motion.div>
      </Show>
    </Presence>
  );
};

export default PhotoModal;
