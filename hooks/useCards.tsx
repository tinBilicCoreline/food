import { useMemo } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useRecoilValue } from "recoil";
import {
  createCard,
  deleteCard,
  duplicateCard,
  getCards,
  shareCard,
} from "../api/api";
import { loginStateAtom } from "../state/state";

export const useCards = (disabled = false) => {
  const loginStateValue = useRecoilValue(loginStateAtom);
  const queryClient = useQueryClient();
  const token = loginStateValue?.token;
  const storeKey = useMemo(() => ["cards"], []);

  const { isLoading, data, refetch } = useQuery(
    storeKey,
    () => getCards({ token }),
    {
      retry: false,
      enabled: !!token && !disabled,
    }
  );

  const { cards } = data || {};

  const { mutateAsync: createCardRequest } = useMutation(
    ({ name }: { name: string }) => createCard({ name, token }),
    { onSuccess: () => queryClient.invalidateQueries(storeKey) }
  );

  const { mutateAsync: shareCardRequest } = useMutation(
    ({ id }: { id: number }) => shareCard({ id, token })
  );

  const { mutateAsync: duplicateCardRequest } = useMutation(
    ({ id }: { id: number }) => duplicateCard({ id, token })
  );

  const { mutateAsync: deleteCardRequest } = useMutation(
    ({ id }: { id: number }) => deleteCard({ id, token })
  );

  return {
    data: cards,
    isLoading,
    refetch,
    createCardRequest,
    shareCardRequest,
    duplicateCardRequest,
    deleteCardRequest,
  };
};
