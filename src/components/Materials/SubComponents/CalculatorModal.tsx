/** @format */

"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface CalculatorModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function CalculatorModal({
  open,
  onOpenChange,
}: CalculatorModalProps) {
  const [dimensions, setDimensions] = useState({
    length: "2",
    width: "2",
    height: "2",
  });
  const [result, setResult] = useState({
    soilVolume: 0,
    truckCapacity: 6.7,
    estimatedLoads: 0,
  });
  const [showResults, setShowResults] = useState(false);

  const calculateVolume = () => {
    const length = parseFloat(dimensions.length);
    const width = parseFloat(dimensions.width);
    const height = parseFloat(dimensions.height);

    const volume = length * width * height;
    const loads = Math.ceil(volume / result.truckCapacity);

    setResult({
      ...result,
      soilVolume: volume,
      estimatedLoads: loads,
    });
    setShowResults(true);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[400px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl sm:text-3xl font-bold text-primary">
            Tipper Truck Load Calculator
          </DialogTitle>
          <p className="text-sm text-primary/70">
            Enter soil dimensions to calculate volume and required loads
          </p>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Dimension Inputs */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-semibold text-primary mb-2 block">
                Length
              </label>
              <Input
                type="number"
                value={dimensions.length}
                onChange={(e) =>
                  setDimensions((prev) => ({ ...prev, length: e.target.value }))
                }
                className="w-full border-2 border-primary focus-visible:ring-0 text-center"
                placeholder="2m"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-primary mb-2 block">
                Width
              </label>
              <Input
                type="number"
                value={dimensions.width}
                onChange={(e) =>
                  setDimensions((prev) => ({ ...prev, width: e.target.value }))
                }
                className="w-full border-2 border-primary focus-visible:ring-0 text-center"
                placeholder="2m"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-primary mb-2 block">
                Height
              </label>
              <Input
                type="number"
                value={dimensions.height}
                onChange={(e) =>
                  setDimensions((prev) => ({ ...prev, height: e.target.value }))
                }
                className="w-full border-2 border-primary focus-visible:ring-0 text-center"
                placeholder="2m"
              />
            </div>
          </div>

          {/* Calculate Button */}
          <Button
            onClick={calculateVolume}
            className="w-full bg-custom-orange hover:bg-custom-orange/80 text-white font-bold py-3"
          >
            CALCULATE VOLUME
          </Button>

          {/* Results Section */}
          {showResults && (
            <div className="bg-background2 rounded-lg p-6 space-y-4">
              <h3 className="text-xl font-bold text-primary mb-4">Results</h3>

              <div className="flex justify-between items-center pb-4">
                <span className="text-primary font-medium">Soil Volume:</span>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-primary">
                    {result.soilVolume.toFixed(2)} m³
                  </span>
                  <Button
                    variant="link"
                    className="text-blue-500 hover:text-blue-700 p-0 h-auto"
                    onClick={() => setShowResults(false)}
                  >
                    Edit
                  </Button>
                </div>
              </div>

              <div className="flex justify-between items-center border-t border-primary/20 pt-4">
                <span className="text-primary font-medium">
                  Truck Capacity:
                </span>
                <span className="text-lg font-semibold text-primary">
                  {result.truckCapacity} m³ / load
                </span>
              </div>

              <div className="flex justify-between items-center border-t border-primary/20 pt-4">
                <span className="text-primary font-medium">
                  Estimated Loads Required
                </span>
                <span className="text-2xl font-bold text-primary">
                  {result.estimatedLoads} loads
                </span>
              </div>

              <p className="text-xs text-custom-orange pt-4">
                *Based on standard tipper truck capacity. Actual loads may vary.
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
